import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashBoard from "./pages/DashBoard";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="bg-[#F2F2F2] h-screen w-screen">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/signin" replace />} /> */}
        <Route path="/" element={<Layout main = {<DashBoard/>}/>} />
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
