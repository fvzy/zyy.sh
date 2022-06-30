import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, text, src }: { icon: IconDefinition, text: string, src: string }) => {
    return(<a href={src} className="inline-block px-6 py-[.5625rem] text-sub-light border-2 border-off-white rounded-md">
        <span className="flex items-center space-x-2">
            <FontAwesomeIcon className="text-lg" icon={icon} /> <p className="inline text-ms inter-semibold pr-1">{text}</p>
        </span>
    </a>)
}

export default Button;