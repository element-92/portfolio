import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "@/data/resume";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AudioToggle } from "@/components/AudioToggle";
import { cn } from "@/utils/cn";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav
        aria-label="Primary"
        className="glass mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 backdrop-blur-lg sm:px-6"
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-wide text-text"
          aria-label={`${profile.name} home`}
        >
          HS<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-primary/15 text-text"
                      : "text-muted hover:text-text",
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <AudioToggle />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-3 mt-2 rounded-2xl p-3 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm text-muted transition-colors hover:bg-primary/10 hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
