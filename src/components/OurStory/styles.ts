import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	story: css(media({
		padding: ["0px 20px 96px 20px",null,null,null,"0px 20px 65px 20px", "0px 20px 40px 20px"],
		marginTop: "-96px",
	})),
	imageContainer: css(media({
		display: "flex",
		justifyContent: "space-between",
		flexDirection: [null, null, null, null, "column"],
		gap: "15px",
		marginBottom: ["122px", null, null, null, "90px", "50px"],
	})),
	imageBox: css(media({
		flex: ["0 1 300px", null, null, null, "0 0 auto"],
		display: "flex",
		flexDirection: ["column", null, null, null, "row"],
		gap: ["40px", null, null, null, "15px"],
	})),
	smallImage: css(media({
		flex: [null, null, null, null, "0 1 49%"],
		minHeight: ["290px", null, null, null, null, "180px"],
		borderRadius: "24px",
		overflow: "hidden",
	})),
	largeImage: css(media({
		flex: " 0 1 400px",
		minHeight: ["620px", null, null, null, null, "400px"],
		borderRadius: "24px",
		overflow: "hidden",
	})),
	content: css({
		maxWidth: "848px",
		margin: "0 auto",
	}),
	subtitle: css(media({
		textAlign: "left",
		marginBottom: ["12px", null, null, null, "6px"],
	})),
	heading: css(media({
		textAlign: "left",
		marginBottom: ["30px", null, null, null, "12px"],
	})),
	text: css({
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.gray,
	}),
}