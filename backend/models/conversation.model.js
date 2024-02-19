// import mongoose from "mongoose";

// const convoSchema = new mongoose.Schema({

//     participants:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'User'
//     }],
//     messages:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'Message',
//         default:[]
//     }]
// },{timestamps:true});

// const Conversation = mongoose.model("conversation",convoSchema);
// export default Conversation;


import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Message",
				default: [],
			},
		],
	},
	{ timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;