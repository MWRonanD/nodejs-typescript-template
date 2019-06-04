import { Service } from 'typedi';
import { IExample } from '../interfaces/example.interface';

@Service()
export class ExampleService {
  private examples = [
  ];

  findAll(): IExample[] {
    return this.examples;
  }

  // async createExemple(ex: IExample) : Promise<IExample> {

  // }
}
