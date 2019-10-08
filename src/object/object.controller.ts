import { Controller, Get } from '@nestjs/common';
import { ObjectService } from './object.service';

@Controller('object')
export class ObjectController {

  constructor(private readonly objectService: ObjectService) {
  }

  @Get("all")
  async getAllObjects(): Promise<any[]> {
    return await this.objectService.getAllObjects();
  }
}
