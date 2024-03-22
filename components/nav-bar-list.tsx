import { INavigationBarProps } from "@/interfaces/navigation-bar-props.interface";
import NavBarLink from "./nav-link";

export default function NavBarList({ pages }: INavigationBarProps) {
    return <>
        {pages.map(page => <div key={page.uniqueKey}><NavBarLink href={page.href} text={page.text} /> </div>)}
    </>
}