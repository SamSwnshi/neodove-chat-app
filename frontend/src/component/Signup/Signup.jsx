import {useState}from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [inputs,setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  })

  const {signup} = useSignup()
  const handleSubmit= async(e) =>{
    e.preventDefault()
    await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full p-6 w-full rounded-lg shadow-md bg-indigo-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-300">
          SignUp <span className="text-orange-600">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered w-full h-10 "
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full h-10 "
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10 "
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full h-10 "
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter Email "
              className="input input-bordered w-full h-10 "
              value={inputs.email}
              onChange={(e) =>
                setInputs({ ...inputs, email: e.target.value })
              }
            />
          </div>

          
          <Link
            to="/login"
            className="text-sm text-gray-200 hover:underline hover:text-orange- inline-block"
          >
            {"Already have an account"}
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">
              { "Sign Up"}

            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Signup
