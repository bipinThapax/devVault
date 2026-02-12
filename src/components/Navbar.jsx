import { FaTools } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="p-10 py-8   flex justify-between items-center font-semibold box-border bg-[#28272749] sticky top-0">
      <div className="logo flex gap-2 items-center">
        <div className="logoImg text-[#1c4ecd]">
          <FaTools />
        </div>
        <div className="logoText text-2xl font-bold">
          <h1>DevVault</h1>
        </div>
      </div>
      <ul className="list-none flex gap-5 items-center text-gray-500 ">
        <li className="  relative  hover:text-white transition-all duration-500 ease-out after:absolute after:left-0 after:-bottom-px after:h-[2.5px] after:w-0 after:bg-[#114de5]  cursor-pointer hover:after:w-16.5 hover:after:transition-all hover:after:ease-in-out hover:after:duration-500 after:rounded active:after:w-12  ">
          Features
        </li>
        <li className=" relative  hover:text-white transition-all duration-500 ease-out after:absolute after:left-0 after:-bottom-px after:h-[2.5px] after:w-0 after:bg-[#114de5]  cursor-pointer hover:after:w-13.5 hover:after:transition-all hover:after:ease-in-out hover:after:duration-500 after:rounded active:after:w-12 ">
          Pricing
        </li>
        <li className=" relative  hover:text-white transition-all duration-500 ease-out after:absolute after:left-0 after:-bottom-px after:h-[2.5px] after:w-0 after:bg-[#114de5]  cursor-pointer hover:after:w-21 hover:after:transition-all hover:after:ease-in-out hover:after:duration-500 after:rounded active:after:w-12 ">
          Changelog
        </li>
        <li className=" relative  hover:text-white transition-all duration-500 ease-out after:absolute after:left-0 after:-bottom-px after:h-[2.5px] after:w-0 after:bg-[#114de5]  cursor-pointer hover:after:w-9.5 hover:after:transition-all hover:after:ease-in-out hover:after:duration-500 after:rounded active:after:w-12 ">
          Docs
        </li>
      </ul>
      <div className="extra flex justify-center items-center  gap-4">
        <div className="themetoggle cursor-pointer">
          <IoIosSunny className="text-2xl hover:text-[#c1bbbb] transition-colors duration-300  " />
        </div>
        <div className="login">
          <button className="btnBoxShadow outline-none   py-2 px-3 rounded-lg cursor-pointer transition duration-250 ease-in active:scale-95">
            Login
          </button>
        </div>
        <div className="singup">
          <button className="bg-[#2c46a5] btnBoxShadow hover:bg-[#1b46e1] p-2 rounded-lg cursor-pointer transition-all duration-400 ease-out active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
