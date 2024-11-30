import mongoose from 'mongoose';
const { Schema, model } = mongoose; 

const userSchema = new mongoose.Schema( 
	{
		username: { 
			type: String, 
			required: true, 
			unique: true,
			minLength: 3, 
			maxLength: 30 
		},
		password: { 
			type: String, 
			required: true,
			minLength: 8,
			maxLength: 2048
		},
		email: {
			type: String,
			required: true, 
			unique: true, 
			maxLength: 100,
		},
	},

	{
		timestamps: true, 
	}
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
