import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact p-4 border border-gray-300 shadow-lg rounded-lg">
      <div className="flex flex-row justify-between p-2">
        <h2 className="text-lg justify-center font-bold mt-1">Contact Me</h2>
        <img
          src="/src/assets/pikachu-pokemon.gif"
          alt="Pikachu GIF"
          className="w-15 h-10 "
        />
      </div>

      <div className="flex flex-col gap-3 mt-2">
        {/* GitHub */}
        <a
          href="https://github.com/devraizen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 "
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shawn-bulos-60805518b/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2 "
        >
          <FaLinkedin className="text-xl text-blue-600" />
          <span>LinkedIn</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/shawn.bulos/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-2"
        >
          <FaFacebook className="text-xl text-blue-500" />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
