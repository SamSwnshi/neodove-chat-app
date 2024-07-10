import React from 'react';
import SideConversation from './SideConversation';
import useConversation from '../../hooks/useConversation';

const Conversation = () => {
  const { loading, conversations } = useConversation();

  if (loading) {
    return <div>Loading...</div>;
  }
console.log(conversations)

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <SideConversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};

export default Conversation;
