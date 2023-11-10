import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { AuthenticationPage } from "./pages/AuthenticationPage/AuthenticationPage";
import { Home } from "./pages/ExamList/Home";
import ScrollToTop from "./components/scrollToTop";
import { Navbar } from "./components/Navbar/Navbar";
import { TestInstructions } from "./pages/TestInstructions/TestInstructions";
import { Wallet } from "./pages/Wallet/Wallet";
import { QuestionsDashboard } from "./pages/Question/QuestionsDashboard";
import { SummaryPage } from "./pages/SummaryPage/SummaryPage";
import { ReviewPage } from "./pages/ReviewPage/ReviewPage";
import { TestAnalysis } from "./pages/TestAnalysis/TestAnalysis";
import { AnalysisDashboard } from "./pages/AnalysisDashboard/AnalysisDashboard";
import { Sample } from "./pages/Sample/Sample";
function App() {
  return (
    <>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />{" "}
        <Route path="home" element={<Home />} />{" "}
        <Route path="test-instructions" element={<TestInstructions />} />{" "}
        <Route path="questions-dashboard" element={<QuestionsDashboard />} />
        <Route path="wallet" element={<Wallet />} />{" "}
        <Route path="test-analysis" element={<TestAnalysis />} />{" "}
        <Route path="summary-page" element={<SummaryPage />} />{" "}
        <Route path="review-page" element={<ReviewPage />} />{" "}
        <Route path="analysis-dashboard" element={<AnalysisDashboard />} />{" "}
        <Route path="sample" element={<Sample />} />{" "}
      </Routes>
    </>
  );
}

export default App;
