"use client";
import Image from "next/image";
import React from "react";
import {
  Plane,
  Target,
  Users,
  Zap,
  Shield,
  Award,
  Building2,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
function Page() {
  const profileSections = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Our Legacy",
      content:
        "Rainbow Aviation Pvt. Ltd has been one of India's most vibrant & energetic company in the aviation industry with a high level of efficiency/professionalism. We began in 2004 under the expert guidance and dynamic leadership of our directors has grown from strength to strength with our areas of GSSA operations spanning PAN India today. We define ourselves as a company eager to seize opportunities with zest and a find creative and innovative ways to re-energize the trade.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Vision",
      content:
        "Rainbow Aviation Pvt. Ltd vision was to create a truly proactive and responsive GSSA in India. What started as a vision has become a reality today, as the group has grown with more than 130 dedicated qualified and trained personnel across India who works relentlessly to take its GSSA/Air Cargo operations to new pinnacle.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Our Team",
      content:
        "Rainbow Aviation Pvt. Ltd believes in reaching high standard of Business with ever reliable veteran panel and the systematic inclusion of fresh minds. Its major strength of professional team is always ready to take over the challenge and take the company to a new pinnacle are of prime value to the organization.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Our Reach",
      content:
        "Our group represents many airlines as GSSA for Passenger & Cargo has expanded its wings to all major metros in India. With the proven record of achieving targets, it as earned not only the market confidence but also received appreciation from the carriers whom we represent.",
    },
  ];
  const strengths = [
    {
      icon: <Target className="w-6 h-6" />,
      text: "Rainbow Aviation aim to meet our customer's stringent requirements for transport and logistics and aims to satisfy all our external and internal customers.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "We focus on relentless expansion and diversification to open avenues for employees growth while enriching the profitability of the organization.",
    },
    {
      icon: <Plane className="w-6 h-6" />,
      text: "We intent to provide a full range of service to airlines that are willing to outsource some part or all of its cargo activity.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "We aspire to remain flexible, responsive and committed to high standards of client servicing.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Our success depends entirely on our effectiveness towards your expectations",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Rainbow Aviation nurture dynamic team spirit with individual passion and zeal to deliver a zero defect service at all times.",
    },
  ];
  const teamMembers = [
    {
      name: "Nishant Lalitkumar Seth",
      role: "CEO",
      image: "/images/person2.jpg",
    },
    {
      name: "Preeti Lalitkumar Seth",
      role: "Operations Manager",
      image: "/images/person1.jpg",
    },
    {
      name: "Shivranjani Seth",
      role: "Customer Service Lead",
      image: "/images/person2.jpg",
    },
    {
      name: "Lalitkumar Seth",
      role: "Customer Service Lead",
      image: "/images/person1.jpg",
    },
  ];
  return (
    <div>
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company Profile
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {profileSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0 p-4 bg-primary/10 rounded-lg text-primary">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-gray-50 rounded-xl"
          >
            <div className="flex justify-center items-center gap-4 text-gray-600">
              <Users className="w-5 h-5" />
              <span className="font-medium">130+ Dedicated Personnel</span>
              <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
              <Globe className="w-5 h-5" />
              <span className="font-medium">Pan India Presence</span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Strength
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {strength.icon}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {strength.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Team
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated professionals behind Rainbow Aviation who
                work tirelessly.
              </p>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {[
              {
                name: "John Doe",
                role: "CEO",
                image: "/images/person1.jpg",
              },
              {
                name: "Jane Smith",
                role: "Operations Manager",
                image: "/images/person2.jpg",
              },
              {
                name: "Mike Johnson",
                role: "Customer Service Lead",
                image: "/images/person1.jpg",
              },
              {
                name: "Lalitkumar Seth",
                role: "Customer Service Lead",
                image: "/images/person1.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Team
              </h2> */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Team
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
              </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated professionals behind Rainbow Aviation who
                work tirelessly.
              </p>
            </div>
          </motion.div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
