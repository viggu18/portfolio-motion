import { motion } from "framer-motion";
import { FC, Fragment } from "react";

interface TypingTextProps {
  text: string;
  containerClass?: string;
  textClass?: string;
}
const TypingText: FC<TypingTextProps> = ({
  text,
  containerClass = "",
  textClass = "",
}) => {
  if (!text) {
    return <Fragment />;
  }

  return (
    <div className={`${containerClass}`}>
      {text.split(" ").map((el, i) => (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
          className={`${textClass}`}
        >
          {el}
        </motion.p>
      ))}
    </div>
  );
};

export default TypingText;
