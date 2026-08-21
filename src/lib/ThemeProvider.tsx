import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from './theme-context';
import type { Theme, ThemeContextValue } from './theme-context';

/**
 * The brand is a white brand, so the site is light by default and does not
 * follow prefers-color-scheme. The footer carries a labelled toggle for
 * readers who want dark. See design/DESIGN-SYSTEM.md §1.5.
 *
 * The choice lives in one cookie, st_theme, which is the only cookie this
 * site sets. The Privacy Policy page says exactly that.
 */
function readInitialTheme(): Theme {
  if (typeof document === 'undefined') {
    return 'light';
  }
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function writeThemeCookie(theme: Theme): void {
  try {
    // One year, same-site, no third party can read it.
    document.cookie = `st_theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Cookies are blocked. The theme still applies for this visit.
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', theme === 'dark' ? '#141414' : '#FFFFFF');
    }
    writeThemeCookie(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo<ThemeContextValue>(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
