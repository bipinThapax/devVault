import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden p-10 ">
      <div className="textContainer  p-8 flex flex-col items-center gap-6 justify-center ">
        <div className="versionText py-1 px-2 text-xs flex items-center justify-between  gap-2 bg-[#7b33e1] rounded-2xl cursor-pointer">
          <span className="text-[#0ac013]">
            <FaCircle />
          </span>
          <span>v2.0 is now live</span>
          <span className="text-gray-400">
            <IoIosArrowForward />
          </span>
        </div>
        <h1 className="text-7xl font-extrabold mt-5 mb-3">
          Track. Build. <span className="text-[#7009d1]">Ship.</span>
        </h1>
        <h3 className="w-[50%] text-center text-2xl text-gray-400 ">
          Your personal developer dashboard to manage projects, track progress ,
          and showcase your work with elegance and speed .
        </h3>
        <div className="viewWorkBtns flex gap-8 mt-5">
          <button className="bg-linear-to-r from-[#1844f1] to-[#4b04b0] hover:bg-[#1b46e1] p-3 rounded-lg cursor-pointer transition-all duration-300 ease-out active:scale-95 hover:shadow-[0px_1px_15px_0px] hover:shadow-[#4b04b0] ">
            Get Started for Free
          </button>
          <button className="flex items-center gap-4 rounded-md cursor-pointer border border-gray-900 p-3 transition-all duration-400 ease-out hover:shadow-[0px_1px_15px_0px] hover:shadow-[#272525]  active:scale-95">
            <div>
              <FaRegPlayCircle />
            </div>
            <div>View Demo</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
