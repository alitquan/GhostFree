import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import mongoose from 'mongoose';
import userModel from './Model/User.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());



mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('disconnected', () => console.log('Disconnected from MongoDB'));
mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));


function checkRegistration (name, password, email) {
	return 1;

} 



app.post('/register', async (req, res) => {
	console.log(req);


	try {
		const { username, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const email = "test@gmail.com";
		let user= new userModel({ username, password, email});
		user.save();
		res.status(201).send('User registered');
	} 

	catch (error) {
		console.log (error);
	    res.status(500).send('Server error');
	}
});


app.listen(PORT, () => {
    console.log(`Server running on port {$PORT}`);
});
