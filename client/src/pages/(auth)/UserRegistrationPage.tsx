import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { Spinner } from "../../components/ui/Spinner";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type DisplayState = {
  password: boolean;
  confirmPassword: boolean;
};

function UserRegistrationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [display, setDisplay] = useState<DisplayState>({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();
  const [isLocked, setIsLocked] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field: keyof DisplayState) => {
    setDisplay((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const checkPassword = () => {
    return formData.password === formData.confirmPassword;
  };

  const postUserDetails = async () => {
    setIsLocked(true);
    if (checkPassword()) {
      try {
        const result = await axios.post(
          "http://localhost:8080/api/v1/auth/register",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );

        console.log(result.data);
        toast.success("Registered successfully");
        if (result.data.token) {
          navigate("/find");
          localStorage.setItem("token", result.data.token);
        } else {
          throw Error("Failed to get the token");
        }
      } catch (e: any) {
        toast.error(e.response.data.message);
        console.error("Could not create user:", e.response.data.message);
      }
    } else {
      setIsLocked(false);
      setError("Passowrd not match bitch");
      console.log(error);
    }
  };

  function handleGoogleAuth() {
    window.location.href = "http://localhost:8080/api/v1/auth/google";
  }

  return (
    <div className="flex justify-center items-center h-[calc(100vh-60px)] rounded">
      <div className="w-[450px] bg-white px-10 py-8 flex flex-col gap-3">
        <h1 className="text-2xl border-b border-[--primary] pb-4 mb-2">
          Sign Up
        </h1>

        <div className="flex flex-col font-[--manrope]">
          <label htmlFor="name" className="pl-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border rounded py-2 px-1 border-[--line] bg-white focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="pl-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border rounded py-2 px-1 border-[--line]"
          />
        </div>

        <div className="flex flex-col relative">
          <label htmlFor="password" className="pl-1">
            Password
          </label>
          <input
            type={display.password ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="border rounded py-2 px-2 border-[--line]"
          />
          <div
            className="absolute right-4 bottom-2 text-[--primary] cursor-pointer"
            onClick={() => togglePasswordVisibility("password")}
          >
            {display.password ? <EyeOff /> : <Eye />}
          </div>
        </div>

        <div className="flex flex-col relative">
          <label htmlFor="confirmPassword" className="pl-1">
            Confirm Password
          </label>
          <input
            type={display.confirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            className="border rounded py-2 px-2 border-[--line]"
          />
          <div
            className="absolute right-4 bottom-2 text-[--primary] cursor-pointer"
            onClick={() => togglePasswordVisibility("confirmPassword")}
          >
            {display.confirmPassword ? <EyeOff /> : <Eye />}
          </div>
        </div>

        <div className="flex gap-2">
          <input type="checkbox" className="rounded" />
          <label>Remember me</label>
        </div>
        <div>
          <button
            className="w-full mt-2 h-12 bg-[--primary] p-2 rounded-full duration-300 border border-[--primary] hover:bg-white text-[--secondary] hover:text-[--primary]"
            onClick={postUserDetails}
            disabled={isLocked}
          >
            {isLocked ? <Spinner/> :  'Sign up' }
          </button>
          <button
            className="flex mt-4 w-full h-12 bg-[--trinary] rounded-full px-1 py-2 text-[--secondary]  gap-4 items-center justify-center"
            onClick={handleGoogleAuth}
          >
            <img src="/googleIcon.png" className="h-6 w-6"></img> Sign up with
            Google
          </button>
        </div>
        <div>
          User ?{" "}
          <Link to="/user/login" className="text-[--primary]">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegistrationPage;
