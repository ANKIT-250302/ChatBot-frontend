import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-full w-full p-2 flex flex-col justify-center items-center">
      <p className="my-6 text-xl font-sans font-bold text-[#0A1629]">
        Start A New Journey!
      </p>
      <form
        action=""
        className=" flex justify-center items-center flex-col w-full gap-y-2 md:gap-y-6"
      >
        <div className="flex flex-col w-[65%] sm:w-[26em] md:w-80 lg:w-md gap-y-1">
          <label className="text-[#7D8592] pl-2 font-bold text-sm">Name</label>
          <input
            type="text"
            className="px-4 py-[1.2em] focus:outline-none border-2 rounded-xl h-8 border-[#7D8592] w-full "
            placeholder="Enter you Name"
          />
        </div>
        <div className="flex flex-col w-[65%] sm:w-[26em] md:w-80 lg:w-md gap-y-1">
          <label className="text-[#7D8592] pl-2 font-bold text-sm">Email</label>
          <input
            type="email"
            className="px-4 py-[1.2em] focus:outline-none border-2 rounded-xl h-8 border-[#7D8592] w-full "
            placeholder="youemail@gmail.com"
          />
        </div>
        <div className="flex flex-col w-[65%] sm:w-[26em] md:w-80 lg:w-md gap-y-1">
          <label className="text-[#7D8592] pl-2 font-bold text-sm mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="px-4 py-[1.2em] focus:outline-none border-2
                       rounded-xl h-8 border-[#7D8592] w-full
                       focus:none"
              placeholder="•••••••••"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2
                       cursor-pointer text-[#7D8592] pl-2"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={18} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col w-[65%] sm:w-[26em] md:w-80 lg:w-md gap-y-1">
          <label className="text-[#7D8592] pl-2 font-bold text-sm mb-1">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="px-4 py-[1.2em] focus:outline-none border-2
                       rounded-xl h-8 border-[#7D8592] w-full
                       focus:none"
              placeholder="•••••••••"
            />

            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2
                       cursor-pointer text-[#7D8592] pl-2"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>
        </div>
        <button className=" mt-4 md:mt-0 drop-shadow-2xl w-auto bg-[#3F8CFF] text-white font-bold flex justify-center items-center py-3 px-10 rounded-2xl gap-x-4">
          <span>Sign In</span> <FaArrowRight size={20}  />
        </button>
      </form>
      <Link to="/signin" className="text-blue-500 mt-4">Already have an account.</Link>
    </div>
  );
};

export default SignUp;
