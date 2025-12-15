import bgAuth from "../assets/authbg.png";
import chatbotlogo from "../assets/chatbot-logo.png";
const AuthIllustration = () => {
  return (
    <div className="flex-col p-2 justify-center w-full">
      <div className="h-[20%] flex items-center justify-center">
        <div className=" flex gap-4 items-center w-[60%]">
          <img src={chatbotlogo} className="h-12" alt="" />
          <p className="text-3xl text-white font-bold">Chatbot</p>
        </div>
      </div>
      <div className="h-[20%] text-4xl flex flex-col items-center">
        <p className="text-white w-[60%] ">Smarter Conversations.</p>
        <p className="text-white w-[60%] ">Real Business Impact.</p>
      </div>
      <div
        className="h-[60%] w-full bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${bgAuth})`, backgroundSize: "80%" }}
      />
    </div>
  );
}

export default AuthIllustration
