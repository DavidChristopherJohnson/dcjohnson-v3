import { INavigationListItem } from "@/interfaces/navigation-list.interface";

export default function NavBarLink({ href, text }: { href: string, text: string }) {
    return <a href={href} className="
            inline-block
            font-medium
            py-2 
            px-4
            mx-2
            text-white
            rounded-md
            border border-transparent
            transition-all duration-300
            hover:border-white/30
            hover:bg-white/10
            hover:text-blue-400
            relative
            after:content-['']
            after:absolute
            after:w-0
            after:h-[2px]
            after:bg-blue-400
            after:left-1/2
            after:-translate-x-1/2
            after:bottom-0
            after:transition-all
            after:duration-300
            hover:after:w-3/4
          "
    >
        {text}
    </a>
}