import express from "express";
import { applyAuthMiddleware } from "./middleware/auth";
import {
  applyCorsMiddlewareHandlerError,
  applyCorsMiddlewareOptions,
} from "./middleware/cors";
import { applyPhotoRoutes } from "./routes/photoRoutes";

const app = express();

applyAuthMiddleware(app);
applyCorsMiddlewareOptions(app);
applyPhotoRoutes(app);
applyCorsMiddlewareHandlerError(app);

export default app;
