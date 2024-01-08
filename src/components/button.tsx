import type { FC, HTMLAttributes } from "react";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof variants;
}

const Button: FC<ButtonProps> = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  return (
    <button className={`${className} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
