import AboutHero from "../src/components/AboutHero/AboutHero";
import OurStory from "../src/components/OurStory/OurStory";
import OurNumbers from "../src/components/OurNumbers/OurNmbers";
import OurTeam from "../src/components/OurTeam/OurTeam";
import OurValues from "../src/components/OurValues/OurValues";
import Form from "../src/components/Form/Form";

const About: React.FC = () =>
	<>
		<AboutHero/>
		<OurStory/>
		<OurNumbers/>
		<OurTeam/>
		<OurValues/>
		<Form/>
	</>

export default About;