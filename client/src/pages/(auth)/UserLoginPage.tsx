import axios from "axios";
import { Phone, X } from "lucide-react";
import {Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../../components/ui/Spinner";
import { BASE_URL } from "../../lib/vars";
import { toast } from "sonner";


type FormData = {
  email : string;
  password : string;
}

function UserLoginPage() {
  const [formData , setFormData] = useState<FormData>({
    email : "",
    password : ""
  });


  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const [isLocked, setIsLocked] = useState(false);



  const UpdateForm = (evt : React.ChangeEvent<HTMLInputElement>)=>{
      const {name , value} = evt.target;
      setFormData((currData) => ({...currData , [name] : value}));
  }

  const handleSubmit = async() =>{
    // console.log(formData)
    setIsLocked(true);
      try{
        const result = await axios.post(
          `${BASE_URL}/api/v1/auth/login`,
          {
            email : formData.email,
            password : formData.password,
          }
        );

          console.log(result.data);
          toast.success("Login Successful!");
          if(result.data.token){
            navigate("/home");
            localStorage.setItem("token" , result.data.token);
          } else {
            throw Error("Failed to get the token, idk what a token is tbh");
          }
      }
      catch(e : any){
          console.error(e.response.data.message);
          toast.error(e.response.data.message);
      }
      setIsLocked(false);
  }

  function handleGoogleAuth() {
    window.location.href = `${BASE_URL}/api/v1/auth/google`;
  }

  return (
  <div className="w-full flex justify-center items-center h-[calc(100vh-60px)]">
    <div className="w-[450px] h-fit bg-white rounded flex flex-col px-8 py-10 gap-5">
        <div 
          className="flex flex-row items-center justify-between">
            <h1 className="text-4xl text-[--secondary]">Login</h1>
            <Link to = "/"><X className="text-[--secondary]"/></Link>
        </div>
        <hr className="border border-[--primary] opacity-40"/>
        <div className="Email w-full flex flex-col ">
          <label 
            htmlFor="email"
            className=""
            >Email</label>
          <input 
            type="email"
            id="email"
            className="EmailInput border border-[--line] rounded py-2 px-1"
            placeholder=""
            value={formData.email}
            onChange={UpdateForm}
            name="email"
            />
        </div>

        <div className="Password w-full flex flex-col relative">
          <label 
            htmlFor="password"
            className=""
            >Password</label>
          <input 
            type={display ? "password" : "text"}
            id="password"
            className="PasswordInput border border-[--line] rounded py-2 px-1"
            placeholder=""
            value={formData.password}
            onChange={UpdateForm}
            name="password"
            />
            <div className="Dola absolute text-[--primary] bottom-2 right-2 "
                  onClick={() => setDisplay(!display)}>
                 {display ? <Eye/> : <EyeOff/>}
            </div>
        </div>
        <button className="w-full h-fit bg-[--primary] border border-[--primary] rounded-full px-1 py-2 text-[--secondary]  hover:bg-white hover:text-[--primary] hover:border-[--primary]"
                onClick={handleSubmit}
                disabled={isLocked}
        >
            {isLocked ? <Spinner/> : 'LOGIN' }
        </button>
        <div className="Or relative w-full h-fit">
          <hr className="border border-[--primary]  opacity-40"/>
          <p className="p-1 bg-white absolute  right-1/2 translate-x-[50%] translate-y-[-50%]" >OR</p>
        </div>
        <Link to='/user/login/phone' className="w-full h-12 bg-[--ternary] rounded-full px-1 py-2 text-[--secondary]  flex flex-row gap-4 items-center justify-center">
        <Phone />Login using Mobile
        </Link>
        <button className="flex w-full h-12 bg-[--ternary] rounded-full px-1 py-2 text-[--secondary]  gap-4 items-center justify-center" onClick={handleGoogleAuth}>
          <img src="/googleIcon.png" className="h-6 w-6"></img> Login with Google
        </button>
        <hr className="border border-[--primary] opacity-40"/>
        <div className=" flex flex-row text-sm gap-1">
        <p>New ?</p>
        <Link className="text-[--primary]" to="/user/register">Sign Up</Link>
        </div>


    </div>
  </div>
  );
}

export default UserLoginPage