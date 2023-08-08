import React, { SyntheticEvent, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://your-rails-api-url/signup",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(response.data);
      // You can handle the successful signup here, e.g., show a success message or redirect the user.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
