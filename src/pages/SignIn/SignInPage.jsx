import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Myntra-Logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { sendUserLoginRequest } from "../../api/api-helpers";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error Handling
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleContinue = async (e) => {
    e.preventDefault();

    if (!email) setEmailErr("Enter your email");
    if (!password) setPasswordErr("Enter your password");

    if (email && password) {
      try {
        const response = await sendUserLoginRequest({ email, password });

        if (response.error) {
          setErrorMsg(response.error);
        } else {
          // Successful login
          navigate("/");
        }
      } catch (error) {
        setErrorMsg("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleContinue}
        className="w-full max-w-md bg-white rounded-md shadow-lg p-6"
      >
        <div className="flex justify-center mb-6">
          <img className="w-28" src={Logo} alt="Myntra Logo" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Sign in
        </h2>

        {/* Email Input */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium mb-1">Email or Phone number</label>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3e6c]"
          />
          {emailErr && <p className="text-red-600 text-sm mt-1">{emailErr}</p>}
        </div>

        {/* Password Input */}
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3e6c]"
          />
          {passwordErr && (
            <p className="text-red-600 text-sm mt-1">{passwordErr}</p>
          )}
        </div>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-600 text-center text-sm mb-4">{errorMsg}</p>
        )}

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full py-2 bg-[#ff3e6c] text-white text-sm font-medium rounded-md hover:bg-[#e0335d] transition duration-200"
        >
          Continue
        </button>

        {/* Additional Links */}
        <div className="mt-6 text-center text-sm">
          <p>
            Securing your personal information is our priority.{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Conditions of Use
            </span>{" "}
            and{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Privacy Notice
            </span>.
          </p>
          <p className="mt-4">
            New to Myntra?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-[#ff3e6c] hover:underline"
            >
              Create your account
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <ArrowRightIcon className="inline-block text-gray-500" />
          <span className="text-blue-600 hover:text-[#ff3e6c] hover:underline cursor-pointer ml-1">
            Need help?
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
