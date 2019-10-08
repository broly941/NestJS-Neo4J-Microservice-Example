import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjectModule } from './object/object.module'

@Module({
  imports: [ObjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
