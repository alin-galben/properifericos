import express from 'express';
import morgan from 'morgan';
import productosRoutes from './routes/productos.routes';
import avataresRoutes from './routes/avatares.routes';
import enlacesRoutes from './routes/enlaces.routes';
import entradasRoutes from './routes/entradas.routes';
import tiendasRoutes from './routes/tiendas.routes';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
	res.json('Welcome');
});

app.use('/productos', productosRoutes);
app.use('/avatares', avataresRoutes);
app.use('/enlaces', enlacesRoutes);
app.use('/entradas', entradasRoutes);
app.use('/tiendas', tiendasRoutes);
export default app;
