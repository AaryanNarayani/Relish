import React, { useState } from "react";
import RegistrationProgressCard from "../../components/RegistrationProgressCard";
import { Check } from "lucide-react";

function RestoRegistrationInfo() {
  type FormData = {
    restoName: string;
    ownerName: string;
    email: string;
    ownerNumber: string;
    restoNumber: string;
    restoLocation: string;
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    restoName: "",
    ownerName: "",
    email: "",
    ownerNumber: "",
    restoNumber: "",
    restoLocation: "",
  });

  const updateForm = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  };

  const handleSubmit = () => {};

  return (
    <div className="h-[calc(100vh-64px)] w-full flex p-[40px] gap-20">
      <div className="p-[30px]">
        <RegistrationProgressCard />
      </div>
      <div className=" w-1/2 h-full flex flex-col gap-5 overflow-y-scroll no-scroller items-center">
        <h1 className="text-[35px] text-[--secondary] w-5/6">
          Resto Information
        </h1>
        <div className="restoName w-3/4 h-32 bg-white rounded ml-3 p-5 flex flex-col gap-1">
          <label className="text-[18px] text-[--secondary]" htmlFor="name">
            Resto Name
          </label>
          <p className="text-[10px] pl-4 text-[--gray]">
            coustomer will see this name on Relish
          </p>
          <input
            type="text"
            id="name"
            placeholder="Resto name*"
            className="ml-8 border w-[80%]  rounded p-2 focus:border-[--primary] outline-none text-[13px]"
            value={formData.restoName}
            name="restoName"
            onChange={updateForm}
          />
        </div>

        <div className="restoName w-3/4 h-fit bg-white rounded ml-3 p-5 flex flex-col gap-2">
          <label className="text-[18px] text-[--secondary]" htmlFor="name">
            Owner Details
          </label>
          <p className="text-[10px] pl-4 text-[--gray]">
            used by relish for business communications
          </p>
          <div className="flex">
            <input
              type="text"
              id="name"
              value={formData.ownerName}
              name="ownerName"
              placeholder="Fullname*"
              className="ml-8 border w-[50%]  rounded p-2 focus:border-[--primary] outline-none text-[13px]"
              onChange={updateForm}
            />
            <input
              type="email"
              value={formData.email}
              name="email"
              placeholder="email(Optional)"
              className="ml-4 border w-[50%] rounded p-2 focus:border-[--primary] outline-none text-[13px]"
              onChange={updateForm}
            />
          </div>
          <div className="flex mt-3">
            <div className="ml-8 border w-[10%]  rounded p-2 focus:border-[--primary] outline-none text-[13px]"></div>
            <input
              type="text"
              value={formData.ownerNumber}
              name="ownerNumber"
              placeholder="phone number*"
              className="ml-3 border w-[90%]  rounded p-2 focus:border-[--primary] outline-none text-[13px]"
              onChange={updateForm}
            />
          </div>
          <p className="text-[15px] ml-1 text-[--secondary]">
            Resto's Primary Contact Number
          </p>
          <p className="text-[10px] pl-4 text-[--gray]">
            used by relish and coustomer for order details
          </p>

          <div className="flex ml-4 items-center">
            <button
              className={`ml-1 h-4 w-4 border rounded flex justify-center items-center outline-none ${
                toggleCheckBox ? "bg-[--primary] text-[white]" : "bg-white"
              } `}
              onClick={() => {
                setToggleCheckBox(!toggleCheckBox);
              }}
            >
              {toggleCheckBox && <Check />}
            </button>
            <p className="text-[13px] pl-2 text-[--gray]">
              same as owner phone number
            </p>
          </div>

          {!toggleCheckBox && (
            <div className="flex mt-3">
              <div className="ml-8 border w-[10%]  rounded p-2 focus:border-[--primary] outline-none text-[13px]"></div>
              <input
                type="text"
                value={formData.restoNumber}
                name="restoNumber"
                placeholder="phone number*"
                className="ml-3 border w-[90%]  rounded p-2 focus:border-[--primary] outline-none text-[13px]"
                onChange={updateForm}
              />
            </div>
          )}
        </div>
        <div className="restoName w-3/4 h-fit bg-white rounded ml-3 p-5 flex flex-col gap-1 ">
          <label className="text-[18px] text-[--secondary]" htmlFor="name">
            Resto Location
          </label>
          <p className="text-[10px] pl-4 text-[--gray]">
            add your resto's location for order pickups
          </p>
          <textarea
            name="restoLocation"
            value={formData.restoLocation}
            className="ml-8 border w-[80%] h-20 rounded p-2 focus:border-[--primary] outline-none text-[13px]"
            onChange={(e) => updateForm(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default RestoRegistrationInfo;
