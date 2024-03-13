import { Injectable, OnModuleInit } from '@nestjs/common';
import { createConnection, Connection } from 'mysql2/promise';


@Injectable()
export class Mysql implements OnModuleInit {
  private connection: Connection;
  async onModuleInit() {
    let c = await createConnection({
      host: "localhost",
      user: "root",
      database: "mysql",
      password: "password",
      port: 3306
    })
    this.connection = c
  }
  getConnection() {
    return this.connection;
  }
}
