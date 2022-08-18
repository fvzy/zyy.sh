import DefText from "../DefText";
import { SkillGroup } from "./TabDisplay";

interface SlideProps {
    title: string,
    body: string[],
    skillGroups: SkillGroup[],
    active: boolean,
    backdrop?: boolean
}

// TODO: Rewrite
const Slide = ({ title, body, skillGroups, active, backdrop = false }: SlideProps) => {
    return(<div className={"space-y-2 transition-opacity ease-in-out w-full " + (active ? "z-10 opacity-100 " : "opacity-0 ") + (backdrop ? "invisible" : "absolute")}>
        <h3 className="text-2xl md:text-3xl mono-bold text-main-light dark:text-main-dark tracking-tight">{title}</h3>
        {body.map((text, i) => 
            <DefText key={i}>{text}</DefText>)
        }
        <div className="flex overflow-scroll no-scrollbar -mx-5 px-5">
            {skillGroups.map(({title, skills}, i) => (
                <div className="min-w-[280px] w-full max-w-[340px] inline-block" key={i}>
                    <h4 className="mono-medium text-sub-light dark:text-sub-dark pb-1">{ title }</h4>
                    <ul className="mono-medium text-sub-light dark:text-sub-dark pl-6 list-dash">
                        {skills.map((skill, j) => 
                            <li key={j}>{ skill }</li>)
                        }
                    </ul>
                </div>
            ))}
        </div>
    </div>)
}

export default Slide;