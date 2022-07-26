import type {NextPage} from 'next'
import HomeHero from "../src/components/HomeHero/HomeHero";
import OurService from "../src/components/OurService/OurService";
import Testimonials from "../src/components/Testimonials/Testimonials";

const Home: NextPage = () =>
	<>
		<HomeHero/>
		<OurService/>
		<Testimonials/>
	</>

export default Home
