import Image, { StaticImageData } from "next/image";

const ProjectCard = 
({ image, imageAlt, title, text, href }: 
{ image: string | StaticImageData | { default: StaticImageData }, imageAlt: string, title: string, text: string, href: string }) => {
    return(
    <a className="flex space-x-3 md:space-x-5 cursor-pointer border-off-white dark:border-off-black border rounded-xl p-3 md:py-3.5 md:px-4" href={href}>
        <div className="relative h-[18%] w-[18%] max-w-[70px] flex-none">
            <Image src={image} alt={imageAlt} className="rounded-lg" layout="fill" objectFit="cover" priority={false} />
            <div className="pb-[100%] w-full dark:bg-off-black opacity-30" />
        </div>
        <div>
            <h2 className="font-mono font-semibold md:text-lg leading-snug text-main-light dark:text-main-dark">{ title }</h2>
            <p className="font-mono text-xs md:text-sm leading-snug text-sub-light dark:text-sub-dark">{ text }</p>
        </div>
    </a>
    )
}

export default ProjectCard;