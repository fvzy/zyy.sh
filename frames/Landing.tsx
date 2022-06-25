import DefText from "../components/DefText";

const Landing = () => {
    return (
    <div className="flex flex-col justify-center items-start h-[95vh] pb-[10vh] space-y-2">
        <div className="work-extrabold text-main-light text-6xl">
            <h1>Hello!</h1>
            <h1>I'm Kevin.</h1>
        </div>
        <DefText>
            I&apos;m a tri-brid web developer, software engineer, and UI designer. 
            I build stunning websites and practical applications using the latest technologies.
        </DefText>
    </div>
    )
}

export default Landing;