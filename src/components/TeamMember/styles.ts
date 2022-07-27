import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {inspect} from "util";
import {colors} from "../../styles/colors";

export const styles = {
	member: css({
		flex: "0 1 300px",
	}),
	image: css({
		minHeight: "354px",
		borderRadius: "24px",
		overflow: "hidden",
	}),
	name: css({
		marginTop: "24px",
		marginBottom: "12px",
		...mixin.font("1.75rem", 400, "3rem"),
		color: colors.black,
	}),
	role: css({
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.gray,
	}),
}