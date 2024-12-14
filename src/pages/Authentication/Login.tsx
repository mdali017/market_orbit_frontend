import React, { useState } from "react";
import { useUserLoginMutation } from "../../redux/api/api";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userLogin, { isLoading }] = useUserLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await userLogin({ email, password }).unwrap();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password.",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      localStorage.setItem("m_shop_token", result?.data?.accessToken);
      localStorage.setItem(
        "m_shop_user",
        JSON.stringify(result?.data?.userData)
      );

      if (result?.data?.userData?.role === "VENDOR") {
        navigate("/dashboard/vendor");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <FiMail className="absolute w-5 h-5 text-gray-400 top-3 left-3" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <FiLock className="absolute w-5 h-5 text-gray-400 top-3 left-3" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-violet-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-violet-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
