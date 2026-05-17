import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 z-[80] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
    />
  );
}
