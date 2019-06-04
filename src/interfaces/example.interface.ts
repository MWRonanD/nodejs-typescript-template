import { Document } from 'mongoose';
export interface IExample extends Document {
  firstName?: string;
  lastName?:string;
}
