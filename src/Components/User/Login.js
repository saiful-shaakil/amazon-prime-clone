import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import LoadingPage from "../Shared/Loading";
function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //sign in
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (error) toast.error(error.message);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  //register
  const register = () => {
    navigate("/register");
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
        <h1 className="text-2xl font-extrabold mb-5">Sign In</h1>
        <form>
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
          <button
            className="bg-[#f0c14b] rounded-[2px] w-full h-7 border-[1px] my-2 border-[#a88734] text-[#111]"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-[12px]">
          By continuing, you agree to Emajohn's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={register}
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
