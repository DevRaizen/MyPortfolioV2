import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <div className="border border-gray-300 shadow-lg p-6 sm:p-8 rounded-lg">
      <div className="flex flex-col items-center text-center gap-5 sm:flex-row sm:items-center sm:text-left sm:gap-8">
        {/* Avatar */}
        <div className="w-40 h-40 sm:w-44 sm:h-44 aspect-square rounded-full overflow-hidden flex-shrink-0 ring-4 ring-gray-100 shadow-md sm:ring-blue-100 sm:shadow-lg">
          <img
            src={profile}
            decoding="async"
            alt="Shawn Michael S. Bulos"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center sm:items-start">
          
          <h1 className="text-[1.65rem] sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-[1.1] text-balance">
            Shawn Michael S. Bulos
          </h1>

          <h2 className="mt-2 text-base sm:text-xl font-semibold text-blue-600">
            Junior Web Developer
          </h2>

          {/* Divider: centered on mobile, left-aligned on desktop */}
          <div className="my-4 h-px w-12 bg-gray-300" />

          <p className="max-w-[34ch] sm:max-w-[52ch] text-[0.95rem] sm:text-[0.95rem] text-gray-600 leading-7 sm:leading-relaxed text-pretty">
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