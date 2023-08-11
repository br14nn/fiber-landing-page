import { motion } from "framer-motion";

type TViewPortfolioButtonProps = {
  firstName: string;
};

export default function (props: TViewPortfolioButtonProps) {
  return (
    <motion.button className="relative top-0 mt-auto rounded-md border border-light-grey py-3 font-bold text-violet-blue">
      View {props.firstName}'s Portfolio
    </motion.button>
  );
}
