"use client";

import { Button } from "@/components/ui/button";
import { CloudSun, MoonStar } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <CloudSun className="h-6 w-6  absolute rotate-0 scale-100 dark:rotate-90  dark:scale-0" />
      <MoonStar className="h-6 w-6  rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
