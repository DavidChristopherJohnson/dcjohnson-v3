import Link from "next/link"
import { INavigationBarProps } from "@/interfaces/navigation-bar-props.interface"
import NavBarList from "./nav-bar-list"

export default function NavBar({ pages }: INavigationBarProps) {

    return <nav className="max-sm:hidden flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-20">
            <Link href='/'>
                <span className="font-semibold text-xl tracking-tight">D. C. Johnson</span>
            </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <NavBarList pages={pages}/>
        </div>

    </nav>
}