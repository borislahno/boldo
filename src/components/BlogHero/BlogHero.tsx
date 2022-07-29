/** @jsxImportSource @emotion/react */
import {styles} from "./styles";
import {typography} from "../../styles/typography";
import Container from "../../layout/Container/Container";
import {utils} from "../../styles/utils";

const BlogHero: React.FC = () =>
	<section css={styles.hero}>
		<Container>
			<p css={[typography.subtitle, styles.subtitle]}>Blog</p>
			<h1 css={[typography.headingPrimaryLarge, styles.heading]}>Thoughts and words</h1>
			<div css={styles.body}>
				<div css={[utils.iad, styles.image]}>
					<img src="/images/blog/hero/01.webp" alt="Bird and houses"/>
				</div>
				<div css={styles.content}>
					<span css={styles.category}>Category</span>
					<span css={styles.date}>November 22, 2021</span>
					<p css={styles.text}>Pitch termsheet backing validation focus release.</p>
					<div css={styles.footer}>
						<div css={[utils.iad, styles.avatar]}>
							<img src="/images/home/blog/04.webp" alt="Chandler Bing"/>
						</div>
						<p css={styles.name}>Chandler Bing</p>
					</div>
				</div>
			</div>
		</Container>
	</section>

export default BlogHero;