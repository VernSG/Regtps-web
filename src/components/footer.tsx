import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-40">
      <div className="icons flex gap-10 justify-center">
        <Link
          href="https://chat.whatsapp.com/IvOlFVQ8xDuHa9pQ9swgA6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-4xl text-white" />
        </Link>

        <Link
          href="https://chat.whatsapp.com/IvOlFVQ8xDuHa9pQ9swgA6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className="text-4xl text-white" />
        </Link>
      </div>

      <div className="footer-copyright py-10">
        <h1 className="font-poppins text-center font-medium text-slate-300 text-sm">
          Join with ❤️ Community
        </h1>
        <h1 className="font-poppins mt-2 text-center font-medium text-slate-300 text-sm">
          Copyright 2024 - VernSG
        </h1>
      </div>
    </footer>
  );
}
