import BlogHero from "../src/components/BlogHero/BlogHero";
import Posts from "../src/components/Posts/Posts";
import Form from "../src/components/Form/Form";
import Head from "next/head";

const Blog: React.FC = () =>
	<>
		<Head>
			<title>Boldo | Learn something new with us</title>
			<meta name="description"
						content="Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure."
			/>
		</Head>
		<BlogHero/>
		<Posts/>
		<Form/>
	</>

export default Blog;