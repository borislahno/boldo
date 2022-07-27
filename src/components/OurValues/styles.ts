import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";

export const styles = {
	values: css({
		padding: "123px 20px",
		marginBottom: "124px",
		backgroundColor: colors.darkBlue,
		'& > div': {
			maxWidth: "800px",
		}
	}),
	subtitle: css({
		marginBottom: "12px",
		color: colors.white,
		textAlign: "left",
	}),
	heading: css({
		marginBottom: "22px",
		color: colors.white,
		textAlign: "left",
	}),
	text: css({
		marginBottom: "72px",
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.white,
	}),
	valuesBox: css({
		display: "flex",
		flexDirection: "column",
		gap: "72px",
	}),
}