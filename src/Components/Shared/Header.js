import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

function Header() {
  const [user] = useAuthState(auth);
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <header className="h-[60px] flex items-center bg-[#131921] sticky top-0 z-50 min-w-[700px]">
      {/* Amazon Logo */}
      <Link to="/">
        {" "}
        <img
          className="w-[100px] object-contain my-0 mx-5 mt-[18px]"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Header Search Div */}
      <div className="flex flex-[1] items-center rounded-[24px]">
        <input
          type="text"
          className="h-[12px] p-[15.6px] border-none w-[100%]"
        />
        {/* Search Icon */}
        <FontAwesomeIcon
          className="p-[5px] cursor-pointer h-[22px] bg-[#cd9042]"
          icon={faMagnifyingGlass}
        />
      </div>
      {/* Header Right Side Options */}
      <div className="flex justify-evenly">
        <div className="flex leading-5 flex-col mx-[15px] text-white">
          <span className="text-[10px]">
            Hello {!user ? "Guest" : user?.displayName}
          </span>
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="text-[10px] font-extrabold ml-[-6px]"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <span className="text-[13px] font-extrabold">Sign In</span>
            </Link>
          )}
        </div>
        <div className="flex leading-5 flex-col mx-[15px] text-white">
          <span className="text-[10px]">Returns</span>
          <span className="text-[13px] font-extrabold">& Order</span>
        </div>
        <div className="flex leading-5 flex-col mx-[15px] text-white">
          <span className="text-[10px]">Your</span>
          <span className="text-[13px] font-extrabold">Prime</span>
        </div>
        <div>
          <Link
            className="flex flex-col justify-center items-center mx-[15px] text-white"
            to="/checkout"
          >
            <span className="text-[13px] font-extrabold mx-[10px]">
              {cartItems?.length}
            </span>
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
