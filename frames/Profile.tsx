import Image from "next/image";
import profile from "../images/temp-pfp.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Profile = () => {
    return(
    <>
    <div className="flex justify-between">
        <div className="relative min-w-[80px] w-[30%] h-[30%] -mt-[18%] rounded-full overflow-hidden">
            <div className="pb-[100%] w-full bg-white" />
            {/* text-[0px] because for some strange reason inline block adds spaces... */}
            <div className="top-[4px] left-[4px] absolute w-[calc(100%-8px)] h-[calc(100%-8px)] text-[0px] rounded-full overflow-hidden">
                <Image src={profile} />
            </div>
        </div>
        <div className="flex w-[140px] justify-between text-sub-light text-2xl self-end pr-1 pb-1 pt-4"> 
            <a className="flex">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="flex">
                <FontAwesomeIcon icon={faMedium} />
            </a>
            <a className="flex">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    </div>
    </>
    )
}
// TODO: Credit: https://unsplash.com/photos/RsRTIofe0HE

export default Profile;