import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/request-reset", { email });
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error("Error sending password reset link.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordResetRequest;
