import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { notFound, errorHandler, logger } from './middlewares/index.js';

import { config } from 'dotenv';
config();

import guestsRouter from './routes/guests.routes.js';
import roomsRouter from './routes/rooms.routes.js';

import { test } from './test.js';

export const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(logger);

app.get('/test', (req, res) => { res.send('SLK İBO') })
app.post('/test', test);

app.get('/', (req, res) => { res.send('Homepage'); })
app.use('/guests', guestsRouter);
app.use('/rooms', roomsRouter);

app.use(notFound);
app.use(errorHandler);