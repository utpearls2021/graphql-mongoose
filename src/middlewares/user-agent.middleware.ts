import { Request, Response, NextFunction } from "express";

export function userAgent(req: Request, res: Response, next: NextFunction) {
  const userAgent = req.headers['User-Agent'];
  console.log("userAgent",userAgent);

  next();
}
