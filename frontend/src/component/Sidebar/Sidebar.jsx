import React from "react";
import Conversation from "../Conversation/Conversation";

const Sidebar = () => {
  return (
    <div className="border-r p-5 flex flex-col">
      <div className="divider divider-warning px-4 "></div>
      <Conversation />
    </div>
  );
};

export default Sidebar;
