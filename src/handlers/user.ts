import prisma from '../db';
import { createJWT, hashPassword, comparePasswords } from '../modules/auth';

export const createNewUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: req.body.username,
            password: await hashPassword(req.body.password)
        }
    });
    const token = createJWT(user);
    res.json({ token });
};

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            name: req.body.username
        }
    });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await comparePasswords(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    const token = createJWT(user);
    res.json({ token });
}
