import React, { SyntheticEvent, useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://your-rails-api-url/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      // You can handle the successful login here, e.g., redirect the user to a dashboard.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
