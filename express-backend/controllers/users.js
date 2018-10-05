import { connection } from '../config/dbconnection';

const getAll = (req, res, next) => {

  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.log(error);
      res.json({ error });
    }

    res.json(results);
  });
}

export const users = {
  getAll
}