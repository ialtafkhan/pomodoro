import React from "react";
import { useSelector } from "react-redux";

export default function Account() {
  const { login } = useSelector((state) => state.auth);
  return (
    <>
      <div>
        <h1>Name: {login.name}</h1>
      </div>
    </>
  );
}
