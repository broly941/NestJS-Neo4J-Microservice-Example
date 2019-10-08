import { Module } from '@nestjs/common';
import { ObjectController } from './object.controller';
import { ObjectService } from './object.service';

@Module({
  imports: [],
  controllers: [ObjectController],
  providers: [ObjectService]
})
export class ObjectModule {
}
