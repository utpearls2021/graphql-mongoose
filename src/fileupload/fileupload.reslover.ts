import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { FileType } from "./fileupload.type";
import { FileUpload } from "./dtos/file-upload.dto";
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import * as Upload from "graphql-upload/Upload.js";

@Resolver()
export class FileReslover {
  @Mutation(() => Boolean,{ name: "uploadImage" })
  async uploadFile(
    @Args({ name: "image", type: () => GraphQLUpload }) image: Upload
  ) {
    const data = await image;
    console.log("data", data)
    return { image: "lksjdkjdf"};
  }
}