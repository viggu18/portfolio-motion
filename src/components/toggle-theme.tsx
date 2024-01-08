import useThemes from "../hooks/useThemes";
import { Moon, Sun } from "lucide-react";
import Button from "./button";

const ToggleTheme = () => {
  const { currentTheme, setTheme } = useThemes("dark");

  return (
    <Button
      className="bg-transperent border flex items-center gap-1 p-4 rounded-lg"
      variant="outline"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:hidden" />
      <Moon className="h-[1.2rem] w-0 dark:w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ToggleTheme;
