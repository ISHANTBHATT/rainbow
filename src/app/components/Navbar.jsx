"use client";
import { ShoppingCart, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.header
      variants={fadeIn("down", 1.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={`fixed w-full z-50 flex justify-between items-center px-6  ${
        isScrolled ? "bg-primary/90 px-10" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="text-white text-2xl font-bold tracking-widest leading-none"
      >
        <img src="/images/logo.png" className="w-full h-16" />
      </Link>
      <div className="flex items-center gap-4">
        {/* <Button variant="ghost" size="icon" className="text-white"> */}
        <Menu className="w-6 h-6 text-white" />
        {/* </Button> */}
      </div>
    </motion.header>
  );
}

export default Navbar;
