import { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake validations
    if (email === "" || password === "") {
      setError("Above fields are required.");
      return;
    } else if (password.length < 5) {
      setError("Invalid Password");
    } else if (email.includes("@") && password.length >= 5) {
      setError("");
      login({ id: Date.now(), email: email });
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-full flex justify-center ">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password flex flex-col gap-2 ">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="p-2 bg-black border border-gray-600 rounded-md outline-none transition-all duration-300 ease-in-out focus:ring-1 focus:ring-purple-500 focus:shadow-purple-100/30 focus:shadow-[0px_0px_10px_0px] "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="errorMsg text-red-500 text-center">{error}</div>
        <div className="submitBtn text-center py-2">
          <button
            type="submit"
            className=" w-full py-2 bg-purple-800 font-semibold  cursor-pointer rounded-xl hover:bg-purple-900 transition duration-400 ease-in active:scale-95"
          >
            Sign In
          </button>
        </div>
        <div className="loginMsg text-center">
          Don't have an account ?{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
