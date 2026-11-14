import type { CSSProperties } from "react";
import profile from "../assets/profile.jpg";

const NAME = "Shawn Michael S. Bulos";

function Hero() {
  let k = 0;
  return (
    <div data-fx="left" className="fx-card border border-gray-300 shadow-lg p-6 sm:p-8 rounded-lg">
      <div className="flex flex-col items-center text-center gap-5 sm:flex-row sm:items-center sm:text-left sm:gap-8">
        {/* Avatar */}
        <div className="fx-ring w-40 h-40 sm:w-44 sm:h-44 aspect-square flex-shrink-0 shadow-md sm:shadow-lg">
          <div className="fx-ring-in">
            <img
              src={profile}
              decoding="async"
              alt="Shawn Michael S. Bulos"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center sm:items-start">
          <h1
            aria-label={NAME}
            className="text-[1.65rem] sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-[1.1] text-balance"
          >
            {NAME.split(" ").map((word, w) => (
              <span key={w} aria-hidden="true">
                <span className="fx-w">
                  {word.split("").map((ch, c) => (
                    <span
                      key={c}
                      className="fx-ch"
                      style={{ "--k": k++ } as CSSProperties}
                    >
                      {ch}
                    </span>
                  ))}
                </span>{" "}
              </span>
            ))}
          </h1>

          <h2 className="fx-role mt-2 text-base sm:text-xl font-semibold">
            Junior Web Developer
          </h2>

          <div className="fx-rule my-4 h-px bg-gray-300" />

          <p className="fx-bio max-w-[34ch] sm:max-w-[52ch] text-[0.95rem] text-gray-600 leading-7 sm:leading-relaxed text-pretty">
            Passionate about building Web Applications. I also explore AI tools
            and MCP servers to improve development efficiency and automate
            workflows. Focused on writing clean code, continuous learning, and
            delivering efficient, high-quality solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
