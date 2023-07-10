import express from "express";
import request from "supertest";
import { applyPhotoRoutes } from "@/routes/photoRoutes";
import {
  BFF_API_KEY,
  UNAUTHORIZED_MESSAGE,
  applyAuthMiddleware,
} from "@/middleware/auth";

describe("Auth Middleware", () => {
  let app: express.Express;
  const UNAUTHORIZED_STATUS = 401;
  const SUCCESS_STATUS = 200;

  beforeEach(() => {
    app = express();
    applyAuthMiddleware(app);
    applyPhotoRoutes(app);
  });

  it("returns 401 Unauthorized when when API key is invalid", async () => {
    const response = await request(app)
      .get("/")
      .set("authorization", "invalid_key");
    expect(response.statusCode).toEqual(UNAUTHORIZED_STATUS);
    expect(response.text).toEqual(UNAUTHORIZED_MESSAGE);
  });

  it("returns 200 success when when API key is valid", async () => {
    const response = await request(app)
      .get("/")
      .set("authorization", BFF_API_KEY);
    expect(response.statusCode).toEqual(SUCCESS_STATUS);
  });
});
