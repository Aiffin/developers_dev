const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

//Connect Database
connectDB();

app.get('/',(req,res) => res.send("working") );

//Init Middleware
app.use(express.json({extend:true}))

//Define Routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/profile',require('./routes/api/profile'));

app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`)
});