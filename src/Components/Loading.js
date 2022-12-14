import React from "react";
import "./../App.css";
const Loading = () => {
  return (
    <div className="flex items-center justify-center my-28">
      <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
