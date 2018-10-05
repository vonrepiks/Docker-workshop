import express from 'express';
import { routes } from './config/routes'
import { expressConfig } from './config/express';

const port = 4000;
const app = express();

expressConfig(app);
routes(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});