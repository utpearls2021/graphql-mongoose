import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileReslover } from './fileupload.reslover';

@Module({
  providers: [FileuploadService, FileReslover]
})
export class FileuploadModule {}
