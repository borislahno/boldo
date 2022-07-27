import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	hero: css({
		padding: "170px 20px 72px 20px",
		"& > div": {
			maxWidth: "1200px",
		}
	}),
	subtitle: css({
		marginBottom: "12px",
	}),
	heading: css({
		marginBottom: "67px",
	}),
	body: css({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "15px",
	}),
	image: css(),
	content: css({
		flex: "0 1 550px"
	}),
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
		marginTop: "12px",
		marginBottom: "20px",
		fontFamily: "Manrope",
		...mixin.font("2.8rem", 400, "4.5rem"),
		color: colors.black,
	}),
	footer: css({
		display: "flex",
		alignItems: "center",
		gap: "12px",
	}),
	avatar: css(),
	name: css({
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.black,
	}),
}