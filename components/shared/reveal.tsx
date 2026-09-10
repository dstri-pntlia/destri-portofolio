"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, fadeUpBlur, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUpBlur}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends HTMLMotionProps<"div"> {
  staggerChildren?: number;
  delayChildren?: number;
}

export function Stagger({
  children,
  className,
  staggerChildren,
  delayChildren,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={fadeUp} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
