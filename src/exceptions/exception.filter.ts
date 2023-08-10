import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { CompanyException } from "./company.exception";
import { Response } from "express";

@Catch(CompanyException)
export class CustomExceptionFilter implements ExceptionFilter{
  catch(exception: CompanyException, host: ArgumentsHost): any {

    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    console.log("response", response);
    throw new HttpException({ message: exception.message, error: ""}, HttpStatus.BAD_REQUEST)
    //response.status(HttpStatus.BAD_REQUEST).json({ message: exception.message, error: ""});
  }
}