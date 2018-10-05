import mysql from 'mysql';

const connectionParams = {
  host: 'localhost',
  posrt: 3306,
  user: 'root',
  password: '1234',
  database: 'docker_workshop_db'
}

export const connection = mysql.createConnection(connectionParams);