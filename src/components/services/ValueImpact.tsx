"use client";

import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { motion } from "framer-motion";
import { Layers, Zap, Code, Target, LucideIcon } from "lucide-react";

interface IconBoxProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export const IconBox = ({ title, description, Icon, index }: IconBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center space-y-4"
    >
      <div className="w-16 h-16 rounded-full bg-soft-gray flex items-center justify-center text-primary mb-2 shadow-sm">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-deep-slate">{title}</h3>
      <p className="text-muted-text max-w-[250px]">{description}</p>
    </motion.div>
  );
};

export const ValueImpact = () => {
  const values = [
    { title: "Scalable Architecture", description: "Built to grow with your business.", Icon: Layers },
    { title: "Performance Focus", description: "Fast-loading, optimized digital experiences.", Icon: Zap },
    { title: "Clean Codebase", description: "Maintainable and future-proof development.", Icon: Code },
    { title: "Business Alignment", description: "Solutions designed around real goals.", Icon: Target },
  ];

  return (
    <SectionWrapper className="bg-white border-y border-soft-gray/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-deep-slate">
          How Our Services Create Impact
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {values.map((v, i) => (
          <IconBox key={i} title={v.title} description={v.description} Icon={v.Icon} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
};
