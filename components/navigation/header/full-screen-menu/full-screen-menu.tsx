import { motion } from "framer-motion";
import { menuSlide } from "@/components/navigation/header/full-screen-menu/animation";
import Curve from "@/components/navigation/header/full-screen-menu/curve";
import Profile from "@/components/ui/profile";
import NavLink from "@/components/navigation/header/full-screen-menu/nav-link";
import Link from "next/link";
import MenuCard from "@/components/navigation/header/full-screen-menu/menu-card";

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      <div className="relative w-full pl-[5%]">
        {/*Profile*/}
        <div className="absolute top-8">
          <Profile />
        </div>
      </div>
      {/*Menu and card*/}
      <div className="absolute bottom-32 w-full lg:px-[5%]">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 500px" }}
        >
          <div className="pl-4 flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          {/*Menu about card*/}
          <MenuCard />
        </div>
      </div>
      {/*Footer links*/}
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white">
          {/*----Left--------------*/}
          <div className="flex items-center gap-4">
            <Link href="/">LEGAL NOTICE</Link>
            <Link href="/">404</Link>
            <Link href="/">LEGALSTYLE</Link>
          </div>
          {/*----Middle--------------*/}
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/loay-fayez/">LINKEDIN</Link>

          </div>
          {/*----rIGHT--------------*/}
          <div className="flex items-center gap-4">
            <Link href="/">©2024</Link>
          </div>
        </div>
      </div>
      {/*Curve svg effect*/}
      <Curve />
    </motion.div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Featured",
    href: "/#featured",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];
