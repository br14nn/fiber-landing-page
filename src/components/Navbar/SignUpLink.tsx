import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Link to="signup">
      <motion.p
        className="rounded-md bg-violet-blue px-5 py-4 text-white"
        whileHover={{
          backgroundColor: "#e5e2de",
          color: "#4d13d1",
          transition: { duration: 0.2 },
        }}
      >
        Sign Up
      </motion.p>
    </Link>
  );
}
