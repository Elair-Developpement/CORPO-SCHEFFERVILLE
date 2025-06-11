"use client";

import React, { useState } from "react";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.value);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="mx-auto">
      <div className="flex border-b border-gray-300">
        {children.map((child) => (
          <button
            key={child.props.value}
            className={`${
              activeTab === child.props.value ? "border-b-2 border-green_1" : ""
            } flex-1 text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.value)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.value === activeTab) {
            return <div key={child.props.value}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export const Tab = ({ label, value, children }) => {
  return (
    <div label={label} value={value} className="hidden">
      {children}
    </div>
  );
};
