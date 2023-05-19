import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col h-screen">
      <div className="p-4">Logo</div>
      <ul className="flex-grow">
        <li className="p-4">Dashboard</li>
      </ul>
    </div>
  );
};

export default Sidebar;