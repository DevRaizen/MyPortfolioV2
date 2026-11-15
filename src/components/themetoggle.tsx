import { useSyncExternalStore } from "react";
import type { MouseEvent } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

type Mode = "light" | "dark" | "system";
type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

// What first-time visitors see. Change to "system" to follow their device instead.
const DEFAULT_MODE: Mode = "dark";

const OPTIONS = [
  { id: "light", label: "Light", Icon: FaSun },
  { id: "system", label: "System", Icon: FaDesktop },
  { id: "dark", label: "Dark", Icon: FaMoon },
] as const;

const media = window.matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;

function readMode(): Mode {
  try {
    const s = localStorage.getItem("theme");
    if (s === "light" || s === "dark" || s === "system") return s;
  } catch {
    /* storage can be blocked */
  }
  return DEFAULT_MODE;
}

function resolve(mode: Mode): "light" | "dark" {
  return mode === "system" ? (media.matches ? "dark" : "light") : mode;
}

function paint(mode: Mode) {
  root.setAttribute("data-mode", mode); // what the switch shows
  root.setAttribute("data-theme", resolve(mode)); // what the CSS uses
}

function save(mode: Mode) {
  paint(mode);
  try {
    localStorage.setItem("theme", mode);
  } catch {
    /* the theme still switches */
  }
}

// Runs once when the module loads, before the first render.
paint(readMode());

// In "system" mode, follow the device live when its setting changes.
media.addEventListener("change", () => {
  if (root.getAttribute("data-mode") === "system") paint("system");
});

// Every ThemeToggle on the page reads the same attribute, so they stay in sync.
function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(root, { attributes: true, attributeFilter: ["data-mode"] });
  return () => mo.disconnect();
}
function getMode(): Mode {
  return (root.getAttribute("data-mode") as Mode) || DEFAULT_MODE;
}

function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getMode);
  const index = OPTIONS.findIndex((o) => o.id === mode);

  const choose = (next: Mode, e: MouseEvent<HTMLButtonElement>) => {
    if (next === mode) return;
    const doc = document as ViewTransitionDoc;
    if (!doc.startViewTransition) {
      save(next);
      return;
    }
    // circular reveal that grows from the button that was clicked
    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const end = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    doc
      .startViewTransition(() => {
        save(next);
      })
      .ready.then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${end}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
  };

  return (
    <div role="radiogroup" aria-label="Color theme" className="fx-seg">
      <span
        className="fx-seg-ind"
        aria-hidden="true"
        style={{ transform: `translateX(${index * 100}%)` }}
      />
      {OPTIONS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={mode === id}
          aria-label={`${label} mode`}
          title={label}
          onClick={(e) => choose(id, e)}
          className={`fx-seg-btn ${mode === id ? "on" : ""}`}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;
