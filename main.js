const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Route to handle insertion of a new user
app.post('/users', async (req, res) => {
    console.log("hello");
    const { email, name } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
            },
        });
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
