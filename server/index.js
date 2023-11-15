const express = require('express');
const { connectionMongooseDb } = require('./connection');
const userRouter = require('./routes/user');
const questionRouter =require('./routes/question')
const PORT = 8001;
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


connectionMongooseDb("mongodb://127.0.0.1:27017/Quiz").then(() => {
    console.log("Server connected to MongoDB");
}); 

app.use('/user', userRouter);  
app.use('/teacher',questionRouter);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
