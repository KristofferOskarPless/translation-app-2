import React from "react";

export default function secondaryButton({ label, onClick }) {
  return (
    <button
      className="w-full mt-8 border border-gray-500 hover:border-gray-400 text-gray-500 hover:text-gray-400 py-5 px-4 rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
}