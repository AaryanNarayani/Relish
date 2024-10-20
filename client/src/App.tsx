import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import UserRegistrationPage from "./pages/(auth)/UserRegistrationPage";
import UserLoginPage from "./pages/(auth)/UserLoginPage";
import { Toaster } from "sonner";
import { CircleAlert , CircleCheck , CircleX , Info , Loader } from "lucide-react";
import NotFoundPage from "./pages/NotFoundPage";
import UserPhoneLoginPage from "./pages/(auth)/UserPhoneLoginPage";
import OtpPage from "./pages/(auth)/OtpPage";
import FooterBar from "./components/FooterBar";
import { Overview } from "./pages/(resto)/Overview";
import Reviews from "./pages/(resto)/Reviews";
import RestoOrders from "./pages/(resto)/RestoOrders";
import RestoImagePage from "./pages/(resto)/RestoImagePage";
import Dashboard from "./pages/(admin)/Dashboard";
import AdminPage from "./pages/(admin)/AdminPage";
import CartPage from "./pages/CartPage";
import Analytics from "./pages/(admin)/Analytics";


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

        {/* User */}
        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="/user/login/phone" element={<UserPhoneLoginPage/>} />
        <Route path="/user/login/otp" element={<OtpPage/>} />
        <Route path="/user/register" element={<UserRegistrationPage />} />

        {/* Search */}
        <Route path="/find" element={<SearchPage />} />

        {/* Resto */}
        <Route path="/resto" element={<Overview />} />
        <Route path="/resto/overview" element={<Overview/>} />
        <Route path="/resto/reviews" element={<Reviews />} />
        <Route path="/resto/images" element={<RestoImagePage />} />
        <Route path="/resto/order" element={<RestoOrders />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/hotel/dashboard" element={<Dashboard />} />
        <Route path="/admin/hotel/analytics" element={<Analytics />} />

        {/* Cart */}
        <Route path='/cart' element={<CartPage/>}></Route>

        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FooterBar/>
    </Router>
    // <>
    //   <AdminPage/>
    // </>
   
  );
}

export default App;
