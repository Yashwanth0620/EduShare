import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyOTP({setIsAuthenticated, email }) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/verify-otp", { email, otp });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/dashboard"); // Navigate to the home page
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.response.data.message);
      alert("Invalid or expired OTP");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
        placeholder="Enter OTP"
        required
      />
      <button onClick={verifyOtp}>Verify</button>
    </div>
  );
}
