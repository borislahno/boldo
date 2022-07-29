import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	faq: css(media({
		padding: ["124px 20px 156px 20px", null, null, "90px 20px 125px 20px", "60px 20px 100px 20px", "30px 20px 70px 20px"],
	})),
	imageBox: css(media({
		width: "100%",
		paddingTop: ["33.5%", null, null, null, 0],
		minHeight: [null, null, null, null, '300px'],
		borderRadius: "24px",
		overflow: "hidden",
	})),
	content: css(media({
		display: "flex",
		justifyContent: "space-between",
		flexDirection: [null, null, null, "column"],
		gap: ["15px", null, null, "30px"],
		marginTop: ["56px", null, null, "20px"],
	})),
	title: css(media({
		flex: ["0 1 500px", null, null, "0 0 auto"],
		maxWidth: "700px",
		margin: "0 auto",
		textAlign: [null, null, null, "center"],
	})),
	faqBox: css(media({
		display: "flex",
		flexDirection: "column",
		gap: ["32px", null, null, "18px"],
		flex: ["0 1 500px", null, null, "0 0 auto"],
		margin: "0 auto",
	})),
}
