import Image from "next/image";
// https://unsplash.com/photos/RsRTIofe0HE
import banner from "../images/banner.png";
import ThemeControlButton from "../components/ThemeControlButton";

const Banner = () => {
    return (
    <>
    <div className="relative overflow-hidden">
        <Image src={banner} fill={true} className="top-0 left-0 w-full h-full max-h-[200px] object-cover" priority={true} alt="Profile Picture" />
        <div className="pb-[min(35%,200px)] w-full dark:bg-off-black opacity-40" />
        <ThemeControlButton className="
        text-xl cursor-pointer duration-300 text-main-light dark:text-main-dark text-opacity-50 dark:text-opacity-100
        absolute right-5 top-4 w-8 h-8 bg-off-white dark:bg-off-black bg-opacity-[0.15] dark:bg-opacity-75 rounded-full
        flex items-center justify-around" />
    </div>
    </>)
}

export default Banner;