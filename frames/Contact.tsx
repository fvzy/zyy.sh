import Button from "../components/Button";
import DefText from "../components/DefText";
import HeadingTwo from "../components/HeadingTwo";
import Preface from "../components/Preface";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
	return (
		<div className="space-y-1">
			<Preface className="text-blue-light dark:text-blue-dark text-center">CONTACT</Preface>
			<HeadingTwo className="text-center">Let's Start Working!</HeadingTwo>
			<DefText className="text-center">
				Whether you're a startup searching for another passionate
				developer or an established organization looking to get things
				done, I'm here to make your vision a reality. Click the button
				below to send me an email, and let's start working!
			</DefText>
            <div className="flex justify-center pt-4">
                <Button icon={faEnvelope} text="Email Me!" src="mailto:hello@liao.gg" />
            </div>
		</div>
	);
};

export default Contact;
