import { FaTools } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { Link } from "react-router-dom";

const navObj = [
  { name: "Home", to: "/" },
  { name: "Features", to: "/" },
  { name: "Pricing", to: "/" },
  { name: "Changelog", to: "/changelog" },
  { name: "Docs", to: "/docs" },
];

const navLinkClass =
  "relative hover:text-white transition-all duration-500 ease-out " +
  "after:absolute after:left-0 after:-bottom-px after:h-[2.5px] after:w-0 after:bg-[#114de5] " +
  "cursor-pointer hover:after:w-full hover:after:transition-all hover:after:ease-in-out " +
  "hover:after:duration-500 after:rounded active:after:w-[70%]";

const Navbar = () => {
  return (
    <nav className="px-10 py-6 z-30 flex flex-wrap justify-between items-center font-semibold box-border bg-[#161515] sticky top-0">
      <div className="logo flex gap-2 items-center">
        <div className="logoImg text-[#1c4ecd]">
          <FaTools />
        </div>
        <div className="logoText text-2xl font-bold">
          <h1>DevVault</h1>
        </div>
      </div>

      <ul className="list-none ml-35 flex gap-10 items-center text-gray-500">
        {navObj.map((item) => (
          <li key={item.name}>
            <Link to={item.to} className={navLinkClass}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="extra flex justify-center items-center gap-3">
        <div className="themetoggle cursor-pointer">
          <IoIosSunny className="text-2xl hover:text-[#c1bbbb] transition-colors duration-300" />
        </div>
        <div className="login transition-all duration-300 ease-out active:scale-95 hover:-translate-y-px ">
          <Link
            to={"/login"}
            className=" px-5 py-3 rounded-xl text-sm font-medium cursor-pointer shadow-[0_0_0_1px_rgba(109,40,217,0.5)]"
          >
            Login
          </Link>
        </div>
        <div className="signup transition-all duration-300 ease-out active:scale-95 hover:-translate-y-px shadow-[0_0_0_1px_rgba(109,40,217,0.5)]">
          <Link
            to={"/signup"}
            className="bg-[#540bc8] px-4 py-3 rounded-lg text-sm font-medium cursor-pointer "
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
