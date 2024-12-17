import React from "react";


const Modal = ({ isOpen, onClose, title, description, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center">
      <div className="bg-gray-800 text-white rounded-lg p-6 w-11/12 max-w-lg shadow-lg">
        <img src={image} alt="" className="mx-auto mb-7 rounded-md"/>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <button
          onClick={onClose}
          className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
