import React from "react";
import "./Login.css";
export const LoginBox = () => {
  // const navigate=useNavigate();
  const handleDashboard=()=>{
// navigate("/dashboard")
window.location.href="dashboard"
  }
  return (
    <>
      <div className="head">
        <div className="Box">
          <div className="boxColoumn">
            <img
              src={require("../src/Assets/Screenshot_13-9-2024_155838_localhost.jpeg")}
              style={{ marginTop: "-40px" }}
            />
            <p style={{ fontSize: "18px", fontWeight: 450 }}>
              Please Sign In to access MIPS
            </p>
          </div>
          <div className="boxColoumn">
            <input className="inputStyle" placeholder="User name" />
          </div>
          <div className="boxColoumn">
            <input className="inputStyle" placeholder="Password" />
          </div>
          <div className="forgot">Forgot Password?</div>
          <div className="boxColoumn">
            <button className="button1"onClick={handleDashboard}>Login</button>
          </div>
          <div className="boxColoumn">
            <button className="button2">Login with Windows</button>
          </div>
          <div className="boxColoumn-row">
            <p style={{ fontSize: "18px", fontWeight: 450 }}>
              Are you a Seafarer/Manning Agent/Vendor?
            </p>
            <p
              style={{
                color: "rgb(252 109 40)",
                fontSize: "18px",
                fontWeight: 450,
              }}
            >
              Sign up
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
