import { Schema, model } from 'mongoose';
import { IExample } from '../interfaces/example.interface';

// tslint:disable-next-line: variable-name
export const ExampleSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// tslint:disable-next-line: variable-name
const Example = model<IExample>('Example', ExampleSchema);

export default Example;
