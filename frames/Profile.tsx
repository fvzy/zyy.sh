import Image from "next/image";
// https://unsplash.com/photos/2s6ORaJY6gI
import profile from "../images/temp-pfp.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium, faMastodon, faYoutubeSquare, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FaYoutube } from "react-icons/fa";

const Profile = () => {
    return(
    <div>
        <div className="flex justify-between mb-6">
            <div className="relative min-w-[80px] w-[min(30%,128px)] h-[min(30%,128px)] mt-[max(-18%,-80px)] rounded-full overflow-hidden">
                <div className="pb-[100%] w-full bg-white dark:bg-dark" />
                {/* text-[0px] because for some strange reason inline block adds spaces... */}
                <Image src={profile} sizes="33vw" className="top-[4px] left-[4px] absolute w-[calc(100%-8px)] h-[calc(100%-8px)] text-[0px] rounded-full overflow-hidden object-cover" priority={true} alt="Profile Picture" />
            </div>
            {/* md:text-lg */}
            <div className="flex space-x-7 text-sub-light dark:text-sub-dark text-2xl self-end pr-1 pb-1 pt-4 md:pt-5">
                <a aria-label="GitHub Link" className="flex items-center space-x-3" href="https://github.com/wffzy">
                    <FontAwesomeIcon icon={faGithub} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">GitHub</p> */}
                </a>
                <a aria-label="Youtube Link" className="flex items-center space-x-3" href="https://youtube.com/@zavyer">
                    <FontAwesomeIcon icon={faYoutube} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">Medium</p> */}
                </a>
                <a aria-label="Instagram  Link" className="flex items-center space-x-3" href="https://instagram.com/ditzzsxz_" rel="me">
                    <FontAwesomeIcon icon={faInstagram} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">Mastodon</p> */}
                </a>
                <a aria-label="Email Link" className="flex items-center space-x-3" href="mailto:hello@zyy.sh">
                    <FontAwesomeIcon icon={faEnvelope} className="md:pb-[2px]" />
                    {/* <p className="hidden font-mono font-medium text-sm md:block">Contact</p> */}
                </a>
            </div>
        </div>
        <h1 className="font-inter font-bold text-main-light dark:text-main-dark text-xl md:text-[22px] mb-1">
            Hello! I'm Ditzzy.
        </h1>
        <p className="font-inter font-[475] text-sub-light dark:text-main-dark text-sm md:text-[15px] leading-snug md:leading-[1.4]">
        I'm just a Beginner just learning programming, everything started from programming bots Whatsapp, Telegram, and Discord based on Javascript, then I tried web programming using HTML CSS and Javascript
        </p>
    </div>
    )
}
// TODO: Credit: https://unsplash.com/photos/RsRTIofe0HE

export default Profile;
