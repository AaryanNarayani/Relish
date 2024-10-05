import axios from "axios";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function UserPhoneLoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    try {
         const response = await axios.post('http://localhost:8080/api/v1/auth/register/phone',{
            name:formData.name,
            phone:formData.phone,
         },{});

         toast.success('Done Bro go next')
         console.log(response.data)
         navigate(`/user/login/otp?name=${formData.name}&phone=${formData.phone}`)
    } catch (error : any) {
        toast.error(error.response.data.message)
        console.log('Could Not Login:',error.messgae)
    }

    
    
  }

  function handleGoogleAuth() {
    window.location.href = "http://localhost:8080/api/v1/auth/google";
  }

  return (
    <div className="h-[calc(100vh-100px)] w-screen flex justify-center items-center">
      <div className="w-1/3 h-fit bg-white rounded p-5 flex flex-col gap-4 text-[--secondary]">
        <h1 className="text-3xl border-b border-[--line] pb-3 mb-3">Login</h1>
        <div className="w-full flex flex-col ">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            className="border border-[--line] p-2 rounded focus:outline-none"
            placeholder="Name"
            value={formData.name}
            name='name'
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="">Phone no</label>
          <div className="w-full flex justify-between items-center border border-[--line] rounded  gap-3">
            <p className="flex justify-center items-center px-3">+91</p>
            <input
              type="text"
              className=" p-2 w-[85%] focus:outline-none"
              value={formData.phone}
                name='phone'
              placeholder="Phone"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="bg-[--primary] rounded-full p-2 w-full font-semibold" onClick={handleSubmit}>
          Send Otp
        </button>
        <div className="Or relative w-full h-fit">
          <hr className="border border-[--primary]  opacity-40" />
          <p className="p-1 bg-white absolute  right-1/2 translate-x-[50%] translate-y-[-50%]">
            OR
          </p>
        </div>
        <button className="bg-[--trinary] rounded-full p-2 w-full flex justify-center items-center gap-4 font-semibold">
          <Mail className="text-[--primary]" />
          Login Using Email
        </button>
        <button
          className="flex w-full h-12 bg-[--trinary] rounded-full px-1 py-2 text-[--secondary] font-semibold gap-4 items-center justify-center"
          onClick={handleGoogleAuth}
        >
          <img src="/googleIcon.png" className="h-6 w-6"></img> Login with
          Google
        </button>
        <hr className="border border-[--primary]  opacity-40" />
        <div className="flex ">
          <p>New ? </p>
          <Link to="/user/register" className="text-[--primary]">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPhoneLoginPage;
