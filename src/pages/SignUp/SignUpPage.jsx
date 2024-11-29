import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Myntra-Logo.png";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import { sendUserAuthReq } from "../../api/api-helpers";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Form Error States
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [reEntPasswordErr, setReEntPasswordErr] = useState("");

  const validEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // Validation
    if (!name) setNameErr("Enter your name");
    if (!email) setEmailErr("Enter your email");
    else if (!validEmail(email)) setEmailErr("Enter a valid email");

    if (!password) setPasswordErr("Enter your password");
    else if (password.length < 6) setPasswordErr("Password must be at least 6 characters");

    if (!reenterPassword) setReEntPasswordErr("Confirm your password");
    else if (reenterPassword !== password) setReEntPasswordErr("Passwords do not match");

    if (
      name &&
      email &&
      validEmail(email) &&
      password &&
      password.length >= 6 &&
      reenterPassword === password
    ) {
      setLoading(true);
      const data = { name, email, password };
      const response = await sendUserAuthReq(data);
      setLoading(false);

      if (response.error) {
        setErrorMsg(response.error);
        setSuccessMsg("");
      } else {
        setSuccessMsg("User registered successfully!");
        navigate("/signin");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-[360px] bg-white shadow-lg p-6 rounded-md"
        onSubmit={handleContinue}
      >
        <Link to="/">
          <img className="w-28 mx-auto mb-6" src={Logo} alt="Myntra Logo" />
        </Link>

        <h2 className="text-xl font-semibold text-center mb-4">Create Account</h2>

        <div className="flex flex-col gap-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Your Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameErr("");
              }}
              type="text"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {nameErr && <p className="text-red-600 text-sm mt-1">{nameErr}</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
              }}
              type="email"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {emailErr && <p className="text-red-600 text-sm mt-1">{emailErr}</p>}
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordErr("");
              }}
              type="password"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {passwordErr && <p className="text-red-600 text-sm mt-1">{passwordErr}</p>}
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Re-enter Password</label>
            <input
              value={reenterPassword}
              onChange={(e) => {
                setReenterPassword(e.target.value);
                setReEntPasswordErr("");
              }}
              type="password"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {reEntPasswordErr && (
              <p className="text-red-600 text-sm mt-1">{reEntPasswordErr}</p>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded mt-4 hover:bg-pink-600"
        >
          {loading ? (
            <RotatingLines
              visible={true}
              height="20"
              width="20"
              strokeWidth="5"
              color="white"
              ariaLabel="loading"
            />
          ) : (
            "Continue"
          )}
        </button>

        {/* Error & Success Messages */}
        {errorMsg && (
          <p className="text-red-600 text-sm mt-4 text-center">{errorMsg}</p>
        )}
        {successMsg && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-sm mt-4 text-center"
          >
            {successMsg}
          </motion.p>
        )}

        <p className="text-sm text-gray-600 mt-4 text-center">
          By continuing, you agree to Myntra's{" "}
          <span className="text-blue-500 cursor-pointer">Terms of Use</span> and{" "}
          <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
