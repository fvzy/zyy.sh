import Image from "next/image";

// TODO: Rewrite
const ProjectCard = 
({ image, imageAlt, title, text, href }: 
{ image: any, imageAlt: string, title: string, text: string, href: string }) => {
    return(
    <a className="flex flex-col md:flex-row-reverse cursor-pointer md:h-44" href={href}>
        <div className="relative h-[160px] w-auto flex-none md:basis-1/3 md:h-auto md:min-w-[18rem]">
            <div className="absolute bg-transparent dark:bg-off-black !bg-opacity-25 w-full h-full z-10" />
            <Image src={image} alt={imageAlt} className="rounded-t-md md:rounded-t-none md:!rounded-r-lg" layout="fill" objectFit="cover" priority={false} />
        </div>
        <div className="border-[#d0d7de] dark:border-[#333333] bg-off-white bg-opacity-25 dark:bg-[#1A1A1A] 
        border-x border-b md:border-y md:border-r-0 
        px-4 pt-3 pb-4 md:pt-0 md:pb-4 md:pl-7
        rounded-b-lg md:rounded-l-lg md:rounded-r-none
        md:flex justify-center flex-col space-y-1">
            <h3 className="mono-bold text-main-light dark:text-main-dark text-lg md:text-xl">{ title }</h3>
            <p className="mono-regular text-sub-light dark:text-sub-dark text-xs sm:text-sm">{ text }</p>
        </div>
    </a>
    )
}

export default ProjectCard;