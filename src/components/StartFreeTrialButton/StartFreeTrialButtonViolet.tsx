import { motion } from "framer-motion";

export default function () {
  return (
    <motion.button
      className="w-fit rounded-md bg-violet-blue px-7 py-5 font-bold leading-none text-white laptop-max:text-xl mobile-max:w-full"
      whileHover={{
        backgroundColor: "#e5e2de",
        color: "#4d13d1",
        transition: { duration: 0.2 },
      }}
    >
      Start Free Trial
    </motion.button>
  );
}
