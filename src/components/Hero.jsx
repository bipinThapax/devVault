import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero p-10">
      <div className="textContainer p-8 flex flex-col items-center gap-12 justify-center">
        <div className="versionText py-1 px-2 text-xs flex items-center justify-between  gap-2 bg-[#7b33e1] rounded-2xl cursor-pointer">
          <span className="text-[#0ac013]">
            <FaCircle />
          </span>
          <span>v2.0 is now live</span>
          <span className="text-gray-400">
            <IoIosArrowForward />
          </span>
        </div>
        <h1 className="text-7xl font-extrabold">
          Track. Build. <span className="text-[#7009d1]">Ship.</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
