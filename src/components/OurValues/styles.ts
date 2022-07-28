import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";

export const styles = {
	values: css(media({
		padding: ["123px 20px", null, null, null, "80px 20px", "40px 20px"],
		marginBottom: ["124px", null, null, null, "80px", '40xp'],
		backgroundColor: colors.darkBlue,
		'& > div': {
			maxWidth: "800px",
		}
	})),
	subtitle: css({
		marginBottom: "12px",
		color: colors.white,
		textAlign: "left",
	}),
	heading: css(media({
		marginBottom: ["22px", null, null, null, "14px"],
		color: colors.white,
		textAlign: "left",
	})),
	text: css(media({
		marginBottom: ["72px", null, null, null, "50px", "30px"],
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.white,
	})),
	valuesBox: css(media({
		display: "flex",
		flexDirection: "column",
		gap: ["72px", null, null, null, null, "40px"],
	})),
}