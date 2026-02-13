import { IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative z-10 min-h-[75vh] overflow-hidden bg-[#060608] flex items-center justify-center">
      {/* ── Orb 1 — top center large bloom ── */}
      <div className="absolute z-2 -top-40 left-1/2 -translate-x-1/2 w-130 h-130 rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.38)_0%,transparent_70%)] blur-[80px] animate-pulse" />

      {/* ── Top edge glow beam ──
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-4 w-150 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(168,85,247,0.6)_30%,rgba(216,180,254,0.95)_50%,rgba(168,85,247,0.6)_70%,transparent_100%)] shadow-[0_0_18px_2px_rgba(168,85,247,0.35)]" /> */}

      <div className="absolute top-20  flex flex-col  items-center gap-6 p-8 text-center">
        <div className="flex items-center gap-2 py-1 px-3 text-xs bg-[rgba(109,40,217,0.22)] border border-[rgba(168,85,247,0.3)] rounded-full text-purple-200 cursor-pointer backdrop-blur-sm hover:bg-[rgba(109,40,217,0.35)] hover:border-[rgba(168,85,247,0.5)] transition-all duration-200">
          <span className="text-green-400 text-[8px]">
            <FaCircle />
          </span>
          <span className="tracking-wide">v2.0 is now live</span>
          <span className="text-purple-400">
            <IoIosArrowForward />
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-7xl font-extrabold mt-4 mb-2 tracking-tight leading-[1.05]">
          Track. Build.{" "}
          <span className="bg-linear-to-br from-purple-400 via-violet-500 to-purple-300 bg-clip-text text-transparent">
            Ship.
          </span>
        </h1>

        {/* Subheading */}
        <p className="w-[52%] text-center text-xl text-purple-300/60 leading-relaxed">
          Your personal developer dashboard to manage projects, track progress,
          and showcase your work with elegance and speed.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-linear-to-r from-[#1844f1] to-[#6d28d9] text-white px-6 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 ease-out active:scale-95 hover:-translate-y-px shadow-[0_0_0_1px_rgba(109,40,217,0.5),0_4px_24px_rgba(109,40,217,0.35)] hover:shadow-[0_0_0_1px_rgba(168,85,247,0.7),0_8px_32px_rgba(109,40,217,0.55)]">
            Get Started for Free
          </button>
          <button className="flex items-center gap-3 bg-white/4 border border-white/10 text-purple-300 hover:text-purple-100 hover:bg-white/[0.07] hover:border-purple-500/35 px-6 py-3 rounded-xl text-sm font-medium cursor-pointer backdrop-blur-sm transition-all duration-300 ease-out active:scale-95 hover:-translate-y-px">
            <FaRegPlayCircle />
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
