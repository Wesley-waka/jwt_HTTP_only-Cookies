import React from "react";
import axios from "axios";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.delete("http://your-rails-api-url/logout", {
        withCredentials: true,
      });
      console.log(response.data);
      // You can handle the successful logout here, e.g., redirect the user to the login page.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
