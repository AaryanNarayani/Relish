import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/admin' element={<HomePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>

      </Routes>

    </Router>
  );
}

export default App;
