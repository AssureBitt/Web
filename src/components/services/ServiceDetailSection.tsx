"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export const ServiceDetailSection = ({
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  reversed = false,
}: ServiceDetailProps) => {
  return (
    <div className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`space-y-8 ${reversed ? "lg:order-2" : "lg:order-1"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-slate">
            {title}
          </h2>
          <p className="text-lg text-muted-text leading-relaxed">
            {description}
          </p>

          <ul className="space-y-4 pt-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-deep-slate font-medium text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={`relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden ${
            reversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
