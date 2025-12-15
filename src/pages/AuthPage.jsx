import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AuthIllustration from "../components/AuthIllustration";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import AuthHeader from "../components/AuthHeader";

const AuthPage = () => {
  const location = useLocation().pathname;

  return (
    <div className="h-screen w-screen md:p-4">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Illustration */}
        <div className="bg-[#3F8CFF] hidden md:flex rounded-l-3xl">
          <AuthIllustration />
        </div>

        {/* Right Auth Panel */}
        <div className="bg-white md:rounded-r-3xl overflow-hidden flex flex-col items-center justify-center">
          <div className="h-[20%] w-[90%] flex justify-center items-center ">
            <AuthHeader />
          </div>
          <div className="h-[80%] w-full">
            <AnimatePresence mode="wait">
              {location === "/signup" ? (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <SignUp />
                </motion.div>
              ) : (
                <motion.div
                  key="signin"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <SignIn />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
