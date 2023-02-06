import Image, { StaticImageData } from "next/image";
import { FaCode } from 'react-icons/fa';

const ProjectCard = 
({ image, imageAlt, title, text, href, lang }: 
{ image: string | StaticImageData | { default: StaticImageData }, imageAlt: string, title: string, text: string, href: string, lang: string }) => {
    return(
    <a className="flex space-x-3 md:space-x-5 cursor-pointer border-off-white dark:border-off-black transition-colors duration-300 border p-3 md:py-4 md:px-[18px] rounded-xl md:hover:bg-off-white md:dark:hover:bg-off-black !bg-opacity-25" href={href}>
        <div className="relative h-[18%] w-[18%] max-w-[64px] flex-none">
            <Image src={image} alt={imageAlt} className="rounded-lg" priority={false} />
            <div className="absolute top-0 left-0 bottom-0 right-0 dark:bg-off-black opacity-30 rounded-lg" />
        </div>
        <div>
            <h2 className="font-mono font-semibold md:text-lg leading-snug text-main-light dark:text-main-dark">{ title }</h2>
            <p className="font-mono text-xs md:text-sm leading-snug text-sub-light dark:text-sub-dark">{ text }</p>
              <code className="font-mono text-xs md:text-sm leading-snug text-sub-light dark:text-sub-dark"> - {lang}</code>
        </div>
    </a>
    )
}

export default ProjectCard;