import ExternalLink from "./external-link";
import LinkedInIcon from '@/assets/LI-In-Bug.png';
import PhoneSvg from '@/assets/phone.svg';
import Icon from "./icon";
import { Mail } from "lucide-react";

export default function ContactDetails() {
    return <>
        <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-col border-b-solid border-b-2 pb-5" >
            <div className="min-w-80 max-sm:pb-2">
                <h3>Contact Information</h3>
            </div>
            <div>
                <div className="w-full max-w-7xl pl-5 flex flex-grow-1 max-sm:flex-col" >
                    <div className="min-w-28 max-sm:hidden">
                        <h3>Email:</h3>
                    </div>
                    <div className="flex items-center">
                        <a href="mailto:d.johnson@yorkshiresoftwaresolutions.co.uk" className="flex items-center hover:underline text-blue-600 dark:text-blue-400">
                            <Mail className="w-5 h-5 mr-2" />
                            d.johnson@yorkshiresoftwaresolutions.co.uk
                        </a>
                    </div>
                </div>
                <div className="w-full max-w-7xl pl-5 flex flex-grow-1 max-sm:flex-col" >
                    <div className="min-w-28 max-sm:hidden">
                        <h3>LinkedIn:</h3>
                    </div>
                    <div >
                        <ExternalLink link='https://www.linkedin.com/in/david-christopher-johnson/' title='david-christopher-johnson' image={LinkedInIcon}></ExternalLink>
                    </div>
                </div>
                <div className="w-full max-w-7xl pl-5 flex flex-grow-1 max-sm:flex-col" >
                    <div className="min-w-28 max-sm:hidden">
                        <h3>Phone:</h3>
                    </div>
                    <div className="w-full max-w-7xl flex flex-grow-1 max-sm:flex-row" >
                        <Icon src={PhoneSvg} alt='Phone symbol' />
                        <span className='pl-1'>
                            On request
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
}