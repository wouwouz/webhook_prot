const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const WEBHOOK_URL = 'https://discord.com/api/webhooks/1284267414770548816/9uv8wETheLyl9a9vb5tZGBh-EHYUNXyru-WiqRJhKlnzbSxj-or3leO84uodDWhV5P_n';

app.use((req, res, next) => {
    if (req.method === 'DELETE' && req.path === WEBHOOK_URL) {
        return res.status(403).json({ error: "LOOSER YOU CAN'T DELETE THIS!" });
    }
    next();
});

app.post(WEBHOOK_URL, (req, res) => {
    res.send('webhook reçu');
});

app.listen(PORT, () => {
    console.log(`port : ${PORT}`);
});
