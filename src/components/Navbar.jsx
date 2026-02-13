import { FaTools } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="p-10 py-8  z-10  flex justify-between items-center font-semibold box-border bg-[#28272749] sticky top-0">
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
          <button
            className=" outline-none   cursor-pointer   active:scale-95 border-2 py-3 px-4  rounded-lg transition-all duration-500 ease-out
               hover:bg-white hover:text-black hover:border-transparent btnBoxShadow"
          >
            Log In
          </button>
        </div>
        <div className="singup">
          <button className="bg-[#1c44d5] btnBoxShadow hover:bg-indigo-700 px-4 py-3  rounded-lg cursor-pointer transition-all duration-400 ease-out active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
