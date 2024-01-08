import TypingText from "../animated/typing-text";

import CartoonImage from "../assets/me.png";

const Aboutme = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-3">
      <div>
        <TypingText
          textClass="mx-1 flex"
          containerClass="flex flex-wrap"
          text="Making designs a real world entites thinking about improving users interaction while also thinking about the best approach to the problem. A guy who thinks about writing less code (DRY) with the same amount of functionality and also same amount of performance"
        />
      </div>
      <div>
        <img src={CartoonImage} alt="me" />
      </div>
    </div>
  );
};

export default Aboutme;
