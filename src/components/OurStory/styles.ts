import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	story: css({
		padding: "0px 20px 96px 20px",
		marginTop: "-96px",
	}),
	imageContainer: css({
		display: "flex",
		justifyContent: "space-between",
		gap: "15px",
		marginBottom: "122px",
	}),
	imageBox: css({
		flex: " 0 1 300px",
		display: "flex",
		flexDirection: "column",
		gap: "40px",
	}),
	smallImage: css({
		minHeight: "290px",
		borderRadius: "24px",
		overflow: "hidden",
	}),
	largeImage: css({
		flex: " 0 1 400px",
		minHeight: "620px",
		borderRadius: "24px",
		overflow: "hidden",
	}),
	content: css({
		maxWidth: "848px",
		margin: "0 auto",
	}),
	subtitle: css({
		textAlign: "left",
		marginBottom: "12px",
	}),
	heading: css({
		textAlign: "left",
		marginBottom: "30px",
	}),
	text: css({
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.gray,
	}),
}