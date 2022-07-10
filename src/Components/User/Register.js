import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rePass, setRePass] = useState("");
  //sign in
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center h-[100vh] bg-white">
      <Link to="/">
        <img
          className="my-5 object-contain w-[100px] mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="w-[300px] h-fit flex flex-col rounded-[5px] border-[1px] border-[lightgray] p-5 ">
        <h1 className="text-2xl font-extrabold mb-5">Create account</h1>
        <form>
          <h5 className="mb-1 font-medium">Your name</h5>
          <input
            className="border mb-2 h-7 bg-white w-[98%]"
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h5 className="mb-1 font-medium">E-mail</h5>
          <input
            className="border mb-2 h-7 bg-white w-[98%]"
            type="text"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5 className="mb-1 font-medium">Password</h5>
          <input
            className="border mb-2 h-7 bg-white w-[98%]"
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <small className="flex items-center">
            <span className="text-2xl mr-1">☛</span> Passwords must be at least
            6 characters.
          </small>
          <h5 className="mb-1 font-medium">Re-enter Password</h5>
          <input
            className="border mb-2 h-7 bg-white w-[98%]"
            type="password"
            name=""
            id=""
            value={rePass}
            onChange={(e) => setRePass(e.target.value)}
            required
          />
          <button
            className="bg-[#f0c14b] rounded-[2px] w-full h-7 border-[1px] my-2 border-[#a88734] text-[#111]"
            type="submit"
            onClick={register}
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-[12px]">
          By registering, you agree to Emajohn's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Register;
