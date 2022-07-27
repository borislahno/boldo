import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";

export const styles = {
	testimonial: css({
		flex: "0 0 350px",
		height: "100%",
		padding: "40px",
		backgroundColor: colors.white,
		borderRadius: "12px",
		boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.12)",
	}),
	text: css({
		marginBottom: "40px",
		...mixin.font("1.5rem", 400, "2.25rem"),
		color: colors.black,
	}),
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