import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	post: css({
		flex: "0 1 300px",
		display: "flex",
		flexDirection: "column",
		gap: "24px",
	}),
	imageBox: css({
		minHeight: "209px",
		borderRadius: "12px",
		overflow: "hidden",
	}),
	content: css({
		display: "flex",
		flexDirection: "column",
		flex:"1 1 auto",
	}),
	head: css(),
	category: css({
		marginRight: "12px",
		...mixin.font("1rem", 700, "1.75rem"),
		color: colors.darkBlue,
	}),
	date: css({
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.gray,
	}),
	text: css({
		flex: "1 1 auto",
		marginTop: "12px",
		marginBottom: "20px",
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.black,
	}),
	footer: css({
		display: "flex",
		alignItems: "center",
		gap: "12px",
	}),
	avatar: css({
		flex: "0 0 32px",
		height: "32px",
		borderRadius: "50%",
		overflow: "hidden",
	}),
	name: css({
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.black,
	}),
}