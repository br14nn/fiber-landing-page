import { motion } from "framer-motion";

export default function () {
  return (
    <motion.button
      className="mt-2 w-fit rounded-md bg-white px-7 py-5 font-bold leading-none text-violet-blue laptop-max:text-xl tablet:mx-auto mobile-max:mx-0 mobile-max:w-full"
      whileHover={{
        backgroundColor: "#531ad8",
        color: "#ffffff",
        transition: { duration: 0.2 },
      }}
    >
      Start Free Trial
    </motion.button>
  );
}
