import { BadRequestException } from '@nestjs/common';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

// CODUMENT LINK : https://docs.nestjs.com/graphql/field-middleware
export const CheckBrowserMiddleware: FieldMiddleware = async (ctx: MiddlewareContext, next: NextFn) => {
  console.log("args", ctx.args);
  console.log("source", ctx.source);
  ctx.source.salary = 80000;
  if (ctx.source.salary > 5000) {
    //throw new BadRequestException("saalry must be less the 50")
  }
  return next();
};