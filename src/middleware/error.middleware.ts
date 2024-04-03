import { logger } from "@/core/utils";
import { HttpException } from "@/core/exceptions";
import { type Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: HttpException,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const status: number = error.status || 500;
  const message: string = error.message || "Some thing when wrong";
  const date: Date = new Date();
  const hours: string = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  logger.error(
    `[ERROR] - Status: ${status} - Msg: ${message} - Time: ${hours}`
  );
  res.status(status).json({ message: message });
  next();
};
