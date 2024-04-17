
const Footer = () => {
    const year = new Date().getFullYear();  // This gets the current year

    return (
        <footer className="bg-primary-forground text-white p-5">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
            </div>
            <div className="text-center text-gray-500 text-xs">
                © {year} Loay Fayez. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
