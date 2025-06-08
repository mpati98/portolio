import ReactDOM from "react-dom/client"; // For React 18+
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import { Home } from "./components/pages/Home.jsx";
import { RegisterForm } from "./components/pages/RegisterForm.jsx";
import GolfNew from "./components/pages/GolfNew.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import ChatBot from "react-chatbotify";
import chatLogo from "./assets/circleLogo.png"

const settings = {
  	chatButton: {
		icon: chatLogo,
	},
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ChatBot settings= {settings}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/golfnews" element={<GolfNew />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  </>
);
