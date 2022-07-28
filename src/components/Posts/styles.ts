import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	posts: css(media({
		padding: ["96px 20px 124px 20px", null, null, null, "70px 20px 80px 20px", "50px 20px 60px 20px"],
	})),
	heading: css(media({
		marginBottom: ["40px", null, null, null, "20px"],
		textAlign: ["left", null, null, "center"],
	})),
	postsBox: css(media({
		display: "flex",
		justifyContent: ["space-around", null, null, 'space-between', null, "center"],
		flexWrap: "wrap",
		gap: ["40px", null, null, null, null, "50px"],
		maxWidth: [null, null, null, "650px", null, "none"],
		margin: ["0 auto 96px auto", null, null, null, "0 auto 60px auto"],
	})),
	button: css(media({
		width: ["219px", null, null, null, null, "190px"],
		height: ["60px", null, null, null, null, "50px"],
		margin: "0 auto",
	})),
}