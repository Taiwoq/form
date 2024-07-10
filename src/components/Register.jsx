import React from "react";
import { useState } from "react";

const Register = () => {
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [phoneNumberState, setPhoneNumberState] = useState("");
  const submitFORM = (e) => {
    e.preventDefault();
    const formData = {
      firstNameState,
      lastNameState,
      emailState,
      phoneNumberState,
    };
    console.log(formData);
  };
  return (
    <>
      <div>
        <form
          onSubmit={submitFORM}
          className="border rounded bg-slate-100 w-[400px] p-2 mt-3 shadow "
          action=""
        >
          <div className="flex items-center justify-between">
            <label htmlFor="">First name:</label>
            <input
              value={firstNameState}
              onChange={(e) => setFirstNameState(e.target.value)}
              className="w-[270px] mb-2"
              type="text"
              name="firstname"
              placeholder="please enter your first name"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="">Last name:</label>
            <input
              value={lastNameState}
              onChange={(e) => setLastNameState(e.target.value)}
              className="w-[270px] mb-2"
              type=" text"
              name="lastname"
              placeholder="please enter your last name"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="">Email:</label>
            <input
              value={emailState}
              onChange={(e) => setEmailState(e.target.value)}
              className="w-[270px] mb-2"
              type="email"
              name="email"
              placeholder="please enter your email"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="">Phone number:</label>
            <input
              value={phoneNumberState}
              onChange={(e) => setPhoneNumberState(e.target.value)}
              className="w-[270px] mb-2"
              type="number"
              name="phone number"
              placeholder="please enter your first name"
            />
          </div>
          <button className="w-[150px] rounded-full mx-10 bg-black text-white hover:bg-grey-800 shadow">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
