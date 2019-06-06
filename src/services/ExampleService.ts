import { Service } from 'typedi';
import { IExample } from '../interfaces/example.interface';
import { Example } from '../models/Example';
import { LogService } from './log.sercice';

@Service()
export class ExampleService {

  constructor(private logService: LogService) { }

  async findAll(): Promise<IExample[]> {
    let examples: IExample[] = [];
    await Example.find()
      .then((exs) => {
        for (let i = 0; i < exs.length; i++) {
          const item = exs[i]
          item.id = item.id.toJSON;
          examples.push(item.toJSON());
        }
      },
        (error) => {
          this.logService.log(error)
        },
      );
      console.log(examples);
    return examples;
  }

  async find(id: string): Promise<IExample> {
    let example: IExample = {};
    await Example.findById(id)
      .then((ex) => {
        console.log(ex)
        if (ex != null) {
          example = ex.toObject();
        }
      },
        (error) => {
          this.logService.log(error)
        },
      );
    return example;
  }

  async save(ex: IExample): Promise<string> {
    let idSavedItem: string = '';
    const postData: IExample = ex;
    const createdPost = new Example(postData);
    await createdPost.save()
      .then(
        (savedPost) => {
          idSavedItem = savedPost.id;
        },
        (error) => {
          this.logService.log(error)
        },
      );

    return idSavedItem;

  }

  async update(id:string, ex: IExample){
    let example: IExample = {};
    await Example.findByIdAndUpdate(id, ex)
      .then((ex) => {
        console.log(ex)
        if (ex != null) {
          example = ex.toObject();
        }
      },
        (error) => {
          this.logService.log(error)
        },
      );
    return example;
  }
}
