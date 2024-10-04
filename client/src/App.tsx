import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/(auth)/UserLoginPage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import UserRegistrationPage from "./pages/(auth)/UserRegistrationPage";
import UserLoginPage from "./pages/(auth)/UserLoginPage";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user/login' element={<UserPage/>}/>
        <Route path='/user/register' element={<UserRegistrationPage/>}/>
        <Route path='/admin' element={<HomePage/>}/>
        <Route path='/find' element={<SearchPage/>}/>

      </Routes>

    </Router>
   
  );
}

export default App;
