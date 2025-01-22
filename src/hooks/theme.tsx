// // src/hooks/theme.ts
// import { useState, useEffect } from "react";

// export function useTheme() {
//   const [theme, setThemeState] = useState(() => localStorage.getItem("theme") || "system");

//   useEffect(() => {
//     const root = document.documentElement;
//     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

//     const appliedTheme = theme === "system" ? systemTheme : theme;
//     root.classList.remove("light", "dark");
//     root.classList.add(appliedTheme);

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const setTheme = (newTheme: string) => {
//     setThemeState(newTheme);
//   };

//   return { theme, setTheme };
// }



import { useState, useEffect } from "react";

export function useTheme() {
  // Initialize theme state based on localStorage or system theme
  const [theme, setThemeState] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Default to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Remove previous theme classes and apply the new one
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle system theme changes dynamically
  useEffect(() => {
    const systemThemeListener = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const systemTheme = e.matches ? "dark" : "light";
        setThemeState(systemTheme);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", systemThemeListener);

    return () => {
      mediaQuery.removeEventListener("change", systemThemeListener);
    };
  }, [theme]);

  // Toggle theme between light, dark, and system
  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
  };

  return { theme, setTheme };
}
