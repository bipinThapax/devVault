import { useContext } from "react";
import { AuthContext } from "../../context/context";
const Login = () => {
  const { login, logout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // controlled input, validations
  };
  return (
    <div className="w-full flex justify-center ">
      {/* email, password */}
      <form
        onSubmit={handleSubmit}
        className="min-w-[30%] px-6 py-8 border border-purple-300 rounded-2xl flex flex-col gap-6 shadow-gray-100/20 shadow-[0_4px_10px_0]"
      >
        <h1 className="loginFont text-center text-5xl font-extrabold pb-5  bg-linear-to-l from-[#26022d] via-[#dc7aed] to-[#ddd2df] bg-clip-text text-transparent">
          Login!
        </h1>
        <div className="email flex flex-col gap-2 ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-600 rounded-md outline-none transition-all duration-300 ease-in-out focus:ring-1 focus:ring-purple-500 focus:shadow-purple-100/30 focus:shadow-[0px_0px_10px_0px] "
          />
        </div>
        <div className="password flex flex-col gap-2 ">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="p-2 bg-black border border-gray-600 rounded-md outline-none transition-all duration-300 ease-in-out focus:ring-1 focus:ring-purple-500 focus:shadow-purple-100/30 focus:shadow-[0px_0px_10px_0px] "
          />
        </div>
        <div className="submitBtn text-center py-2">
          <button
            type="submit"
            className=" w-full py-2 bg-purple-800 font-semibold  cursor-pointer rounded-xl hover:bg-purple-900 transition-colors duration-300 ease-in active:scale-95"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
