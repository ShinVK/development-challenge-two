require('dotenv').config();

const port = process.env.PORT || 3001;
const app = require('./app');

app.listen(port);
console.log(`http://localhost:${port}`);
