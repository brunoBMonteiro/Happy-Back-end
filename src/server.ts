import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);






// Rota = conjunto
// Recurso = usuario

// Métodos HTTP = GET, POST, PUT, DELETE

// Parâmetros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query: https://localhost:3333/users?search=bruno
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)