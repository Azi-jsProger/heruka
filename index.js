const express = require('express');
const app = express();
const port = 3000;

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

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
