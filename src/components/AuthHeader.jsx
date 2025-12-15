import React from "react";
import chatbotlogo from "../assets/chatbot-logo.png";

const AuthHeader = () => {
  return (
    <div className=" md:hidden flex items-center justify-start bg-[#3F8CFF] gap-4 w-full p-4 rounded-3xl">
      <img src={chatbotlogo} className="h-12" alt="" />
      <p className="text-3xl text-white font-bold">Chatbot</p>
    </div>
  );
};

export default AuthHeader;
