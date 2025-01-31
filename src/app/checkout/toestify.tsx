"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotifyButton = () => {
  // Function to trigger a toast notification
  const showToast = () => {
    toast.success("This is a success message!", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={showToast}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Show Toast
      </button>
      <ToastContainer />
    </div>
  );
};

export default NotifyButton;