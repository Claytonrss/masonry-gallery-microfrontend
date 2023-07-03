import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import { NextFunction, Request, Response } from "express";
dotenv.config();

const CORS_ERROR_MESSAGE = "Not allowed by CORS";
const whitelist: string[] = process.env.CORS_WHITELIST?.split(",") || [];

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV !== "production") {
  whitelist.push("*");
}

const corsOptions: CorsOptions = {
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
