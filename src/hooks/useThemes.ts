import { useEffect, useState } from "react";

export default function useThemes(theme: themeType) {
  const [activeTheme, setActiveTheme] = useState<themeType>(
    () => (localStorage.getItem("theme") as themeType) ?? theme ?? "light"
  );

  useEffect(() => {
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.documentElement.style.colorScheme = activeTheme;

    localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return {
    currentTheme: activeTheme,
    setTheme(theme: themeType) {
      setActiveTheme(theme);
    },
  };
}
