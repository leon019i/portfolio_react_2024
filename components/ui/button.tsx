import { FC, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void; // Added onClick event handler
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
    return (
        <button onClick={onClick} className={`w-10 h-10 cursor-pointer flex items-center justify-center gap-2
            bg-primary-background rounded-full text-primary-foreground text-sm font-medium
            hover:bg-white/[0.1] transition-colors duration-100 ${className}`}>
            {children}
        </button>
    );
};

export default Button;
