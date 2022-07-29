/** @jsxImportSource @emotion/react */
import PostItem from "../PostItem/PostItem";
import Container from "../../layout/Container/Container";
import {typography} from "../../styles/typography";
import {styles} from "./styles";
import {button} from "../../styles/button";

const HomeBlog: React.FC = () =>
	<section css={styles.blog}>
		<Container>
			<p css={[typography.subtitle, styles.subtitle]}>Our Blog</p>
			<h2 css={[typography.headingSecondary, styles.heading]}>Value proposition accelerator product management
				venture</h2>
			<div css={styles.postContainer}>
				<PostItem
					image="/images/home/blog/01.webp"
					text="Pitch termsheet backing validation focus release."
					avatar="/images/home/blog/04.webp"
					name="Chandler Bing"
				/>
				<PostItem
					image="/images/home/blog/02.webp"
					text="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
					avatar="/images/home/blog/05.webp"
					name="Rachel Green"
				/>
				<PostItem
					image="/images/home/blog/03.webp"
					text="Beta prototype sales iPad gen-z marketing network effects value proposition"
					avatar="/images/home/blog/06.webp"
					name="Monica Geller"
				/>
			</div>
			<a css={[button.btn, button.btnTransparentBorderBlue, styles.button]}>Load more</a>
		</Container>
	</section>

export default HomeBlog;