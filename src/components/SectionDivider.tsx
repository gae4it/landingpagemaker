"use client";

import React from "react";

interface SectionDividerProps {
  title: string;
  children?: React.ReactNode;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title, children }) => {
  return (
    <div className="section-divider relative mb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default SectionDivider;
