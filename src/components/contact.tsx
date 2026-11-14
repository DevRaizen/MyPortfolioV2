import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import pikachu from "../assets/pikachu-pokemon.gif";

const EMAIL = "shawnbulos03@gmail.com";
const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const links = [
  {
    name: "GitHub",
    handle: "@devraizen",
    href: "https://github.com/devraizen",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "Shawn Michael Bulos",
    href: "https://www.linkedin.com/in/shawn-bulos-60805518b/",
    Icon: FaLinkedin,
  },
  {
    name: "Facebook",
    handle: "Shawn Michael",
    href: "https://www.facebook.com/shawn.bulos/",
    Icon: FaFacebook,
  },
  {
    name: "Gmail",
    handle: "Send an email",
    href: GMAIL_LINK,
    Icon: SiGmail,
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);


  return (
    <div
      data-fx
      className="contact fx-card flex flex-col p-4 border border-gray-300 shadow-lg rounded-lg"
    >
      <div className="flex flex-row justify-between p-2">
        <div>
          <h2 className="text-lg font-bold mt-1">Contact Me</h2>
          <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
            <span className="fx-dot inline-block h-2 w-2 rounded-full" />
            Open to Work
          </div>
        </div>
        <img src={pikachu} alt="Pikachu GIF" className="fx-hop w-15 h-10" />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {links.map(({ name, handle, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fx-link flex items-center gap-3 p-2"
          >
            <Icon className="text-xl shrink-0" />
            <span>
              <span className="block leading-tight">{name}</span>
              <span className="block text-xs text-gray-500">{handle}</span>
            </span>
            <span className="fx-arrow" aria-hidden="true">
              &#8599;
            </span>
          </a>
        ))}

      </div>
    </div>
  );
}

export default Contact;
