import DefText from "../components/DefText";
import HeadingTwo from "../components/HeadingTwo";
import Preface from "../components/Preface";
import Button from "../components/Button";
import Image from "next/image";

import phoneLight from "../images/phone-light.jpg";
import phoneDark from "../images/phone-dark.jpg";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import FrameWrapper from "../components/FrameWrapper";

const Medium = () => {
	return <FrameWrapper className="max-w-[800px] md:flex md:space-y-0 md:space-x-12">
            <Preface className="text-purple-light dark:text-purple-dark">MEDIUM</Preface>
            <HeadingTwo>Check Out My Writing Too!</HeadingTwo>
        <DefText>
            Check out my blog on Medium, where I write about various topics
            from productivity to computer science and technology on a weekly,
            biweekly basis.
        </DefText>
        <DefText>
            Whether you're a web developer, data scientist, tech enthusiast,
            or anyone really, there's a read for you. 100% free.
        </DefText>
        <div className="relative w-full h-[450px] -z-10 !-mt-3">
            <Image src={phoneLight} className="dark:invisible" alt="iPhone with Medium article on screen" layout="fill" objectFit="cover" />
            <Image src={phoneDark} className="invisible dark:visible" alt="iPhone with Medium article on screen" layout="fill" objectFit="cover" />
        </div>
        <div className="flex justify-center">
            <Button icon={faMedium} text="Medium" src="https://liaogg.medium.com" />
        </div>
    </FrameWrapper>
};

export default Medium;
