import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // frontend validations
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Above fields are required.");
      setLoading(false);
    } else if (password.length < 7 || name.length < 4) {
      setError("Credentials are too short.");
      setLoading(false);
    } else if (password !== confirmPassword) {
      setError("Password doesn't match");
      setLoading(false);
    } else if (email.includes("@")) {
      await signIn({ name: name, email: email, password: password });
      setError("");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
      navigate("/dashboard");
    }
  };

  const inputClass =
    "p-2 border border-gray-600 rounded-md outline-none transition-all duration-300 ease-in-out focus:ring-1 focus:ring-purple-500 focus:shadow-purple-100/30 focus:shadow-[0px_0px_10px_0px] ";
  return (
    <div className="w-full flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="min-w-[30%] px-6 py-8 border border-purple-300 rounded-2xl flex flex-col gap-4 shadow-gray-100/20 shadow-[0_4px_10px_0]"
      >
        <h1 className="loginFont text-center text-5xl font-extrabold pb-5  bg-linear-to-l from-[#26022d] via-[#dc7aed] to-[#ddd2df] bg-clip-text text-transparent">
          Sign Up :)
        </h1>
        <div className="name flex flex-col gap-2 ">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email flex flex-col gap-2 ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={inputClass}
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
            className={inputClass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="rePassword flex flex-col gap-2 ">
          <label htmlFor="rePassword">Confirm Password</label>
          <input
            type="password"
            id="rePassword"
            placeholder="Re-Enter your password"
            className={inputClass}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="errorMsg text-red-500 text-center">{error}</div>
        <div className="submitBtn text-center py-2">
          <button
            type="submit"
            disabled={loading}
            className=" w-full py-2 bg-purple-800 font-semibold  cursor-pointer rounded-xl hover:bg-purple-900 transition duration-400 ease-in active:scale-95"
          >
            {loading ? <div className="loader"></div> : "Sign Up"}
          </button>
        </div>
        <div className="loginMsg text-center">
          Already have an account ?{" "}
          <span
            className="text-blue-600 underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
