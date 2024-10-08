import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function OtpPage() {
  const [code, setCode] = useState<string[]>(Array(4).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [noOfResends, setNoOfResends] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [timer, setTimer] = useState(0);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  
  
  const navigate = useNavigate();
   const location = useLocation();

  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const fullCode = code.join('');
    if (fullCode.length === 4) {
      console.log('Submitting code:', typeof(fullCode));
      console.log(phone)
      try {
        const res = await axios.post('http://localhost:8080/api/v1/auth/verify/phone',{
            name,
            phone,
            otp:fullCode,
        })
        localStorage.setItem('token',res.data.token)
        toast.success('Login Successfull');
        navigate(res.data.token ? '/' : '/error')
        setCode(Array(4).fill(''))
      } catch (error : any) {
        toast.error(error.response.data.message)
        console.log('Unable to verify',error)
      }
    } else {
      console.log('Please enter a complete 4-digit code');
    }
  };

  const handleResend = () => {
    if (canResend) {
      setNoOfResends(prev => prev + 1);
      setCanResend(false);
      setTimer(30);
    }
  };

   useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setName(searchParams.get('name') || '');
    setPhone(searchParams.get('phone') || '');
  }, [location.search]);


  useEffect(() => {
    const sendOtp = async () => {
      console.log('OTP sent');
      // otp end point ko bulla
    };

    sendOtp();
  }, [noOfResends]);

  useEffect(() => {
    let interval : number;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="h-[calc(100vh-80px)] w-full flex justify-center items-center text-[--secondary]">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">Verify Phone</h1>
        <p className="text-gray-600 mb-3">Code has been sent to {phone}</p>

        <hr className="border border-[--primary] opacity-40 w-[80%] mb-3" />
        <div className="flex mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => inputRefs.current[index] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-14 h-14 text-2xl text-center  rounded-lg mx-1 focus:outline-none focus:bg-[--primary] bg-[#FFF8E1]`}
            />
          ))}
        </div>
        <div className="flex justify-center flex-col">
            <p className="text-gray-600 ">Didn't get the code?</p>
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`text-yellow-500 font-semibold hover:text-yellow-600 ${!canResend && 'opacity-50 cursor-not-allowed'}`}
        >
          {canResend ? 'Resend Code' : `Resend in ${timer}s`}
        </button>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-[--primary] text-[--secondary] font-bold py-2 px-4 border border-[--primary] hover:bg-white transition duration-300 mb-4 rounded-full"
        >
          Verify
        </button>
        <hr className="border border-[--primary]  opacity-40 w-[90%]" />
        <div className="flex justify-start w-[90%]">
          <p>New &nbsp; ? &nbsp; </p>
          <Link to="/user/register" className="text-[--primary]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;