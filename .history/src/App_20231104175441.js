import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { AuthenticationPage } from "./pages/AuthenticationPage/AuthenticationPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationPage />} />{" "}
    </Routes>
  );
}

export default App;
