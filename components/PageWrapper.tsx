"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const PageWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className={twMerge("flex-1", className)}
      role="main"
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
