import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	footer: css({
		padding: "100px 20px 117px 20px",
		'& > div': {
			display: "flex",
			justifyContent: "space-between",
			gap: "30px",
			maxWidth: "1200px",
		}
	}),
	content: css({
		flex: "0 1 300px",
	}),
	text: css({
		marginTop: "40px",
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.gray
	}),
	rights: css({
		marginTop: "64px",
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.gray
	}),
	navigation: css({
		flex: "0 1 721px",
		display: "flex",
		justifyContent: "space-around",
		gap: "20px",
	}),
	list: css({
		display: "flex",
		flexDirection: "column",
		gap: "40px",
		width: "155px",
	}),
	hiring: css({
		display: "inline-flex",
		justifyContent: "center",
		alignItems: "center",
		width: "72px",
		height: "30px",
		marginLeft: "5px",
		...mixin.font("0.8rem", 700, "1.75rem"),
		color: colors.darkBlue,
		borderRadius: "120px",
		backgroundColor: colors.lightGreen,
	}),
}