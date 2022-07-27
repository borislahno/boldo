import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	metric: css(),
	value: css({
		marginBottom: "32px",
		fontFamily: "Manrope",
		...mixin.font("6rem", 400, "3.5rem"),
		color: colors.lightGreen
	}),
	name: css({
		...mixin.font("1.5rem", 400, "2.25rem"),
		color: colors.lightGray
	}),
}