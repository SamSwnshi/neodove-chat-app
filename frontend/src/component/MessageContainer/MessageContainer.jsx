// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Message from "./Message.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../Store/useConversationStore";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-zinc-700 px-4 py-2 mb-2">
            <span className="label-text text-white">To:</span>{" "}
            <span className="text-gray-100 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>

          <Message />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { auth } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {auth?.username} </p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
