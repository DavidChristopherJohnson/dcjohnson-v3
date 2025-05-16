import Link from "next/link";
import NavBar from "./nav-bar";
import MobileNavBar from "./nav-bar-mobile";

const pages = [{
    href: '/bio',
    uniqueKey: 'bio',
    text: 'Bio',
    visible: true
},
{
    href: '/projects',
    uniqueKey: 'projects',
    text: 'Projects',
    visible: true
},
{
    href: '/cv',
    text: 'CV',
    uniqueKey: 'cv',
    visible: true
},
{
    href: '/contact',
    text: 'Contact Me',
    uniqueKey: 'contact',
    visible: false
},
{
    href: '/articles',
    text: 'Articles',
    uniqueKey: 'articles',
    visible: false
},
{
    href: '/blog',
    text: 'Blog',
    uniqueKey: 'blog',
    visible: true
},
]

export default function MainHeader() {
    return <header className="bg-black fixed top-0 left-0 right-0 w-full z-50">
        <NavBar pages={pages} />
        <MobileNavBar pages={pages} />
    </header>
}