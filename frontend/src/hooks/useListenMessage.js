import  { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useCoversation from "../Store/useConversationStore";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useCoversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      
      
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages,messages]);
};

export default useListenMessage;
