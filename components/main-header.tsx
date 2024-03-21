import Link from "next/link";
import NavBar from "./nav-bar";
import MobileNavBar from "./nav-bar-mobile";

export default function MainHeader () {
    return <header className="bg-black">
        <NavBar />
        <MobileNavBar />
    </header>
}