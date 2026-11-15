import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import setup from "../assets/gallery-setup.jpg";
import greenhouse from "../assets/gallery-greenhouse.jpg";
import team from "../assets/gallery-team.jpg";

const photos = [
  { src: setup, label: "My setup", pos: "50% 50%" },
  { src: greenhouse, label: "Off the clock", pos: "30% 40%" },
  { src: team, label: "Internship team", pos: "50% 78%" },
];

function Gallery() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const n = photos.length;

  // auto-advance
  useEffect(() => {
    if (paused || open) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 4000);
    return () => clearInterval(t);
  }, [paused, open, n]);

  // lightbox keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setI((p) => (p + 1) % n);
      if (e.key === "ArrowLeft") setI((p) => (p - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, n]);

  return (
    <div
      data-fx
      className="fx-card fx-gal flex flex-col border border-gray-300 shadow-lg p-3 rounded-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="text-md font-bold mb-3">Gallery</span>

      <div
        role="button"
        tabIndex={0}
        aria-label={`Open photo: ${photos[i].label}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        className="relative aspect-[4/3] overflow-hidden rounded-md cursor-zoom-in"
      >
        {photos.map((p, k) => (
          <div key={p.label} className={`fx-gslide ${k === i ? "on" : ""}`}>
            <img
              src={p.src}
              alt={p.label}
              loading="lazy"
              className="fx-photo w-full h-full object-cover"
              style={{ objectPosition: p.pos }}
            />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-8">
          <p key={i} className="fx-swap text-xs font-medium text-white">
            {photos[i].label}
          </p>
          <div className="flex gap-1.5">
            {photos.map((p, k) => (
              <button
                key={p.label}
                aria-label={`Show ${p.label}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setI(k);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-5 bg-white" : "w-1.5 bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onClick={() => setOpen(false)}
            className="fx-lightbox fixed inset-0 z-[70] flex flex-col items-center justify-center gap-3 bg-black/90 p-4"
          >
            <img
              key={i}
              src={photos[i].src}
              alt={photos[i].label}
              className="fx-swap max-h-[84vh] max-w-full rounded-lg object-contain"
            />
            <p className="text-sm text-neutral-300">
              {photos[i].label} &middot; {i + 1}/{n}
            </p>
          </div>,
          document.body
        )}
    </div>
  );
}

function CTA() {
  return (
    <div className="flex flex-col gap-4">
      {/* Availability card (disabled). To bring it back, uncomment it and
          define EMAIL_LINK = "https://mail.google.com/mail/?view=cm&fs=1&to=you@example.com"
      
      <div
        data-fx
        className="fx-card border border-gray-300 shadow-lg p-5 rounded-xl w-full flex flex-col gap-3"
      >
        <div className="flex items-center gap-2">
          <span className="fx-dot inline-block h-2.5 w-2.5 rounded-full" />
          <span className="font-bold">Open to work</span>
        </div>
        <p className="text-sm text-gray-600">
          Looking for junior web developer opportunities. Let&rsquo;s build
          something together.
        </p>
        <a
          href={EMAIL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fx-mag fx-cv bg-neutral-100 hover:bg-neutral-300 font-bold text-sm text-center py-2 px-4 rounded"
        >
          Let&rsquo;s talk
        </a>
      </div>
      */}

      <Gallery />
    </div>
  );
}

export default CTA;
