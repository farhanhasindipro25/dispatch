import React from "react";
import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      toastOptions={{
        icon: "🚀",
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }}
      position="bottom-right"
      reverseOrder={true}
    />
  );
}
