import { Injectable } from '@nestjs/common';
import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  'bolt://localhost',
  neo4j.auth.basic('neo4j', 'root'),
);
const session = driver.session();

@Injectable()
export class ObjectService {
  getHello(): string {
    session.run('MATCH (u:User) return u').then(result => {
      session.close();
      result.records.map(value => {
        console.log(value.get(0));
      });
      driver.close();
    });
    return 'Hello World!';
  }
}
