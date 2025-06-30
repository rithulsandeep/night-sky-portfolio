import * as Switch from '@radix-ui/react-switch';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <div className="fixed top-5 right-5 z-50">
            <Switch.Root
                checked={isDarkMode}
                onCheckedChange={toggleTheme}
                className={cn(
                    "w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full relative flex items-center transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                )}
            >
                <Switch.Thumb
                    className={cn(
                        "w-6 h-6 rounded-full bg-white shadow-md transform transition-transform flex items-center justify-center",
                        isDarkMode ? "translate-x-7" : "translate-x-1"
                    )}
                >
                    {isDarkMode ? (
                        <Moon className="h-4 w-4 text-blue-900" />
                    ) : (
                        <Sun className="h-4 w-4 text-yellow-400" />
                    )}
                </Switch.Thumb>
            </Switch.Root>
        </div>
    );
};
