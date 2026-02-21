import { useNavigate } from "react-router-dom";

import { GiIceCube } from "react-icons/gi";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound min-h-screen flex flex-col gap-10 ">
      <div className="header h-[30vh] flex justify-center  items-center">
        <div className="logo flex items-center gap-4 text-3xl">
          <div className="logoImg text-[#0a66e7] ">
            <GiIceCube />
          </div>
          <div className="logoText  font-bold">
            <h1>DevVault</h1>
          </div>
        </div>
      </div>
      <div className=" notFoundMessage  flex flex-col  items-center">
        <h1 className="text-4xl ">
          404 ! <span className="text-red-600">Page Not Found</span>
        </h1>
        <div className="goBack">
          <button
            className="bg-blue-500 p-2 px-4 rounded-2xl mt-20 border border-blue-800 shadow-blue-400/70 cursor-pointer shadow-[1px_1px_4px] hover:shadow-[1px_1px_10px] hover:-translate-y-px active:scale-95 transition duration-300 ease-in"
            onClick={() => navigate("/")}
          >
            Return Home &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
