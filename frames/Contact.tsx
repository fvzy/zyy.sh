import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
    return (
        <div className="flex items-center flex-col pt-7">
            <h1 className="font-mono font-bold text-sub-light dark:text-sub-dark text-lg mb-1">
                Contact Me
            </h1>
            <p className="font-inter font-[475] text-sub-light dark:text-sub-dark text-sm md:text-[15px] leading-snug text-center max-w-[358px]">
                I'm always looking for opportunities to work on new and exciting
                projects. Click the button below to send me an email, and let's
                start working!
            </p>
            <a href="mailto:hello@liao.gg" className="mt-4 inline-flex text-sub-light items-center space-x-3 border-off-white dark:border-off-black border py-3 px-6 rounded-lg text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="pb-[2px]" /><p className="font-mono font-semibold">Email Me</p>
            </a>
        </div>
    );
};

export default Contact;
