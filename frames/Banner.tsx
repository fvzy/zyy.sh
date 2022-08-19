import Image from "next/image";
import banner from "../images/banner.png";

const Banner = () => {
    return (
    <>
    <div className="relative overflow-hidden">
        <div className="pb-[35%] w-full" />
        <div className="absolute top-0 left-0 w-full h-full">
            <Image src={banner} layout="fill" objectFit="cover" />
        </div>
    </div>
    </>)
}

export default Banner;