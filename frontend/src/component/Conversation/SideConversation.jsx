import React from "react";
import useConversation from "../../Store/useConversationStore";
import { useSocketContext } from "../../context/SocketContext";
const SideConversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <div
        className={`flex gap-2 items-center hover:bg-indigo-300 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-blue-400" : ""}
      `}
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="user avatar" className=" rounded-full"/>
          </div>
        </div>
      <div className="flex flex-col flex-1 p-2 border-b border-gray-300">
        <div className="mb-2 text-centerflex gap-2 justify-between">
          <p className={`font-medium text-white ${isOnline ? "online" : ""}`}>{conversation.username}</p>
        </div>
      </div>
    </div>
  );
};

export default SideConversation;
