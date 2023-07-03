import express from "express";
import { corsWithOptions, corsMiddlewareHandlerError } from "./middleware/cors";
import { applyAuthMiddleware } from "./middleware/auth";
import { applyPhotoRoutes } from "./routes/photoRoutes";

const app = express();

app.use(corsWithOptions);
app.use(corsMiddlewareHandlerError);

applyAuthMiddleware(app);
applyPhotoRoutes(app);

export default app;
