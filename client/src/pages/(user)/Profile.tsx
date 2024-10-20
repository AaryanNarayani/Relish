import React, { useState } from "react";
import { Check, Pencil } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const inputs: (keyof FormData)[] = ['name', 'email', 'address'];

export default function Profile() {
    const [verified, setVerified] = useState<boolean>(false);
    const [editable, setEditable] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: 'Aaryan Narayani',
        email: '',
        address: '',
        phone: '',
    });
    const [otp, setOtp] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSave = () => {

        console.log('Saving data:', formData);
        setEditable(false);
    };

    const handleVerify = () => {

    }

    const list = inputs.map((item) => (
        <div key={item} className="flex flex-col">
            <label htmlFor={item} className="mb-1 capitalize">{item}</label>
            <input
                type="text"
                id={item}
                name={item}
                value={formData[item]}
                onChange={handleInputChange}
                className="p-3 caret-[--secondary] focus:outline-none rounded-xl"
                disabled={!editable}
            />
        </div>
    ));

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[1300px] flex py-10">
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="flex gap-5 items-center">
                        <h1 className="text-3xl">Aaryan Narayani</h1>
                        {verified && (
                            <span className="rounded-full bg-[--primary] p-2">
                                <Check className="text-white" />
                            </span>
                        )}
                    </div>
                    <div className="ml-36 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl">User Details</h2>
                                <button
                                    className="bg-white p-3 rounded-full hover:bg-[--primary-50] transition-colors"
                                    onClick={() => setEditable(true)}
                                >
                                    <Pencil className="h-4 w-4" />
                                </button>
                            </div>
                            {editable && (
                                <button
                                    className="bg-[--true] rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            )}
                        </div>
                        <div className="space-y-4">
                            {list}
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="mb-1">Phone</label>
                                <div className="flex gap-3">
                                    <div className={`flex items-center  justify-between gap-3 rounded-xl  ${editable ? 'bg-white' : ''}`}>
                                        <p className="px-3 border-r border-[--secondary]">+91</p>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="py-3 bg-inherit focus:outline-none caret-[--primary] rounded-xl flex-grow"
                                            disabled={!editable}
                                        />
                                    </div>
                                    <button className="bg-[--primary]  py-2 px-5 rounded-full hover:opacity-90 transition-opacity" onClick={()=>{handleVerify()}}>
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    {/* FOTO */}
                    <div className="w-52 h-52 bg-gray-200 rounded-full mx-auto flex items-center justify-center relative ">
                       <img src="/user/not-aaryan.png" className="rounded-full" alt="" />
                       <span className="absolute right-0 bottom-0 bg-[--primary] p-4 rounded-full border-4 border-[--ternary]"><Pencil/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}