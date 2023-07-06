import express from "express";
import request from "supertest";
import { applyPhotoRoutes } from "../routes/photoRoutes";
import {
  applyCorsMiddlewareHandlerError,
  applyCorsMiddlewareOptions,
  whitelist,
  CORS_ERROR_MESSAGE,
} from "./cors";

describe("CORS Middleware", () => {
  let app: express.Express;
  const FORBIDDEN_STATUS = 403;
  const SUCCESS_STATUS = 200;

  beforeEach(() => {
    app = express();
    whitelist.length = 0;
    whitelist.push("http://allowed-origin.com");

    applyCorsMiddlewareOptions(app);
    applyPhotoRoutes(app);
    applyCorsMiddlewareHandlerError(app);
  });

  it("returns 403 Forbidden when origin is not in whitelist", async () => {
    const response = await request(app)
      .get("/")
      .set("origin", "http://non-whitelist.com");
    expect(response.statusCode).toEqual(FORBIDDEN_STATUS);
    expect(response.text).toEqual(CORS_ERROR_MESSAGE);
  });

  it("returns 200 success when origin is in whitelist", async () => {
    const response = await request(app).get("/").set("origin", whitelist[0]);
    expect(response.statusCode).toEqual(SUCCESS_STATUS);
  });

  it("returns 200 success when whitelist contains '*'", async () => {
    whitelist.push("*");
    const response = await request(app)
      .get("/")
      .set("origin", "http://any-origin.com");
    expect(response.statusCode).toEqual(SUCCESS_STATUS);
  });

  it("returns 403 Forbidden when origin is null", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(FORBIDDEN_STATUS);
    expect(response.text).toEqual(CORS_ERROR_MESSAGE);
  });
});
