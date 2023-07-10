import { NextFunction, Request, Response, Express } from "express";
import dotenv from "dotenv";
dotenv.config();

export const BFF_API_KEY = process.env.BFF_API_KEY ?? "";
export const UNAUTHORIZED_MESSAGE = "Unauthorized";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const API_KEY = req.headers.authorization ?? "";
  if (API_KEY !== BFF_API_KEY) {
    res.status(401).send(UNAUTHORIZED_MESSAGE);
    return;
  }
  next();
};

export function applyAuthMiddleware(app: Express) {
  app.use(authMiddleware);
}
