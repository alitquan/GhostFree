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



// +----------+
// | Mongoose | 
// +----------+
mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('disconnected', () => console.log('Disconnected from MongoDB'));
mongoose.connection.on('error', (error) => console.error('MongoDB connection error:', error));



// +-----------+
// | Auxiliary |
// +-----------+
function checkRegistration (name, password, email) {
	return 1;
} 



// +--------+
// | Routes |
// +--------+
app.post('/register', async (req, res) => {
	console.log(req);


	try {
		const { username, password, email } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		let user= new userModel({ username, password, email});

		await user.save();
		res.status(201).send('User registered');
	} 

	catch (error) {
		console.log (error);
		if (error.name === 'MongoServerError') {
			
			// viewable in server console-- MongoServerError E11000 
			if (error.code === 11000) {

				// Handle duplicate key error
				res.status(409).send('Username or email address belongs to an existing account');
			}

		}
		console.log 

	    res.status(500).send('Server error');
	}
});



// +-----------------------+
// | Process Configuration | 
// +-----------------------+
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

app.listen(PORT, () => {
    console.log(`Server running on port {$PORT}`);
});
