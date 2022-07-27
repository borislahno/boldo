/** @jsxImportSource @emotion/react */
import Container from "../../layout/Container/Container";
import {typography} from "../../styles/typography";
import Value from "../Value/Value";
import {styles} from "./styles";

const OurValues: React.FC = () =>
	<section css={styles.values}>
		<Container>
			<p css={[typography.subtitle, styles.subtitle]}>Our values</p>
			<h2 css={[typography.headingSecondary, styles.heading]}>Things in we believe</h2>
			<p css={styles.text}>
				Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
				iteration. Traction stock user experience deployment beta innovator incubator focus.
			</p>
			<div css={styles.valuesBox}>
				<Value image="/images/about/story/02.webp"
							 name="We are commited."
							 text="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
				/>
				<Value image="/images/home/services/01.webp"
							 name="We are responsible."
							 text="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
				/>
				<Value image="/images/home/services/02.webp"
							 name="We aim for progress."
							 text="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
				/>
			</div>
		</Container>
	</section>

export default OurValues;