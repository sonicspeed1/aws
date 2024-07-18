const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user'); 

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        
        const token = jwt.sign({ _id: newUser._id }, 'secretKey');
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send("Error en el servidor");
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFind = await User.findOne({ email });
        if (!userFind) return res.status(401).send("El correo no existe");

        const isPasswordValid = await bcrypt.compare(password, userFind.password);
        if (!isPasswordValid) return res.status(401).send("La contraseña es errónea");

        const token = jwt.sign({ _id: userFind._id }, 'secretKey');
        return res.status(200).json({ token });
    } catch (error) {
        res.status(500).send("Error en el servidor");
    }
});

module.exports = router;