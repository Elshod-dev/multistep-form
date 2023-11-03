import React from "react";

function TotalPage({ formData }) {
  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    username,
    nationality,
    other,
  } = formData;

  return (
    <div className="total-page">
      <div>
        <li>Your Firstname:</li>
        <span>{firstName ? firstName : "empty"}</span>
      </div>
      <div>
        <li>Your Lastname:</li>
        <span>{lastName ? lastName : "empty"}</span>
      </div>
      <div>
        <li>Your Email:</li>
        <span>{email ? email : "empty"}</span>
      </div>
      <div>
        <li>Your Username:</li>
        <span>{username ? username : "empty"}</span>
      </div>
      <div>
        <li>Your Password: </li>
        <span>{password ? password : "empty"}</span>
      </div>
      <div>
        <li>Your Nationality:</li>
        <span>{nationality ? nationality : "empty"}</span>
      </div>
    </div>
  );
}

export default TotalPage;
