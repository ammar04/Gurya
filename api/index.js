import express from 'express';
import mongoose from 'mongoose';


mongoose.connect("mongodb+srv://gurya:gurya@gurya.zcdeehi.mongodb.net/?retryWrites=true&w=majority&appName=Gurya")
const app = express();

app.listen(3000, () => {
    console.log('server is Running successfully');
}
);