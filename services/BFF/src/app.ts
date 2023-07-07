import express from "express";
import { applyAuthMiddleware } from "./middleware/auth";
import {
  applyCorsMiddlewareHandlerError,
  applyCorsMiddlewareOptions,
} from "./middleware/cors";
import { applyPhotoRoutes } from "./routes/photoRoutes";

const app = express();

applyCorsMiddlewareOptions(app);
applyCorsMiddlewareHandlerError(app);
applyAuthMiddleware(app);
applyPhotoRoutes(app);

export default app;
