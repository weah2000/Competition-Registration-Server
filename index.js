const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();

// Connect to database
connectDB();
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());

// Define Routes
app.use('/register', require('./routes/register'));
app.use('/query', require('./routes/query'));
app.use('/update', require('./routes/update'));

const PORT = 5000;

app.listen(PORT, () => console.log(`服务已启动, 请访问: http//localshot:${PORT}`));
