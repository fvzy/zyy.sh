import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
    return (
        <nav className="flex justify-between text-[#A5A8AB]">
            <div className="mono-bold text-lg cursor-pointer">kevinMEH</div>
            <ul className="space-x-6 flex text-[1.2rem]">
                <li>
                    <FontAwesomeIcon icon={ faGithub } />
                </li>
                <li>
                    <FontAwesomeIcon icon={ faMedium } />
                </li>
                <li>
                    <FontAwesomeIcon icon={ faEnvelope } />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;