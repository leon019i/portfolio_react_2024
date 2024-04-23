import React from 'react';
import Image from 'next/image';
import MyImage from "../../public/assets/images/me/profile.jpg";
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Importing LinkedIn and GitHub icons

export default function Profile() {
    return (
        <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
            {/* Photo */}
            <div
                className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
                <Image src={MyImage}
                       alt="Loay Fayez photo"
                       priority  // Preloading the image
                       className="w-[95px] h-[95px] rounded-full object-cover border-[0.1vw] border-blue-cosmos"
                />
                {/* Online */}
                <div
                    className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
            </div>
            {/*Name*/}
            <div className="text-3xl font-medium">LOAY FAYEZ</div>
            {/* Icons */}
            <div className="flex items-center gap-x-4">
                <a href="https://www.linkedin.com/in/loay-fayez/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl text-blue-600 hover:text-gray-700" />
                </a>
                <a href="https://github.com/leon019i" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl hover:text-gray-700" />
                </a>
            </div>
        </div>
    );
};
