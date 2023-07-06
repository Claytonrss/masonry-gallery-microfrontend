import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import { NextFunction, Request, Response, Express } from "express";
dotenv.config();

export const CORS_ERROR_MESSAGE = "Not allowed by CORS";
export const whitelist: string[] = process.env.CORS_WHITELIST?.split(",") || [];

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes("*")) callback(null, true);
    else if (!origin || whitelist.indexOf(origin) === -1) {
      callback(new Error(CORS_ERROR_MESSAGE), false);
    } else {
      callback(null, true);
    }
  },
};

export const corsWithOptions = cors(corsOptions);

export const corsMiddlewareHandlerError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.message === CORS_ERROR_MESSAGE) {
    res.status(403).send(CORS_ERROR_MESSAGE);
  }
  next();
};

export function applyCorsMiddlewareOptions(app: Express) {
  app.use(corsWithOptions);
}

export function applyCorsMiddlewareHandlerError(app: Express) {
  app.use(corsMiddlewareHandlerError);
}
