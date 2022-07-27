/** @jsxImportSource @emotion/react */
import Container from "../../layout/Container/Container";
import Metric from "../Metric/Metric";
import {styles} from "./styles";
import {typography} from "../../styles/typography";


const OurNumbers: React.FC = () =>
	<section css={styles.numbers}>
		<Container>
			<p css={[typography.subtitle, styles.subtitle]}>Our numbers</p>
			<h2 css={[typography.headingSecondary, styles.heading]}>
				Handshake infographic mass market crowdfunding iteration.
			</h2>
			<div css={styles.metrics}>
				<Metric name="Cool feature title" value="120m"/>
				<Metric name="Cool feature title" value="10.000"/>
				<Metric name="Cool feature title" value="240"/>
			</div>
		</Container>
	</section>

export default OurNumbers;