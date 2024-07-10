import React from "react";
import useConversation from "../../Store/useConversationStore";
// import { useSocketContext } from "../../context/SocketContext";
const SideConversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  // const { onlineUsers } = useSocketContext();
  // const isOnline = onlineUsers.includes(conversation._id);
  return (
    <div
        className={`flex gap-2 items-center hover:bg-orange-700 rounded p-2 py-1 cursor-pointer
        ${isSelected ? "bg-orange-900" : ""}
      `}
      onClick={()=>setSelectedConversation(conversation)}
      >
      <div className="flex flex-col flex-1 p-2 border-b border-gray-300">
        <div className="flex gap-2 justify-between">
          <p className="font-medium text-white">{conversation.username}</p>
        </div>
      </div>
    </div>
  );
};

export default SideConversation;
