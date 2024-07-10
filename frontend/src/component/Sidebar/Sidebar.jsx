import React from "react";
import Conversation from "../Conversation/Conversation";
import Logout from "../Logout/Logout";

const Sidebar = () => {
  return (
    <div className="md:min-w-[250px] border-r p-5 flex flex-col">
      <div className="divider divider-warning px-4 "></div>
      <Conversation />
      <Logout/>
    </div>
  );
};

export default Sidebar;
