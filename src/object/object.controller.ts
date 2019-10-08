import { Controller, Get } from '@nestjs/common';
import { ObjectService } from './object.service';

@Controller('object')
export class ObjectController {

  constructor(private readonly objectService: ObjectService) {
  }

  @Get()
  getHello(): string {
    return this.objectService.getHello();
  }

}
