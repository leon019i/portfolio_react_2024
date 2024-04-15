import Button from "./button";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import {FaGithub, FaGoogle} from "react-icons/fa";

export default function Socials() {
    return (
        <div className="flex items-center mt-6 flex-wrap gap-3">
            {socials.map((social, i) => (
                <Button key={i} link={social.link} isIcon>
                    <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
                </Button>
            ))}
        </div>
    );
}

const socials = [
    {
        icon: <FaGithub className="w-4 h-4" />,
        link: "https://github.com/leon019i",
        username: "Leon019i",
    },
    {
        icon: <FaGoogle className="w-5 h-5" />,
        link: "mailto:leonlord0@gmail.com",
        username: "Loay Fayez",
    },
    {
        icon: <FaLinkedinIn className="w-5 h-5" />,
        link: "https://www.linkedin.com/in/loay-fayez/",
        username: "Loay Fayez",
    },
    {
        icon: <FaInstagram className="w-5 h-5" />,
        link: "https://www.instagram.com/LoayFaiz/",
        username: "Loay Faiz",
    },
];