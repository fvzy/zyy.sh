import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    return(
    <footer className="space-y-1 flex flex-col items-center text-xs mb-8 md:mb-12 lg:mb-14 font-medium">
        <p className="font-inter text-sub-light dark:text-sub-dark">Made with magic by kevinMEH.</p>
        <a className="flex space-x-1 font-mono text-quiet-light dark:text-quiet-dark items-center" href="https://github.com/kevinMEH/portfolio">
            <FontAwesomeIcon icon={faStar} className="pb-[0.5px]" />
            <p>kevinMEH/portfolio</p>
        </a>
    </footer>
    )
}

export default Footer;