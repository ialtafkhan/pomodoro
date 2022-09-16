import { BrowserRouter, Routes, Route } from "react-router-dom"
import './app.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginOnly from "./pages/LoginOnly";
import LoginWithGoogle from "./pages/LoginWithGoogle";
import PomodoroTimer from "./pages/PomodoroTimer";
import Account from "./pages/user/Account";

function App() {
  return (
    <>
      <Home />
    </>

    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<LoginWithGoogle />} />
    //     {/* <Route path="/timer" element={<LoginOnly element={<PomodoroTimer />} />} /> */}
    //     <Route path="/account" element={<LoginOnly element={<Account />} />} />
    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;
