"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export const ServiceCard = ({ title, description, Icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-3xl border border-soft-gray hover:border-primary/30 hover:shadow-xl transition-all group flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-2xl bg-soft-gray flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-deep-slate mb-3">
        {title}
      </h3>
      <p className="text-muted-text leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};
