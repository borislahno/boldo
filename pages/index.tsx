import type {NextPage} from 'next'
import HomeHero from "../src/components/HomeHero/HomeHero";
import OurService from "../src/components/OurService/OurService";
import Testimonials from "../src/components/Testimonials/Testimonials";
import FAQ from "../src/components/FAQ/FAQ";
import HomeBlog from "../src/components/HomeBlog/HomeBlog";
import Form from "../src/components/Form/Form";

const Home: NextPage = () =>
	<>
		<HomeHero/>
		<OurService/>
		<Testimonials/>
		<FAQ/>
		<HomeBlog/>
		<Form/>
	</>

export default Home
