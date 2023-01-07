// https://typeorm.io/migrations
import {Connection, createConnection} from "typeorm";
import User from "../entities/User";

export const createDB = async (): Promise<Connection> =>
  createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'ghibli_graphql',
    username: 'root',
    password: 'qwer1234',
    logging: !(process.env.NODE_ENV === 'production'),
    synchronize:  true, // entities 퐇더의 명시된 데이터 모델들을 DB에 자동으로 동기화
    entities: [User],
  });