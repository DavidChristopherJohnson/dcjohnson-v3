import Link from "next/link";
import NavBar from "./nav-bar";
import MobileNavBar from "./nav-bar-mobile";

const pages = [{
    href: '/',
    uniqueKey: 'about-me',
    text: 'About Me'
},
{
    href:'/cv',
    text: 'CV',
    uniqueKey: 'cv'
}]

export default function MainHeader () {
    

    return <header className="bg-black mb-0 pb-0">
        <NavBar pages={pages} />
        <MobileNavBar pages={pages} />
    </header>
}