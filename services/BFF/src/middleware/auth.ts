import { NextFunction, Request, Response, Express } from "express";
import dotenv from "dotenv";
dotenv.config();

const BFF_API_KEY = process.env.BFF_API_KEY || "";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const API_KEY = req.headers.authorization || "";
  if (API_KEY !== BFF_API_KEY) {
    res.status(401).send("Unauthorized");
    return;
  }
  next();
};

export function applyAuthMiddleware(app: Express) {
  app.use(authMiddleware);
}
