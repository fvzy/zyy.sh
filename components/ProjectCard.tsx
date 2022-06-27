import Image from "next/image";

const ProjectCard = 
({ image, imageAlt, title, text }: 
{ image: any, imageAlt: string, title: string, text: string }) => {
    return(
    <div className="flex flex-col">
        <div className="relative h-[160px] w-auto">
            <Image src={image} alt={imageAlt} className="rounded-t-md" layout="fill" objectFit="cover" />
        </div>
        <div className="border-[#d0d7de] border-x border-b px-4 pt-3 pb-4 rounded-b-md space-y-1">
            <h3 className="mono-bold text-main-light text-lg">{ title }</h3>
            <p className="mono-regular text-sub-light text-xs">{ text }</p>
        </div>
    </div>
    )
}

export default ProjectCard;