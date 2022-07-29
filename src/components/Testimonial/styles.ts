import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";

export const styles = {
	testimonial: css(media({
		display: "flex",
		flexDirection: "column",
		flex: ["0 0 350px", null, null, null, null, "0 0 300px"],
		height: ["100%", null, null, null, null, "auto"],
		padding: ["40px", null, null, null, null, "20px"],
		backgroundColor: colors.white,
		borderRadius: "12px",
		boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.12)",
	})),
	text: css(media({
		flex: "1 1 auto",
		marginBottom: ["40px", null, null, null, null, "20px"],
		...mixin.font("1.5rem", 400, "2.25rem"),
		color: colors.black,
	})),
	footer: css({
		display: "flex",
		alignItems: "center",
		gap: "16px",
	}),
	avatar: css({
		flex: "0 0 58px",
		height: "58px",
		borderRadius: "50%",
		overflow: "hidden",
	}),
	name: css({
		...mixin.font("1rem", 700, "2rem"),
		color: colors.darkBlue,
	}),
	role: css({
		...mixin.font("0.875rem", 400, "2rem"),
		color: colors.darkBlue,
	}),
}