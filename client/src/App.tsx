import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import UserRegistrationPage from "./pages/(auth)/UserRegistrationPage";
import { Toaster } from "sonner";
import {
  CircleAlert,
  CircleCheck,
  CircleX,
  Info,
  Loader,
} from "lucide-react";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Toaster
        icons={{
          success: <CircleCheck />,
          info: <Info />,
          warning: <CircleAlert />,
          error: <CircleX />,
          loading: <Loader />,
        }}
        toastOptions={{
          unstyled: false,
          classNames: {
            toast: "w-[200px] right-0 flex items-center gap-3 justify-center rounded-xl",
            error: "bg-red-400",
            success: "text-green-400",
            warning: "text-yellow-400",
            info: "bg-blue-400",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/register" element={<UserRegistrationPage />} />
        <Route path="/admin" element={<HomePage />} />
        <Route path="/find" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
