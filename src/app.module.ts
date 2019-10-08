import { Module } from '@nestjs/common';
import { ObjectModule } from './object.module'
import { ObjectService } from './object.service';
import { ObjectController } from './object.controller';

@Module({
  imports: [],
  controllers: [ObjectController],
  providers: [ObjectService],
})
export class AppModule {
}
