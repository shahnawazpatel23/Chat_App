import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation.js";

const Message = ({message}) => {
  const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	// const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="" />
            </div>
        </div>
        <div className={`chat-bubble text-white pb-2  ${bubbleBgColor}`}>{message.message} </div>
        {/* <div className={`chat-footer opacity-50 text-xs flex gap-1`}>{formattedTime}</div>  */}
    </div>
  )
}
//items-center
export default Message