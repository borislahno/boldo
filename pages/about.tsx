import AboutHero from "../src/components/AboutHero/AboutHero";
import OurStory from "../src/components/OurStory/OurStory";
import OurNumbers from "../src/components/OurNumbers/OurNmbers";
import OurTeam from "../src/components/OurTeam/OurTeam";
import OurValues from "../src/components/OurValues/OurValues";
import Form from "../src/components/Form/Form";
import Head from "next/head";

const About: React.FC = () =>
	<>
		<Head>
			<title>Boldo | Learn more about us</title>
			<meta name="description"
						content="Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure."
			/>
		</Head>
		<AboutHero/>
		<OurStory/>
		<OurNumbers/>
		<OurTeam/>
		<OurValues/>
		<Form/>
	</>

export default About;