import NextJsImg from "@/public/assets/images/stack/nextjs.png";
import ReactJsImg from "@/public/assets/images/stack/reactjs.png";
import NodeJsImg from "@/public/assets/images/stack/nodejs.png";
import ExpressJsImg from "@/public/assets/images/stack/expressjs.png";
import FramerMotionImg from "@/public/assets/images/stack/framer-motion.png";
import TailwindImg from "@/public/assets/images/stack/tailwind.png";
import HtmlImg from "@/public/assets/images/stack/html.png";
import CssImg from "@/public/assets/images/stack/css.png";
import SvelteImg from "@/public/assets/images/stack/svelte.png";
import NestJsImg from "@/public/assets/images/stack/nestjs.jpg";
import DjangoImg from "@/public/assets/images/stack/django.png";  // Assuming paths are correct
import DjangoRestImg from "@/public/assets/images/stack/djangorest.png";
import MySQLImg from "@/public/assets/images/stack/mysql.png";
import PostgreSQLImg from "@/public/assets/images/stack/postgresql.png";
import SQLiteImg from "@/public/assets/images/stack/sqlite.png";
import PostmanImg from "@/public/assets/images/stack/postman.png";
import CypressImg from "@/public/assets/images/stack/cypress.png";
import AngularImg from "@/public/assets/images/stack/angular.png";
import JavascriptImg from "@/public/assets/images/stack/JavaScript.png";
import TypescriptImg from "@/public/assets/images/stack/typescript.png";
import PythonImg from "@/public/assets/images/stack/Python.png"; // Add this if Python is also a part of your stack
import JavaImg from "@/public/assets/images/stack/Java.png"


export const stackData = [
    {
        title: "Programming Languages",
        stack: [
            {
                id: 0,
                title: "Javascript",
                image: JavascriptImg,
                bgColor: "#F0DB4F",  // JavaScript typically uses a yellow theme
            },
            {
                id: 1,
                title: "Typescript",
                image: TypescriptImg,
                bgColor: "#3178C6",  // TypeScript is known for its blue theme
            },
            {
                id: 2,
                title: "Python",
                image: PythonImg,
                bgColor: "#3776AB",  // Python's color
            },
            {
                id: 3,
                title: "Java",
                image: JavaImg,
                bgColor: "#3776AB",  // Python's color
            }
        ],
    },
    {

        title: "Testing",
        stack: [
            {
                id: 0,
                title: "Postman",
                image: PostmanImg,
                bgColor: "",
            },
            {
                id: 1,
                title: "Cypress",
                image: CypressImg,
                bgColor: "",
            },
        ],
    },
    {
        title: "Frontend FWs",
        stack: [
            {
                id: 0,
                title: "React js",
                image: ReactJsImg,
                bgColor: "",
            },
            {
                id: 1,
                title: "Next js",
                image: NextJsImg,
                bgColor: "",
            },
            {
                id: 2,
                title: "Svelte",
                image: SvelteImg,
                bgColor: "",
            },
            {
                id: 2,
                title: "Angular",
                image: AngularImg,
                bgColor: "",  // You can specify a background color like "#DD0031" (Angular red) if you like
            },
        ],
    },
    {
        title: "Styling / FWs",
        stack: [
            {
                id: 0,
                title: "Tailwind css",
                image: TailwindImg,
                bgColor: "",
            },
            {
                id: 1,
                title: "HTML 5",
                image: HtmlImg,
                bgColor: "",
            },
            {
                id: 1,
                title: "CSS 3",
                image: CssImg,
                bgColor: "",
            },
        ],
    },
    {
        title: "Animation",
        stack: [
            {
                id: 0,
                title: "Framer motion",
                image: FramerMotionImg,
                bgColor: "",
            },
        ],
    },
    {
        title: "Backend / FWs",
        stack: [
            {
                id: 0,
                title: "Node js",
                image: NodeJsImg,
                bgColor: "",
            },
            {
                id: 1,
                title: "Express js",
                image: ExpressJsImg,
                bgColor: "",
            },
            {
                id: 4,
                title: "Django",
                image: DjangoImg,
                bgColor: "#FFFFFF",
            },
            {
                id: 5,
                title: "Django REST Framework",
                image: DjangoRestImg,
                bgColor: "#FFFFFF",
            },
            // {
            //     id: 3,
            //     title: "Nest js",
            //     image: NestJsImg,
            //     bgColor: "#D31D58",
            // },
        ],
    },
    {
        title: "Databases",
        stack: [
            {
                id: 0,
                title: "MySQL",
                image: MySQLImg,
                bgColor: "",
            },
            {
                id: 1,
                title: "PostgreSQL",
                image: PostgreSQLImg,
                bgColor: "",
            },
            {
                id: 2,
                title: "SQLite",
                image: SQLiteImg,
                bgColor: "",
            },
        ],
    },
];
