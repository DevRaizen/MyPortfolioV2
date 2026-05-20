function Hero() {
  return (
    <div className="border border-gray-300 shadow-lg p-4 rounded-lg">
      <div className="flex flex-row items-start gap-4">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <img src="/src/assets/profile.jpg" alt="" className=" object-cover" />
        </div>
        <div className="p-2">
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Shawn Michael S. Bulos
          </h1>
          <h2 className="text-2xl text-black font-semibold mt-2">
            Junior Web Developer
          </h2>
          <span className="text-gray-600">
            Passionate about building Web
            Applications. I also explore AI tools and MCP servers to improve
            development efficiency and automate workflows. Focused on writing
            clean code, continuous learning, and delivering efficient,
            high-quality solutions.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
