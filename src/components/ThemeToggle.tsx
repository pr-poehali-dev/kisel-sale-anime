import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 left-6 z-50 smooth-transition hover:scale-105 liquid-glass rounded-full w-12 h-12 shadow-lg"
      aria-label="Переключить тему"
    >
      {isDark ? (
        <Icon name="Sun" size={20} />
      ) : (
        <Icon name="Moon" size={20} />
      )}
    </Button>
  );
}
