import express from "express";
import request from "supertest";
import { applyPhotoRoutes } from "@/routes/photoRoutes";
import PhotoService from "@/services/photoService";

jest.mock("@/services/photoService");

describe("Photo Routes", () => {
  let app: express.Express;
  const SUCCESS_STATUS = 200;
  const SERVER_ERROR_STATUS = 500;

  beforeEach(() => {
    app = express();
    applyPhotoRoutes(app);
  });

  it("returns 200 success when requesting the root path", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(SUCCESS_STATUS);
    expect(response.body).toEqual({ status: "OK" });
  });

  it("returns 200 success when requesting valid photo category", async () => {
    const mockPhotos = [
      { id: 1, src: "mock_src_1", alt: "mock_alt_1" },
      { id: 2, src: "mock_src_2", alt: "mock_alt_2" },
    ];
    // Mock do método getPhotosByCategory
    (PhotoService.getPhotosByCategory as jest.Mock).mockResolvedValue({
      photos: mockPhotos,
    });

    const response = await request(app).get("/api/photos/validCategory");
    expect(response.statusCode).toEqual(SUCCESS_STATUS);
    expect(response.body).toEqual({ photos: mockPhotos });
  });

  it("returns 500 server error when PhotoService fails", async () => {
    // Mock do método getPhotosByCategory para simular uma falha
    (PhotoService.getPhotosByCategory as jest.Mock).mockRejectedValue(
      new Error()
    );

    const response = await request(app).get("/api/photos/validCategory");
    expect(response.statusCode).toEqual(SERVER_ERROR_STATUS);
    expect(response.text).toEqual("Server error");
  });
});
