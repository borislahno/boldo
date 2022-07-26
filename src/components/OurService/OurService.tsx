/** @jsxImportSource @emotion/react */
import Container from "../../layout/Container/Container";
import {styles} from "./styles";
import {typography} from "../../styles/typography";
import Features from "../Features/Features";
import Benefits from "../Benefits/Benefits";


const OurService: React.FC = () =>
	<section css={styles.service}>
		<Container>
			<p css={typography.subtitle}>Our Services</p>
			<h2 css={[typography.headingSecondary, styles.heading]}>
				Handshake infographic mass market crowdfunding iteration.
			</h2>
			<Features/>
			<Benefits/>
		</Container>
	</section>

export default OurService;