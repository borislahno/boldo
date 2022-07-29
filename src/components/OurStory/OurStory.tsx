/** @jsxImportSource @emotion/react */
import {styles} from "./styles";
import Container from "../../layout/Container/Container";
import {utils} from "../../styles/utils";
import {typography} from "../../styles/typography";

const OurStory: React.FC = () =>
	<section css={styles.story}>
		<Container>
			<div css={styles.imageContainer}>
				<div css={styles.imageBox}>
					<div css={[utils.iad, styles.smallImage]}>
						<img src="/images/about/story/01.webp" alt="A man is talking on the phone"/>
					</div>
					<div css={[utils.iad, styles.smallImage]}>
						<img src="/images/about/story/02.webp" alt="A man with bunch of papers"/>
					</div>
				</div>
				<div css={[utils.iad, styles.largeImage]}>
					<img src="/images/about/story/03.webp" alt="A woman is talking on the phone"/>
				</div>
				<div css={styles.imageBox}>
					<div css={[utils.iad, styles.smallImage]}>
						<img src="/images/home/services/01.webp" alt="A person walking with a phone in his hands"/>
					</div>
					<div css={[utils.iad, styles.smallImage]}>
						<img src="/images/about/story/04.webp" alt="People at the laptop"/>
					</div>
				</div>
			</div>
			<div css={styles.content}>
				<p css={[typography.subtitle, styles.subtitle]}>Our story</p>
				<h2 css={[typography.headingSecondary, styles.heading]}>Handshake infographic mass market crowdfunding
					iteration.</h2>
				<p css={styles.text}>
					Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
					iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience
					branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve
					network effects return on investment bootstrapping business-to-consumer.
				</p>
			</div>
		</Container>
	</section>

export default OurStory;