import { Schema, model, Document } from 'mongoose';
import { IExample } from '../interfaces/example.interface';

// tslint:disable-next-line: variable-name
export const ExampleSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export class Example extends model<IExample & Document>('Example', ExampleSchema) implements IExample{

}
