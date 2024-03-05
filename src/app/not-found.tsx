import React from "react";
import { NotFoundClient } from "./components/NotFoundClient/NotFoundClient";

const NotFound = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <NotFoundClient />
    </div>
  );
};

export default NotFound;
