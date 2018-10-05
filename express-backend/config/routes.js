import { union } from '../controllers/union';

export const routes = (app) => {
  app.get('/users', union.users.getAll);
};