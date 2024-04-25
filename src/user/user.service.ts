import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor( @InjectModel(User.name) private user: Model<User> ) {}
  create(createUser: User) {
    return this.user.create(createUser);
  }

  findAll() {
    return this.user.find();
  }

  findOne(id: string) {
    return this.user.findById(id);
  }

}
