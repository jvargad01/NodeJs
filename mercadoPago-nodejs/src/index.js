import express from 'express';
import morgan from 'morgan';
import {PORT} from './config.js';
import paymentRoutes from './routes/payment.routes.js';
import path from 'path';


const app = express();

app.listen(PORT);

app.use(morgan('dev'));
app.use(paymentRoutes);
 
app.use(express.static(path.resolve("src/public")));

console.log('server on Port:', PORT);