"use client";
import { IModalProps } from "@/constants/types";
import React, { useState } from "react";

export default function Modal<T extends { id: number }>({
  item,
  fields,
  onSave,
  onClose,
}: IModalProps<T>) {
  const [updatedItem, setUpdatedItem] = useState(item);

  const handleChange = (key: keyof T, value: any) => {
    setUpdatedItem({ ...updatedItem, [key]: value });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Edit Item {String(fields[0])}</h2>
        {fields.map((field) => (
          <div key={String(field)} className="mb-4 mt-4">
            <input
              type="text"
              className="border p-2 rounded outline-none w-full"
              value={String(updatedItem[field])}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
        <button
          onClick={() => onSave(updatedItem)}
          className="mr-2 p-2 px-10 bg-blue-500 text-white rounded"
        >
          Save
        </button>
        <button onClick={onClose} className="p-2 px-10 bg-gray-300 rounded">
          Close
        </button>
      </div>
    </div>
  );
}
