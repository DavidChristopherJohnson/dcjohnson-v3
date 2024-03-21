import NavBarLink from "./nav-link"

export default function NavBar() {

    return <nav className="max-sm:hidden flex items-center justify-between flex-wrap bg-black p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">      
      <span className="font-semibold text-xl tracking-tight">D. C. Johnson</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <NavBarLink href='/' text="Home" />
        <NavBarLink href='/cv' text="CV" />       
    </div>

  </nav>
}