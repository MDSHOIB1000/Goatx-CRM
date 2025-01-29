import React, { useState } from "react";
import loginBg from "../../assets/image/products/login-bg.jpg";
import logo from "../../assets/image/logo/gotax-removebg.png";
import vector from "../../assets/image/products/Vector-3.png";
import { useNavigate } from "react-router-dom";
import LoginForm from "./loginform/LoginForm";
import ForgotPassword from "./forgotPassword/ForgotPassword";

function Login({ setIsAuthenticated, isAuthenticated }) {
  
  
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [forgetPassUi, setForgotPasswordUi] = useState(false)

  const handleLogin = () => {
    const validEmail = "admin@gmail.com";
    const validPassword = "123456";

    if (email !== validEmail) {
      setError("Invalid email address.");
      return; 
    }

    if (password !== validPassword) {
      setError("Invalid password.");
      return; 
    }
    setIsAuthenticated(!isAuthenticated);
    navigate(`/`); 
    setError("");
    
  };

  return (
    <div
      className="h-screen bg-cover"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="grid grid-cols-2 relative">
        <div className="flex justify-around relative">
          <div className="absolute top-44 left-52">
            <div
              className="text-white p-3 mix-blend-color-dodge rounded-tl-2xl rounded-br-2xl border border-white"
              style={{
                backgroundColor: "rgba(250, 250, 250, 0.4)",
              }}
            >
              <h1 className="text-6xl font-[900] traking-[1]">GOATX CRM</h1>
            </div>
          </div>
        </div>
        <div className="h-screen flex items-center justify-around">
          <div className="text-3xl font-bold w-1/2">
            <div className="bg-headerBg p-4 mb-9 flex justify-center rounded-tl-2xl rounded-br-2xl border border-white">
              <img src={logo} alt="logo-company" />
            </div>
            {!forgetPassUi ? (
              <>
                <LoginForm
                  handleLogin={handleLogin}
                  password={password}
                  setPassword={setPassword}
                  email={email}
                  setEmail={setEmail}
                  error={error}
                  setForgotPasswordUi={setForgotPasswordUi}
                />
              </>
            ) : (
              <>
                <ForgotPassword />
              </>
            )}
          </div>
        </div>
        <div className="absolute  bottom-0 ">
          <img src={vector} alt="vector" />
        </div>
      </div>

    </div>
  );
}

export default Login;
