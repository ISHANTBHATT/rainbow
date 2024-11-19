// import React from "react";

// function Page() {
//   return <div>Page</div>;
// }

// export default Page;
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Briefcase, Globe, Award, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          variants={itemVariants}
        >
          <div className="p-6 space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              The General Sales and Services Agents (GSSA) provide services
              which allow airlines to achieve a Cost-effective presence in
              markets where it may be uneconomical for an airline to maintain
              its own Sales team and office. With our professional setup
              structure, we are able to provide a full range of GSSA services
              with minimum costs so that our Airlines partner can enjoy the most
              out of our partnership.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              With our profound local expertise and wide connection within the
              local freight forwarding industry, we become the face of the
              airline in a specific territory and provide the client with a full
              range of cargo services.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* We Are Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We Are</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Building2,
              title: "Entrepreneurial Excellence",
              description:
                "Entrepreneurial with strong financial & professional integrity.",
            },
            {
              icon: Globe,
              title: "Pan India Presence",
              description: "Reputed Group Pan India.",
            },
            {
              icon: Briefcase,
              title: "Comprehensive Services",
              description:
                "We are intended to provide a full range of service to airlines that are willing to outsource some part or all of its cargo activity.",
            },
            {
              icon: Award,
              title: "GSSA Expertise",
              description: "Experienced in GSSA representation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  {item.title}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
