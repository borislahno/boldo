/** @jsxImportSource @emotion/react */
import Container from "../../layout/Container/Container";
import {styles} from "./styles";
import {typography} from "../../styles/typography";

const AboutHero: React.FC = () =>
	<section css={styles.hero}>
		<Container>
			<p css={[typography.subtitle,styles.subtitle]}>About</p>
			<h1 css={[typography.headingPrimaryLarge, styles.heading]}>We love to make great things, things that matter.</h1>
			<p css={styles.text}>
				Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success
				deployment non-disclosure.
			</p>
		</Container>
	</section>

export default AboutHero;