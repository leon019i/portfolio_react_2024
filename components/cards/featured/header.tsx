import {FC} from "react";

interface HeaderProps {
    title: string;
    tags: string;
}

const Header: FC<HeaderProps> = ({title, tags}) => {
    return <div
        className="bg-secondary-background flex flex-nowrap flex-none relative w-full items-center justify-between p-6 h-16 border border-border rounded-3xl">

        {/*Title*/}
        <div>
            <p className="text-lg font-medium leading-3 text-primary-foreground">{title}</p>
        </div>
        {/*Tag*/}
        <div>
            <p className="text-lg font-medium leading-3 text-primary-foreground font-pixel opacity-30">{tags}</p>
        </div>
    </div>
}

export default Header;