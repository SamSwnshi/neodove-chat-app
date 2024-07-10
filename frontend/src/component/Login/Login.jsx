// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full p-6 w-full rounded-lg shadow-md bg-indigo-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className="text-2xl mb-2 font-bold text-center text-gray-300">
          Login <span className="text-lime-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base  label-text text-gray-200 mb-12">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input mt-2 rounded-md input-bordered w-full h-10 "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="label p-2 ">
              <span className=" text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input mt-2 rounded-md input-bordered w-full h-10 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-gray-200 hover:underline hover:text-lime-400 mt-2 inline-block"
          >
            {"Don't have an account"}
          </Link>
          <div>
            <button className="btn bg-lime-500 rounded-md p-2 w-20 btn-block btn-sm mt-2" disabled={loading}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
