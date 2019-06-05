import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers';
import { ExampleService } from '../services/ExampleService';
import { IExample } from '../interfaces/example.interface';
import Example from '../models/Example';
import { response } from 'express';

@JsonController('/examples')
export class ExampleController {

  constructor(private exampleService: ExampleService) { }

  @Get()
  getAll() {
    return this.exampleService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return `This action returns example # ${id}`;
  }

  @Post()
  async post(@Body() example: IExample) {

    const postData: IExample = example;

    const createdPost = new Example(postData);
    const lol = await createdPost.save();
    console.log('lol', lol.toJSON());
    return lol.toJSON();
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() example: any) {
    return 'Updating a example...';
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return 'Removing example...';
  }

}
