import DefText from "../DefText";
import { SkillGroup } from "./TabDisplay";

interface SlideProps {
    title: string,
    body: string[],
    skillGroups: SkillGroup[]
}

const Slide = ({ title, body, skillGroups }: SlideProps) => {
    return(<div className="space-y-3">
        <h3 className="text-3xl mono-bold text-main-light tracking-tight">{title}</h3>
        {body.map((text, i) => 
            <DefText key={i}>{text}</DefText>)
        }
        {skillGroups.map(({title, skills}, i) => (
            <div key={i}>
                <h4 className="mono-medium text-sub-light">{ title }</h4>
                <ul className="mono-medium text-sub-light pl-6 list-dash">
                    {skills.map((skill, j) => 
                        <li key={j}>{ skill }</li>)
                    }
                </ul>
            </div>
        ))}
    </div>)
}

export default Slide;