import express from 'express';
import router from './router';
import morgan from 'morgan';
import {protect} from './modules/auth';
import { createNewUser } from './handlers/user';
import { signIn } from './handlers/user';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.shhh_secret = 'dog';
    next();
});


app.get('/', (req, res) => {
    console.log('hello from server');
    res.status(200);
    res.json({ message: 'Hello from server' });
})

app.use('/api', protect, router);

app.post('/user/register', createNewUser)
app.post('/user/signIn', signIn);

export default app;
