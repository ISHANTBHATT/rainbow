// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// // import { Card } from '@/components/ui/card'

// export default function Testimonals() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const partners = [
//     {
//       name: "Kenya Airways Cargo",
//       logo: "/images/kenya_airways_cargo_logo.png",
//       width: 200,
//       height: 50,
//     },
//     {
//       name: "Hong Kong Air Cargo",
//       logo: "/images/hkcargo-logo-1-copy.png",
//       width: 300,
//       height: 60,
//     },
//     {
//       name: "Uzbekistan Airways",
//       logo: "/images/Uzbekistan_Airways_logo.svg (1).png",
//       width: 250,
//       height: 50,
//     },
//     {
//       name: "Vietjet Air Cargo",
//       logo: "/images/Vietjet_Air_Cargo_logo.png",
//       width: 200,
//       height: 50,
//     },
//     {
//       name: "Challenge Group",
//       logo: "/images/Challenge_Group_Logo.png",
//       width: 220,
//       height: 50,
//     },
//   ];

//   return (
//     <section className="py-12  bg-[#F5F5F7]">
//       <div className="container px-4 md:px-6">
//         <div className="text-center space-y-4 mb-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//             Our Trusted Partners
//           </h2>
//           <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//             We collaborate with leading airlines and cargo services worldwide to
//             provide the best logistics solutions.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {partners.map((partner, index) => (
//             <motion.div
//               key={partner.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
//                 <div className="flex items-center justify-center h-32 p-4">
//                   <Image
//                     src={partner.logo}
//                     alt={`${partner.name} logo`}
//                     width={partner.width}
//                     height={partner.height}
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { Card } from '@/components/ui/card'

export default function Testimonals() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partners = [
    {
      name: "Kenya Airways Cargo",
      logo: "/images/kenya_airways_cargo_logo.png",
      width: 200,
      height: 50,
    },
    {
      name: "Hong Kong Air Cargo",
      logo: "/images/hkcargo-logo-1-copy.png",
      width: 300,
      height: 60,
    },
    {
      name: "Uzbekistan Airways",
      logo: "/images/Uzbekistan_Airways_logo.svg (1).png",
      width: 250,
      height: 50,
    },
    {
      name: "Vietjet Air Cargo",
      logo: "/images/Vietjet_Air_Cargo_logo.png",
      width: 200,
      height: 50,
    },
    {
      name: "Challenge Group",
      logo: "/images/Challenge_Group_Logo.png",
      width: 220,
      height: 50,
    },
  ];

  return (
    <section className="py-12  bg-[#F5F5F7]">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Trusted Partners
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We collaborate with leading airlines and cargo services worldwide to
            provide the best logistics solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg">
                <div className="flex items-center justify-center w-80 h-32 p-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
