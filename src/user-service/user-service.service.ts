import { Injectable } from '@nestjs/common';
import { Mysql } from 'src/mysql/mysql';

@Injectable()
export class UserServiceService {
  constructor(private readonly mysql: Mysql) { }

  createUser(name: String) {
    let db = this.mysql

  }
}
