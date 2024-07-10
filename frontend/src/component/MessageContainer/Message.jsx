// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import MessageData from "./MessageData";
import useMessage from "../../hooks/useMessage";



const Message = () => {
  const { messages, loading } = useMessage();
console.log(messages)
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <MessageData message={message} />
          </div>
        ))}
      
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send Message to start a conversation</p>
      )}
    </div>
  );
};

export default Message;
