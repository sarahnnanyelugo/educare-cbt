import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { AuthenticationPage } from "./pages/AuthenticationPage/AuthenticationPage";
import { Home } from "./pages/Home/Home";
import ScrollToTop from "./components/scrollToTop";
import { Navbar } from "./components/Navbar/Navbar";
import { TestInstructions } from "./pages/TestInstructions/TestInstructions";
import { Question } from "./pages/Question/QuestionsDashboard";
import { Wallet } from "./pages/Wallet/Wallet";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />{" "}
        <Route path="home" element={<Home />} />{" "}
        <Route path="test-instructions" element={<TestInstructions />} />{" "}
        <Route path="question" element={<Question />} />{" "}
        <Route path="wallet" element={<Wallet />} />{" "}
      </Routes>
    </>
  );
}

export default App;
