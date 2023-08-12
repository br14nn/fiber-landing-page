import { motion } from "framer-motion";

type TViewPortfolioButtonProps = {
  firstName: string;
};

export default function (props: TViewPortfolioButtonProps) {
  return (
    <motion.button
      className="relative top-0 mt-auto rounded-md border border-light-grey bg-white py-3 font-bold text-violet-blue"
      whileHover={{
        backgroundColor: "rgba(77,19,209,1.0)",
        color: "rgba(255,255,255,1)",
        transition: { duration: 0.2 },
      }}
    >
      View {props.firstName}'s Portfolio
    </motion.button>
  );
}
