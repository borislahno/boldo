import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	value: css({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-start",
		gap: "15px",
	}),
	image: css({
		flex: "0 0 150px",
		height: "150px",
		borderRadius: "24px",
		overflow: "hidden",
	}),
	content: css({
		flex: "0 1 600px",
	}),
	name: css({
		marginBottom: "16px",
		...mixin.font("1.75rem", 400, "3rem"),
		color: colors.white,
	}),
	text: css({
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.white,
	}),
}