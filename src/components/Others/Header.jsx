import React from "react";

function Header({ data }) {
  // Determine username based on available data
  const userName = data ? data.firstName : "Admin";

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="text-white flex items-end justify-between">
      <h1 className="text-xl">
        Hello <br />{" "}
        <span className="text-2xl font-semibold">{userName} 😎</span>{" "}
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
