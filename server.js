const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.send('Pong!');
});
app.get('/', (req, res) => {
    res.send("app working fine");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
