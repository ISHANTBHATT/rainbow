// import {
//   ShoppingCart,
//   Menu,
//   Facebook,
//   Instagram,
//   ChevronDown,
// } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

// export default function Component() {
//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <header className="fixed w-full z-50 flex justify-between items-center px-6 py-4">
//         <Link href="/" className="text-white text-2xl font-bold">
//           BLUERIVER AVIATION
//         </Link>
//         <div className="flex items-center gap-4">
//           {/* <Button variant="ghost" size="icon" className="text-white"> */}
//           <ShoppingCart className="w-6 h-6" />
//           {/* </Button> */}
//           {/* <Button variant="ghost" size="icon" className="text-white"> */}
//           <Menu className="w-6 h-6" />
//           {/* </Button> */}
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="grid lg:grid-cols-2 min-h-screen">
//         {/* Left Section */}
//         <div className="relative bg-teal-400/90 p-8 lg:p-16 flex flex-col justify-center">
//           <div className="max-w-xl">
//             <h1 className="text-white text-6xl lg:text-8xl font-bold mb-8">
//               FLIGHT
//               <br />
//               TRAINING
//             </h1>
//             <p className="text-white text-lg mb-12">
//               Blue River Aviation in Palmer, AK, offers the best pilot training
//               in Alaska with primary courses including Private, Instrument,
//               Commercial, and Multi-Engine. Our flight instructors are prepared
//               to answer any and every question you may have, providing guidance
//               and reassurance along your journey to becoming a professional
//               pilot.
//             </p>
//             {/* <Button
//               className="bg-transparent hover:bg-white/20 text-white border-2 border-white rounded-none px-8 py-6 text-lg"
//               variant="ghost"
//             > */}
//             Explore Training
//             <ChevronDown className="ml-2 h-4 w-4" />
//             {/* </Button> */}
//             <div className="flex gap-4 mt-12">
//               <Link href="#" className="text-white hover:text-white/80">
//                 <Facebook className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="text-white hover:text-white/80">
//                 <Instagram className="h-6 w-6" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="relative h-[50vh] lg:h-auto">
//           <Image
//             src="/images/bg1.jpg"
//             alt="Aircraft flying over snowy mountains"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute top-6 right-6 text-white text-xl font-bold">
//             01
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import HomePage from "./components/HomePage";

export default function Component() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HomePage />
    </div>
  );
}
