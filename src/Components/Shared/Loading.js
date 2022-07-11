import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-white">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-black"></div>
    </div>
  );
};

export default LoadingPage;
