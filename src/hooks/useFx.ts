import { useEffect } from "react";

// Scroll reveal, cursor spotlight, magnetic button, progress bar,
// plus desktop-only 3D card tilt and cursor ring.
export default function useFx() {
  useEffect(() => {
    const desktop = window.matchMedia(
      "(min-width:1024px) and (hover:hover) and (pointer:fine)"
    ).matches;

    const els = document.querySelectorAll<HTMLElement>("[data-fx]");
    els.forEach((el) =>
      el.style.setProperty(
        "--i",
        String(Array.from(el.parentElement!.children).indexOf(el))
      )
    );
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fx-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    // wait for the hidden first state to be painted, otherwise the browser
    // skips the transition and the cards just appear on a fast first load
    const start = window.setTimeout(
      () => requestAnimationFrame(() => els.forEach((el) => io.observe(el))),
      150
    );

    // cursor ring (desktop)
    const ring = document.getElementById("fx-cursor");
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (ring) ring.style.transform = `translate(${cx}px,${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    if (desktop) raf = requestAnimationFrame(loop);
    const hideRing = () => ring?.classList.remove("on");
    if (desktop) document.documentElement.addEventListener("mouseleave", hideRing);

    const onMove = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      const card = t.closest<HTMLElement>(".fx-card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      if (desktop && ring) {
        tx = e.clientX;
        ty = e.clientY;
        ring.classList.add("on");
        ring.classList.toggle("big", !!t.closest("a,button,.swiper"));
      }
    };
    document.addEventListener("pointermove", onMove);

    const cleanups: Array<() => void> = [];

    // 3D tilt on every card except the header (desktop)
    if (desktop) {
      document.querySelectorAll<HTMLElement>(".fx-card:not(.header)").forEach((card) => {
        const enter = () => card.classList.contains("fx-in") && card.classList.add("fx-tilt");
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
          card.style.setProperty("--rx", `${(0.5 - py) * 10}deg`);
        };
        const leave = () => {
          card.style.setProperty("--rx", "0deg");
          card.style.setProperty("--ry", "0deg");
        };
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointermove", move);
        card.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("pointermove", move);
          card.removeEventListener("pointerleave", leave);
        });
      });
    }

    document.querySelectorAll<HTMLElement>(".fx-mag").forEach((m) => {
      const move = (e: PointerEvent) => {
        const r = m.getBoundingClientRect();
        m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.35}px,${
          (e.clientY - r.top - r.height / 2) * 0.35
        }px)`;
      };
      const leave = () => (m.style.transform = "");
      m.addEventListener("pointermove", move);
      m.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        m.removeEventListener("pointermove", move);
        m.removeEventListener("pointerleave", leave);
      });
    });

    const bar = document.getElementById("fx-bar");
    const onScroll = () => {
      const d = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${d > 0 ? window.scrollY / d : 0})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(start);
      io.disconnect();
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", hideRing);
      window.removeEventListener("scroll", onScroll);
      cleanups.forEach((c) => c());
    };
  }, []);
}
