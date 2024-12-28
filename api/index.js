const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Middleware для обработки JSON
app.use(express.json());

// Пример маршрута GET
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, world!" });
});

// Пример маршрута POST
app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({ receivedData: data });
});

// Экспорт функции для использования в Vercel
module.exports.handler = serverless(app);
