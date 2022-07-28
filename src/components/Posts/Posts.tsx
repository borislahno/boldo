/** @jsxImportSource @emotion/react */
import Container from "../../layout/Container/Container";
import PostItem from "../PostItem/PostItem";
import {styles} from "./styles";
import {typography} from "../../styles/typography";
import {button} from "../../styles/button";

const Posts: React.FC = () =>
	<section css={styles.posts}>
		<Container>
			<h2 css={[typography.headingSecondary,styles.heading]}>Latest news</h2>
			<div css={styles.postsBox}>
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
				<PostItem
					image="/images/blog/posts/02.webp"
					text="Pitch termsheet backing validation focus release."
					avatar="/images/home/blog/04.webp"
					name="Chandler Bing"
				/>
				<PostItem
					image="/images/blog/posts/03.webp"
					text="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
					avatar="/images/home/blog/05.webp"
					name="Rachel Green"
				/>
				<PostItem
					image="/images/home/services/02.webp"
					text="Beta prototype sales iPad gen-z marketing network effects value proposition"
					avatar="/images/home/blog/06.webp"
					name="Monica Geller"
				/>
			</div>
			<a css={[button.btn, button.btnTransparentBorderBlue, styles.button]}>Load more</a>
		</Container>
	</section>

export default Posts;