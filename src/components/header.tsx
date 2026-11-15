import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import CV from "../assets/Shawn Michael Bulos - FullStack Developer CV.pdf";
import ThemeToggle from "./themetoggle";

const LINKS = [
  { id: "project", label: "Project" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);

  // Esc closes the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // close it if the screen grows past the mobile layout
  useEffect(() => {
    const mq = window.matchMedia("(min-width:640px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="sticky top-3 z-40 mt-4 mx-6 sm:static sm:z-auto">
      {/* dim backdrop behind the open menu (mobile) */}
      <div
        className={`fx-scrim sm:hidden ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        data-fx="down"
        className="header fx-card flex items-center justify-between p-4 text-white border border-gray-300 shadow-lg rounded-xl sm:rounded-lg"
      >
        <h1 className="text-2xl text-black font-bold">
          Shawn<span className="fx-grad-text">.Dev</span>
        </h1>

        {/* desktop / tablet */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="fx-mag fx-cv bg-neutral-100 hover:bg-neutral-300 font-bold py-2 px-4 rounded"
          >
            View CV
          </a>
        </div>

        {/* mobile burger */}
        <button
          ref={burger}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={`fx-burger sm:hidden ${open ? "open" : ""}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fx-menu fx-card absolute left-0 right-0 top-full mt-2 border border-gray-300 shadow-lg rounded-lg p-3 sm:hidden ${
          open ? "open" : ""
        }`}
      >
        <nav aria-label="Sections">
          {LINKS.map((l, j) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="fx-mi fx-mlink"
              style={{ "--j": j } as CSSProperties}
            >
              <small>0{j + 1}</small>
              <span>{l.label}</span>
              <span className="fx-arrow" aria-hidden="true">
                &#8599;
              </span>
            </a>
          ))}
        </nav>

        <div
          className="fx-mi fx-hr mt-2 flex items-center justify-between px-1 pt-3"
          style={{ "--j": 4 } as CSSProperties}
        >
          <span className="text-sm text-gray-500">Theme</span>
          <ThemeToggle />
        </div>

        <div className="fx-mi mt-3" style={{ "--j": 5 } as CSSProperties}>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="fx-cv block bg-neutral-100 hover:bg-neutral-300 text-center font-bold p-2.5  rounded"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
