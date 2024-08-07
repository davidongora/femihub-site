import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const PasswordReset = () => {
  const { token } = useParams();
  const history = useHistory();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/auth/reset-password/${token}`, { password });
      toast.success("Password has been reset successfully.");
      history.push("/login");
    } catch (error) {
      toast.error("Error resetting password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default PasswordReset;
