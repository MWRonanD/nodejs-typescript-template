import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';
import { ExampleService } from '../services/ExampleService';
import { Example } from '../models/Example';
// import { IExample } from '../interfaces/example.interface';

@JsonController('/examples')
export class ExampleController {

  constructor(private exampleService: ExampleService) { }

  @Get()
  async getAll() {
    return await this.exampleService.findAll()
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return await this.exampleService.find(id);
  }

  @Post()
  async post(@Body() example: Example) {
    return await this.exampleService.save(example);
    }


  @Put('/:id')
  async put(@Param('id') id: string, @Body() example: Example) {
    return await this.exampleService.update(id,example);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'Removing example...';
  }

}
