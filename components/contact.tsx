import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContactDetails() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <h3 className="text-xl font-semibold text-white min-w-28">Email:</h3>
                    <a 
                        href="mailto:d.johnson@yorkshiresoftwaresolutions.co.uk" 
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 break-all"
                    >
                        <span className="flex-shrink-0 mr-2">
                            <Mail className="w-5 h-5" />
                        </span>
                        <span className="break-all">d.johnson@yorkshiresoftwaresolutions.co.uk</span>
                    </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <h3 className="text-xl font-semibold text-white min-w-28">LinkedIn:</h3>
                    <a 
                        href="https://www.linkedin.com/in/david-christopher-johnson/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                        <span className="flex-shrink-0 mr-2">
                            <Linkedin className="w-5 h-5" />
                        </span>
                        <span>david-christopher-johnson</span>
                    </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <h3 className="text-xl font-semibold text-white min-w-28">Phone:</h3>
                    <div className="flex items-center">
                        <span className="flex-shrink-0 mr-2">
                            <Phone className="w-5 h-5 text-blue-400" />
                        </span>
                        <span className="text-gray-300">On request</span>
                    </div>
                </div>
            </div>
        </div>
    );
}