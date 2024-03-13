import { Injectable } from '@nestjs/common';
import mysql from 'mysql'

@Injectable()
export class Mysql {

  constructor() {
    let x = mysql.createConnection("localhost:20000")
  }
  getConnection() { }
}
