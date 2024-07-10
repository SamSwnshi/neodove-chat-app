import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const {auth} = useAuthContext()
  return (
    <>
     <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={auth ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={auth ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
