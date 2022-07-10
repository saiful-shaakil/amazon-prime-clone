import React from "react";
import { Link } from "react-router-dom";
function Login() {
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
        <h1 className="text-2xl font-extrabold mb-5">Sign In</h1>
        <form>
          <h5 className="mb-1">E-mail</h5>
          <input
            className="border mb-2 h-7 bg-white w-[98%]"
            type="text"
            name=""
            id=""
            required
          />
          <h5 className="mb-1">Password</h5>
          <input
            className="border mb-2 h-7 bg-white w-[98%]"
            type="password"
            name=""
            id=""
            required
          />
          <button
            className="bg-[#f0c14b] rounded-[2px] w-full h-7 border-[1px] my-2 border-[#a88734] text-[#111]"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-[12px]">
          By continuing, you agree to Emajohn's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          className="bg-gray-100 rounded-[2px] w-full h-7 border-[1px] my-2 border-[darkgray] text-[#111]"
          type="button"
        >
          Create Your Amazon Acount
        </button>
      </div>
    </div>
  );
}

export default Login;
