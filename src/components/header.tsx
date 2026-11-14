import CV from "../assets/Shawn Michael Bulos - FullStack CV.pdf"
function Header() {
  return (
    <div data-fx="down" className="header fx-card flex items-center justify-between mt-4 p-4 text-white mx-6  border border-gray-300 shadow-lg rounded-xl sm:rounded-lg  ">
      <h1 className="text-2xl text-black font-bold">
        Shawn<span className="fx-grad-text">.Dev</span>
      </h1>
      <nav>
        <ul className="space-x-4 text-black font-medium border border-black py-2 px-4 rounded-lg hidden">
          <li><a href="#project" className="hover:underline">Project</a></li>
          <li><a href="#stack" className="hover:underline">Stack</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <a
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
        className="fx-mag fx-cv bg-neutral-100 hover:bg-neutral-300 font-bold py-2 px-4 rounded"
      >
        View CV
      </a>
    </div>
  );
}

export default Header;
