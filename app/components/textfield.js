import React from "react";

export default function TextField({ placeholder, onChange, value }) {
return (
<div className="relative mt-6 rounded-md shadow-lg">
<input
type="text"
placeholder={placeholder}
value={value}
onChange={onChange}
className="block w-full rounded-md border-0 py-4 pl-7 pr-20 bg-gray-950 text-gray-100 ring-1 ring-inset ring-gray-500 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
/>
</div>
);
}