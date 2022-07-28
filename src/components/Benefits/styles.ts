import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	benefits: css(media({
		paddingTop: ['197px', null, null, '80px'],
	})),
	block: css(media({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: [null, null, null, "column"],
		gap: "30px",
		"&:first-of-type": {
			marginBottom: ["120px", null, null, "35px"],
		}
	})),
	firstImage: css(media({
		flex: ["0 1 494px", null, null, "0 0 auto"],
		order: [null, null, null, 2],
		borderRadius: "24px",
		overflow: "hidden",
		'img': {
			width: "100%",
		},
	})),
	list: css(media({
		display: "flex",
		flexDirection: "column",
		gap: ["25px", null, null, null, null, "18px"],
		marginTop: ["41px", null, null, null, "20px"],
	})),
	content: css(media({
		flex: ["0 0 493px", null, null, "0 0 auto"],
		order: [null, null, null, 1],
		maxWidth: [null, null, null, "600px"],
	})),
	secondImage: css(media({
		flex: ["0 1 444px", null, null, "0 0 auto"],
		order: [null, null, null, 2],
		borderRadius: "24px",
		overflow: "hidden",
		'img': {
			width: "100%",
		},
	})),
	button: css(media({
		width: ["210px", null, null, null, "190px"],
		height: ["60px", null, null, null, "50px"],
		marginTop: ["56px", null, null, null, "28px"],
	})),
};