import { Controller, Get } from '@nestjs/common';
import { ObjectService } from './object.service';

@Controller('objects')
export class ObjectController {

  constructor(private readonly objectService: ObjectService) {
  }

  @Get()
  async getAllObjects(): Promise<any[]> {
    console.log('Get all objects');
    return await this.objectService.getAllObjects();
  }
}
