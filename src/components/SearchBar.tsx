"use client";

import React, { useState } from "react";

export function SearchBar({
  status,
  onStatusChange,
}: {
  status: string;
  onStatusChange: (status: string) => void;
}) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex items-center bg-white dark:bg-[#0A0A0A] border rounded-full p-1 max-w-[95%] sm:max-w-[600px] mx-auto">
      <div
        className={`flex items-center flex-1 px-2 sm:px-4 ${
          showFilter ? "hidden sm:flex" : "flex"
        } min-w-0`}
      >
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search projects"
          className="flex-1 p-2 bg-transparent border-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 text-sm sm:text-base"
        />
      </div>

      <div
        className={`flex items-center px-2 sm:px-4 sm:border-l border-gray-200 dark:border-[#1C1C1C] ${
          showFilter ? "flex-1" : ""
        }`}
      >
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="sm:hidden"
        >
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>

        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className={`${
            showFilter ? "block" : "hidden"
          } sm:block flex-1 p-2 bg-transparent border-none focus:outline-none text-gray-900 dark:text-white rounded-full`}
        >
          <option value="" className="text-gray-500">
            Select Status
          </option>
          <option value="in-progress">Funding in Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
        <button className="relative px-3 sm:px-6 py-2 sm:py-3 dark:bg-[#0A0A0A] bg-white rounded-full leading-none dark:text-white text-gray-900 text-sm sm:text-base">
          Search
        </button>
      </div>
    </div>
  );
}
