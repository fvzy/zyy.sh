import Image from "next/image";

const ProjectCard = 
({ image, imageAlt, title, text, href }: 
{ image: any, imageAlt: string, title: string, text: string, href: string }) => {
    return(
    <a className="flex flex-col cursor-pointer" href={href}>
        <div className="relative h-[160px] w-auto">
            <div className="absolute bg-transparent dark:bg-off-black !bg-opacity-25 w-full h-full z-10" />
            <Image src={image} alt={imageAlt} className="rounded-t-md" layout="fill" objectFit="cover" priority={false} />
        </div>
        <div className="border-[#d0d7de] dark:border-[#333333] bg-off-white bg-opacity-25 dark:bg-[#1A1A1A] border-x border-b px-4 pt-3 pb-4 rounded-b-lg space-y-1">
            <h3 className="mono-bold text-main-light dark:text-main-dark text-lg">{ title }</h3>
            <p className="mono-regular text-sub-light dark:text-sub-dark text-xs">{ text }</p>
        </div>
    </a>
    )
}

export default ProjectCard;