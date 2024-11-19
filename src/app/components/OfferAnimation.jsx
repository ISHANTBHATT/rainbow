"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function OfferAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const offerings = [
    { title: "Sales & Marketing Prowess", color: "bg-sky-100 text-sky-700" },
    { title: "Operational Excellence", color: "bg-orange-100 text-orange-700" },
    { title: "Market Intelligence", color: "bg-slate-100 text-slate-700" },
    { title: "Regulatory Expertise", color: "bg-red-100 text-red-700" },
    {
      title: "Superior Customer Service",
      color: "bg-amber-100 text-amber-700",
    },
    { title: "Financial Efficiency", color: "bg-purple-100 text-purple-700" },
    { title: "Tech Savvy", color: "bg-teal-100 text-teal-700" },
    { title: "Strong Network", color: "bg-lime-100 text-lime-700" },
    { title: "Partnership Mindset", color: "bg-blue-100 text-blue-700" },
    { title: "Faster-go-to-market", color: "bg-violet-100 text-violet-700" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === offerings.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [offerings.length]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-12 text-purple-800">WE OFFER</h1>
      <div className="relative w-[600px] h-[900px]">
        {offerings.map((offering, index) => {
          const angle = (index * 360) / offerings.length;
          const radius = 350; // Distance from center
          const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
          const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

          return (
            <motion.div
              key={index}
              className={`absolute left-1/3 top-1/2 ${offering.color} p-2 rounded-lg shadow-lg w-40 text-center flex flex-col items-center justify-center`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: activeIndex >= index ? 1 : 0,
                scale: activeIndex >= index ? 1 : 0,
                x: x,
                y: y,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <div
                className={`w-8 h-8 rounded-full ${offering.color.replace(
                  "100",
                  "500"
                )} flex items-center justify-center text-white font-bold mb-2`}
              >
                {index + 1}
              </div>
              {offering.title}
            </motion.div>
          );
        })}
        {offerings.map((_, index) => {
          const startAngle =
            ((index * 360) / offerings.length - 90) * (Math.PI / 180);
          const endAngle =
            (((index + 1) * 360) / offerings.length - 90) * (Math.PI / 180);
          const radius = 250;
          const startX = radius * Math.cos(startAngle);
          const startY = radius * Math.sin(startAngle);
          const endX = radius * Math.cos(endAngle);
          const endY = radius * Math.sin(endAngle);
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;

          return (
            <motion.div
              key={`arrow-${index}`}
              className="absolute left-1/2 top-1/2 w-0 h-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex > index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <ArrowRight
                className="text-gray-400"
                style={{
                  position: "absolute",
                  left: midX,
                  top: midY,
                  transform: `translate(-50%, -50%) rotate(${Math.atan2(
                    endY - startY,
                    endX - startX
                  )}rad)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* <button
        onClick={() => setActiveIndex(0)}
        className="mt-8 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Restart Animation
      </button> */}
    </div>
  );
}
