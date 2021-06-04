import express from 'express';
import morgan from 'morgan';
import productosRoutes from './routes/productos.routes';
import avataresRoutes from './routes/avatares.routes';
import enlacesRoutes from './routes/enlaces.routes';
import entradasRoutes from './routes/entradas.routes';
import tiendasRoutes from './routes/tiendas.routes';
import authRoutes from './routes/auth.routes';
require ('./models/relaciones');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
	res.json('Welcome');
});

app.use('/api/productos', productosRoutes);
app.use('/api/avatares', avataresRoutes);
app.use('/api/enlaces', enlacesRoutes);
app.use('/api/entradas', entradasRoutes);
app.use('/api/tiendas', tiendasRoutes);
app.use('/api/auth', authRoutes);

export default app;
