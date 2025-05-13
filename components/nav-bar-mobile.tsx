'use client';

import { useState } from "react";
import { INavigationBarProps } from "@/interfaces/navigation-bar-props.interface";
import NavBarList from "./nav-bar-list";

export default function MobileNavBar({ pages }: INavigationBarProps) {
    const [showMenu, setShowMenu] = useState(false);

    const isHidden = showMenu ? "" : "hidden";

    const toggleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return <nav className="sm:hidden bg-black p-4">
        <div className="flex items-center justify-between">
            <div className="text-white text-xl font-semibold">D. C. Johnson</div>
            <button className="text-white p-2 rounded-md hover:bg-white/10 transition-colors" onClick={toggleShowMenu}>
                <div className="space-y-1.5">
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </div>
            </button>
        </div>
        <div className={`mt-4 p-2 bg-black/90 rounded-md backdrop-blur-sm ${isHidden}`}>
            <NavBarList pages={pages} />
        </div>
    </nav>
}