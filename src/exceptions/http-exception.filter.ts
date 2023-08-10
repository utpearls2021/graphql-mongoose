import { Catch, ExceptionFilter, HttpException, ArgumentsHost } from "@nestjs/common";
import { join } from "path";
import { writeFileSync } from "fs";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
  catch(exception: HttpException, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();
    const status = exception.getStatus();
    const msg = exception.message;

    const body = {
      statusCode: status,
      timestamp: (new Date()).toDateString(),
      message: msg,
      //path: request.url
    };

    this.writeLog(body);
  }

  writeLog(body: any){
    const LOGS_DIR = join(__dirname, `${(new Date()).toDateString()}-logs.json`);
    try {
      writeFileSync(LOGS_DIR, JSON.stringify(body));
    } catch (ex) {
      return ;
    }
  }
}