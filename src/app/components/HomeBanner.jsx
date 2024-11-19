"use client";
import React, { useEffect } from "react";
import { Facebook, Instagram, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
function HomeBanner() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bg1.jpg"
        alt="Aircraft flying over snowy mountains"
        fill
        className="object-cover"
        priority
      />

      {/* Header */}

      {/* Main Content */}
      <div className="relative min-h-screen flex">
        {/* Left Section */}
        {/* 6aadbc,7f4377 */}
        <motion.div
          initial={{ width: "100vw" }}
          animate={{ width: "33vw" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full font-sans lg:w-1/3 bg-primary/80 backdrop-blur-sm py-8 lg:py-20 lg:px-10 flex flex-col justify-center "
        >
          <motion.p
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white font-sans tracking-[0.3em]"
          >
            RAINBOW AVIATION
          </motion.p>
          <motion.div
            variants={fadeIn("up", 1.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full pointer-events-none"
          >
            <h1 className="text-white text-6xl lg:text-7xl font-extrabold mb-8 leading-none">
              MULTIPLE MINDS,
              <br />
              ONE TEAM
              {/* FLIGHT
              <br />
              TRAINING */}
            </h1>
          </motion.div>
          <div className="max-w-xl">
            <motion.p
              variants={fadeIn("up", 2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-white text-xs mb-12 leading-8"
            >
              Rainbow Aviation Pvt. Ltd has been one of India’s most vibrant &
              energetic company in the aviation industry with a high level of
              efficiency/professionalism. We began in 2004 under the expert
              guidance and dynamic leadership of our directors has grown from
              strength to strength with our areas of GSSA operations spanning
              PAN India today. We define ourselves as a company eager to seize
              opportunities with zest and a find creative and innovative ways to
              re-energize the trade.
            </motion.p>
            <motion.button
              variants={fadeIn("up", 2.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-transparent hover:bg-white/20 text-white border-[1px] border-white rounded-none px-4 py-2 text-base flex gap-2 items-start font-semibold"
              variant="ghost"
            >
              Explore
              <span>
                <MoveRight />
              </span>
            </motion.button>
            <div className="flex gap-4 mt-12">
              <Link href="#" className="text-white hover:text-white/80">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeBanner;

// "use client";
// import React from "react";
// import { Facebook, Instagram, MoveRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../variants";

// function HomeBanner() {
//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/images/bg1.jpg"
//         alt="Aircraft flying over snowy mountains"
//         fill
//         className="object-cover"
//         priority
//       />

//       {/* Main Content */}
//       <div className="relative min-h-screen flex flex-col lg:flex-row">
//         {/* Left Section */}
//         <motion.div
//           initial={{ width: "100vw" }}
//           animate={{ width: "100vw", lg: "33vw" }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="w-full md:w-1/3 bg-primary/80 backdrop-blur-sm py-8 px-4 md:px-8 lg:py-20 lg:px-10 flex flex-col justify-center"
//         >
//           <motion.p
//             variants={fadeIn("up", 1.6)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="text-white font-sans tracking-[0.3em] text-center lg:text-left"
//           >
//             RAINBOW AVIATION
//           </motion.p>
//           <motion.div
//             variants={fadeIn("up", 1.6)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="w-full pointer-events-none text-center lg:text-left"
//           >
//             <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-8 leading-tight">
//               MULTIPLE MINDS,
//               <br />
//               ONE TEAM
//             </h1>
//           </motion.div>
//           <div className="max-w-xl mx-auto lg:mx-0">
//             <motion.p
//               variants={fadeIn("up", 2)}
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//               className="text-white text-sm md:text-base mb-6 md:mb-12 leading-6 md:leading-8"
//             >
//               Rainbow Aviation Pvt. Ltd has been one of India’s most vibrant &
//               energetic company in the aviation industry with a high level of
//               efficiency/professionalism. We began in 2004 under the expert
//               guidance and dynamic leadership of our directors has grown from
//               strength to strength with our areas of GSSA operations spanning
//               PAN India today. We define ourselves as a company eager to seize
//               opportunities with zest and find creative and innovative ways to
//               re-energize the trade.
//             </motion.p>
//             <motion.button
//               variants={fadeIn("up", 2.4)}
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//               className="bg-transparent hover:bg-white/20 text-white border-[1px] border-white rounded-none px-4 py-2 text-sm md:text-base flex gap-2 items-center font-semibold w-full sm:w-auto"
//             >
//               Explore
//               <span>
//                 <MoveRight />
//               </span>
//             </motion.button>
//             <div className="flex gap-4 mt-6 md:mt-12 justify-center lg:justify-start">
//               <Link href="#" className="text-white hover:text-white/80">
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="text-white hover:text-white/80">
//                 <Instagram className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default HomeBanner;
