import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: Rewrite
const Button = ({ icon, text, src }: { icon: IconDefinition, text: string, src: string }) => {
    return(<a href={src} className="inline-block px-6 py-[.5625rem] text-sub-light dark:text-sub-dark border-2 border-off-white dark:border-off-black rounded-md">
        <span className="flex items-center space-x-2">
            <FontAwesomeIcon className="text-lg" icon={icon} /> <p className="inline text-ms inter-semibold pr-1">{text}</p>
        </span>
    </a>)
}

export default Button;