import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongooseSchema = new Schema<ICar>({

});

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car; 