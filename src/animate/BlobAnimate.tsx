import React from "react";

export default function BlobAnimate() {
  return (
    <div className="absolute top-[30%] left-[15%] w-full max-w-lg">
      <div className="absolute top-0 left-8 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 right-8 w-60 h-60 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4"></div>
      <div className="absolute top-8 left-32 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6"></div>
    </div>
  );
}
