import Image from "next/image";
import banner from "../images/banner.png";

const Banner = () => {
    return (
    <>
    <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full max-h-[200px]">
            <Image src={banner} layout="fill" objectFit="cover" />
        </div>
        <div className="pb-[min(35%,200px)] w-full dark:bg-off-black opacity-40" />
    </div>
    </>)
}

export default Banner;