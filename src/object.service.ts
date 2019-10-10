import { Injectable } from '@nestjs/common';
import { env } from '../config/current/env';
import { Neo4jAPI } from '../domain/enum/Neo4j-query'
import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  env.DB_URL, neo4j.auth.basic(env.DB_USERNAME, env.DB_PASSWORD),
);
const session = driver.session();

@Injectable()
export class ObjectService {
  getAllObjects(): Promise<any[]> {
    let data = [];
    return session.run(Neo4jAPI.GET_ALL_OBJECTS) 
      .then(result => {
        session.close();
        result.records.map(value => {
          const node = value.get(0);
          data.push({
            id: node.identity.low,
            properties: node.properties
          });
        });
        driver.close();
        return data;
      })
  }
}
