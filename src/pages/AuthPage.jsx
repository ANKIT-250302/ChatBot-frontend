
import AuthIllustration from "../components/AuthIllustration";
import SignUp from "../components/SignUp";
const AuthPage = () => {
  return (
    <div className="h-screen w-screen md:p-6">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-[#3F8CFF] hidden md:flex rounded-l-xl ">
          <AuthIllustration/>
        </div>
        <div className="bg-white md:rounded-r-xl">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
