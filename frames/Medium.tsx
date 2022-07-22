import DefText from "../components/DefText";
import HeadingTwo from "../components/HeadingTwo";
import Preface from "../components/Preface";
import Button from "../components/Button";
import Image from "next/image";

import phoneLight from "../images/phone-light.png";
import phoneDark from "../images/phone-dark.png";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import FrameWrapper from "../components/FrameWrapper";

const Medium = () => {
	return <FrameWrapper className="max-w-[800px] sm:flex sm:space-y-0 sm:space-x-6 md:space-x-12">
        <div className="space-y-1">
            <Preface className="text-purple-light dark:text-purple-dark">MEDIUM</Preface>
            <HeadingTwo>Check Out My Writing Too!</HeadingTwo>
            <div className="space-y-1 lg:space-y-2">
                <DefText>
                    Check out my blog on Medium, where I write about various topics
                    from productivity to computer science and technology on a weekly,
                    biweekly basis.
                </DefText>
                <DefText>
                    Whether you're a web developer, data scientist, tech enthusiast,
                    or anyone really, there's a read for you. 100% free.
                </DefText>
                <div className="justify-center hidden sm:flex pt-3">
                    <Button icon={faMedium} text="Medium" src="https://liaogg.medium.com" />
                </div>
            </div>
        </div>
        <div className="basis-2/5 flex-shrink-0 sm:-translate-y-[1.5rem] md:-translate-y-[3rem]">
            <div className="p-4 flex justify-center">
                <div className="dark:hidden">
                    <Image src={phoneLight} alt="iPhone with Medium article on screen" objectFit="contain" />
                </div>
                <div className="hidden dark:block">
                    <Image src={phoneDark} alt="iPhone with Medium article on screen" objectFit="contain" />
                </div>
            </div>
            <div className="flex justify-center sm:hidden">
                <Button icon={faMedium} text="Medium" src="https://liaogg.medium.com" />
            </div>
        </div>
    </FrameWrapper>
};

export default Medium;
