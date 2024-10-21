"use client";
import { ITableProps } from "@/constants/types";
import React, { useState, useEffect } from "react";

export default function Table<T extends { id: number; active: boolean }>({
  data,
  headers,
  onEdit,
}: ITableProps<T>) {
  const [filter, setFilter] = useState("");
  const [debouncedFilter, setDebouncedFilter] = useState(filter);
  const [filterActive, setFilterActive] = useState(false);
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedFilter(filter);
    }, 600);

    return () => {
      clearTimeout(debounce);
    };
  }, [filter]);

  useEffect(() => {
    const newFilteredData = Array.isArray(data)
      ? data
          .filter((item) =>
            headers.some((header) =>
              String(item[header])
                .toLowerCase()
                .includes(debouncedFilter.toLowerCase())
            )
          )
          .filter((item) => (filterActive ? item.active : true))
      : [];

    setFilteredData(newFilteredData);
  }, [data, debouncedFilter, filterActive, headers]);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter..."
          className="p-2 border mb-2 rounded outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <label className="ml-4 cursor-pointer">
          <input
            type="checkbox"
            className="mr-2 cursor-pointer"
            checked={filterActive}
            onChange={(e) => setFilterActive(e.target.checked)}
          />
          Show only active items
        </label>
      </div>

      <table className="min-w-full table-auto border">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={String(header)} className={`px-4 py-2 w-36`}>
                {String(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(filteredData) &&
            filteredData.map((item) => (
              <tr key={item.id}>
                {headers.map((header) => (
                  <td key={String(header)} className="border px-4 py-2 w-36 truncate max-w-[300px]" title={String(item[header])}>
                    {String(item[header])}
                  </td>
                ))}
                <td className="w-24">
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-blue-500 text-white font-semibold ml-5 py-2 px-4 rounded transition duration-1000 ease-in-out hover:bg-white hover:text-blue-500 border border-blue-500"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
