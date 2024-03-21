'use client';

import { useState } from "react";
import NavBarLink from "./nav-link";
import HamburgerButton from "./hamburger-button";

export default function MobileNavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const isHidden = showMenu ? "" : "hidden";

    const toggleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return <nav className="sm:hidden">
        <div className="flex">
            <div className="text-white text-3xl grow">D. C. Johnson</div>
            <button className="text-white mr-2" onClick={toggleShowMenu}>
                <div className="space-y-2">
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                </div>
            </button>
        </div>
        <div className={isHidden}>
            <NavBarLink href='/' text='Home' />
            <NavBarLink href='/cv' text='CV' />
        </div>
    </nav>
}