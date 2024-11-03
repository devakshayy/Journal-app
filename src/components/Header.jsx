import React from "react";
import logo from "../assets/logooo 1.png";
import { Link } from "react-router-dom";

const Header = ({setOpen}) => {
  return (
    <div className="max-w-full h-[93px] bg-gradient-to-t from-[#7C00D7] to-[#410071] flex items-center justify-between">
       <Link to="/">
           <img src={logo} alt="Logo" className="h-[100px]" />
        </Link>
      
      <div className="flex gap-[20px] me-[40px] font-extrabold text-white">
        <Link to="/">
          <button>
            <h5>HOME</h5>
          </button>
        </Link>
        
          <button onClick={() => setOpen(true)}>
            <h5>CREATE</h5>
          </button>
       
      </div>
    </div>
  );
};

export default Header;
