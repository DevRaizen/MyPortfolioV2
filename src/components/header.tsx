function Header() {
  return (
    <div className="header flex items-center justify-between mt-4 p-4 text-white max-w-7xl mx-auto w-full border border-gray-300 shadow-lg rounded-lg  ">
      <h1 className="text-2xl text-black font-bold">Shawn.Dev</h1>
      <nav>
        <ul className="space-x-4 text-black font-medium border border-black py-2 px-4 rounded-lg hidden">
          <li>
            <a href="#project" className="hover:underline">
              Project
            </a>
          </li>
          <li>
            <a href="#stack" className="hover:underline">
              Stack
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Download CV
      </button>
    </div>
  );
}

export default Header;
