import { createParamDecorator } from "@nestjs/common";

export const isValidEmail = createParamDecorator((data, req) => {
    console.log("data, req", req, data);
    return true;
})