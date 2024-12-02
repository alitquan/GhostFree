import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import mongoose from 'mongoose';
import userModel from './Model/User.js';
import config from './config.js';

const app = express();
const PORT = 5000;
const MONGODB_URI = config.MONGODB_URI;
const JWT_SECRET = config.JWT_SECRET;

app.use(cors());
app.use(express.json());



// +----------+
// | Mongoose | 
// +----------+
mongoose.connect(MONGODB_URI, {
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
		let user= new userModel({ username, 
								  password: hashedPassword, 
							      email});
		await user.save();
		const _token = jwt.sign( {id:user._id},
								JWT_SECRET,
								{expiresIn: '1h'
							   });
								  
		res.status(201).json( {
							   token: _token,
							   message: 'Successful registration'
							  });
	} 

	catch (error) {
		console.log (error)
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


app.post('/login', async (req, res) => {
	try {
		const {username, password} = req.body; 
		console.log(`Username: ${username}, Passowrd: ${password}`);
		const user = await userModel.findOne({ username });
		if (!user) {
			res.status(400).send('No user with that name');
		}
		const storedHashedPassword = user.password;
		const match = await bcrypt.compare(password, storedHashedPassword);
		if (!match) {
			res.status(400).send('Password does not match');
		} 
		else { 
			const _token = jwt.sign( {id:user._id},
								JWT_SECRET,
								{expiresIn: '1h'
							});
			
			console.log(`/login -- token: ${_token}`);
			res.status(201).json( {
							   token: _token,
							   message: 'Successful registration'
			});
		}
	} 
	
	catch (error) { 
		console.log(error);
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
    console.log(`Server running on port ${PORT}`);
});
