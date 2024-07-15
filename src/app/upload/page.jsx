"use client"
import { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="container mx-auto my-10">
        <div className="flex flex-col items-center justify-center h-96 bg-primary">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V8m0 0l-4 4m4-4l4 4m5 8h6M13 5l7 7-7 7"
              ></path>
            </svg>
          </div>
          <label className="text-white text-xl font-bold mb-2">
            Have a List? Upload Here
          </label>
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-lg hover:bg-gray-400"
          >
            {file ? file.name : "Choose File"}
          </label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Upload;
