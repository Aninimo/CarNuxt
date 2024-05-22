const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/dados', async (req, res) => {
    try {
        const cars = await prisma.car.findMany();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/getCar/:id', async (req, res) => {
    const carId = req.params.id;
    try {
        const car = await prisma.car.findUnique({
            where: {
                id: carId,
            },
        });
        if (!car) {
            res.status(404).json({ error: "Car not found." });
        } else {
            res.status(200).json(car);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/getUsers', async (req, res) => {
    try {
        const users = await prisma.register.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/userRegister', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (existingUser) {
            return res.status(400).json({ error: "This email is already registered." });
        }
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            },
        });
        return res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/userLogin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
                password: password,
            },
        });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }
        return res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
