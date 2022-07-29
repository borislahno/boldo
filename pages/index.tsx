import type {NextPage} from 'next'
import HomeHero from "../src/components/HomeHero/HomeHero";
import OurService from "../src/components/OurService/OurService";
import Testimonials from "../src/components/Testimonials/Testimonials";
import FAQ from "../src/components/FAQ/FAQ";
import HomeBlog from "../src/components/HomeBlog/HomeBlog";
import Form from "../src/components/Form/Form";
import Head from "next/head";

const Home: NextPage = () =>
	<>
		<Head>
			<title>Boldo | Save your time</title>
			<meta name="description"
						content="Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure."
			/>
		</Head>
		<HomeHero/>
		<OurService/>
		<Testimonials/>
		<FAQ/>
		<HomeBlog/>
		<Form/>
	</>

export default Home
