// eslint-disable-next-line no-unused-vars
import React from "react";
import { useAuthContext } from "../../context/AuthContext";

import { extractTime } from "../../utlis/extractTime";
const MessageData = ({ message }) => {
  const { auth } = useAuthContext();

  const fromMe = message.senderId === auth._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`mt-4  chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="flex items-center gap-5 w-10 rounded-full">
          <img
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            alt="user avatar"
            className=" rounded-full"
          />
          <p className="text-white">{message.username}</p>
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className="mb-4 chat-footer opacity-50 text-xs flex gap-2 items-center text-white">
        {formattedTime}
      </div>
    </div>
  );
};

export default MessageData;
