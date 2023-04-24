import express from "express";
import userRouters from './routes/user.routes';
import authRouters from './routes/auth.routes';
import producRouters from './routes/produc.routes';
import generateQuote from "./routes/shipping.routes"
import sendShippingCart from "./routes/shipping.routes"
import getShippingCart from "./routes/shipping.routes"
import deleteItemCart from "./routes/shipping.routes"
import morgan from 'morgan';
import cors from 'cors';

const app = express() // crear un servidor

app.use(cors({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}))

app.use(morgan('dev')); // midelware para intecertar peticiones


app.use(express.json()); // coloca antes de las rutas para converitr en json y los acpete express

app.use('/api',userRouters); // añadir rutas a el servidor
app.use('/api',authRouters);
app.use('/api',producRouters);
app.use('/api',generateQuote);
app.use('/api',sendShippingCart)
app.use('/api',getShippingCart)
app.use('/api',deleteItemCart)
export default app;