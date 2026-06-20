"use client";

import React, { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export const SectionWrapper = ({
  children,
  className = "",
  id,
  containerClassName = "",
}: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className={`max-w-7xl mx-auto w-full ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
