import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDatabase from './config/db.js';

import userRoutes from './routes/user.route.js';
import auditionPostRoutes from './routes/auditionpost.route.js';
import applicationRoutes from './routes/application.routes.js';

import { errorHandler, notFound } from './middlewares/error.js';

dotenv.config();

connectDatabase();

const app = express();


app.use(cors());
app.use(express.json());


app.use('/users', userRoutes);
app.use('/auditionposts', auditionPostRoutes);
app.use('/applications', applicationRoutes);


app.use(notFound)
app.use(errorHandler)

export default app;