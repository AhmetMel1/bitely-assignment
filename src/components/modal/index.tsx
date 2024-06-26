import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  if (!props.show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <button
          className="text-red-500 float-right text-2xl"
          onClick={props.onClose}
        >
          &times;
        </button>
        {props.children}
      </div>
    </div>
  );
}
