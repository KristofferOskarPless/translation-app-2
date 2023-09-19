'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const TableComponent = ({ rows }) => {
  const router = useRouter();

  const handleRowClick = (row) => {
    // Navigate to the detail page for the given row
    router.push(`/row/${row.id}`);
  };

  return (
    <table className="table-auto w-full bg-gray-950 mt-8">
      <thead className="bg-gray-950">
        <tr className="border-b-gray-700 border-b">
          <th className="px-6 py-4 text-start">Norwegian</th>
          <th className="px-6 py-4 text-start">English</th>
          <th className="px-6 py-4">
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className="border-b-gray-700 border-b" key={row.id} onClick={() => handleRowClick(row)}>
            <td className="px-6 py-4">{row.norwegian}</td>
            <td className="px-6 py-4">{row.english}</td>
            <td className="px-6 py-4">
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;