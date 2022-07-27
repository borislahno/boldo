import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";

export const styles = {
	formBlock: css({
		padding: "0 20px 84px 20px",
		'& > div': {
			maxWidth: "1200px",
		}
	}),
	form: css({
		width: "100%",
		padding: "72px 20px 74px 20px",
		backgroundColor: colors.darkBlue
	}),
	heading: css({
		maxWidth: "716px",
		margin: "0 auto 50px auto",
		color: colors.white,
	}),
	content: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "24px",
		maxWidth: "716px",
		margin: "0 auto",
	}),
	input: css({
		flex: "0 1 370px",
		height: "56px",
		padding: "12px 15px 12px 32px",
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.black,
		borderRadius: "240px",
		backgroundColor: colors.white,
		"&::placeholder": {
			color: colors.black,
		}
	}),
	button: css({
		width: "210px",
		height: "60px",
	}),
}