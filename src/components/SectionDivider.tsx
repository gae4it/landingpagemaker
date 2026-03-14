"use client";

import React from "react";

interface SectionDividerProps {
  title: string;
  children?: React.ReactNode;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title, children }) => {
  return (
    <div className="section-divider relative mb-4">
      <div className="flex w-full flex-col gap-2 min-[700px]:flex-row min-[700px]:items-center min-[700px]:gap-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {children ? (
          <div className="flex shrink-0 justify-start min-[700px]:ml-auto min-[700px]:justify-end">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SectionDivider;
