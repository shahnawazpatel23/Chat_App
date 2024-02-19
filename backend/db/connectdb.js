// import mongoose from "mongoose";

// export const connectdb=async()=>{
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URI,)
//         console.log("connected successfully>>>");
//     } catch (error) {
//         console.log("connection failed<<<");
//     }
// }

import mongoose from "mongoose";

const connectdb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectdb;