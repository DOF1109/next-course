"use client";
import React, { useEffect } from "react";

const User = () => {
  useEffect(() => {
    alert("Welcome");
  }, []);

  return <div>User</div>;
};

export default User;
