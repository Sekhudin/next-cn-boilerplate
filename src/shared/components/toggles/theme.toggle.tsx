"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "src/shared/ui/button";
import { cn, Props } from "src/utils/common";

const ThemeToggle = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    if (!theme) return;
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Button
      className={cn(`gap-0 rounded-full`, className)}
      variant="ghost"
      size="icon"
      aria-label="toggle dark theme"
      onClick={changeThemeHandler}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  );
};

export default ThemeToggle;
