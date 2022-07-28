import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	member: css(media({
		flex: ["0 0 300px", null, null, null, "0 0 200px"],
	})),
	image: css(media({
		minHeight: ["354px", null, null, null, "254px"],
		borderRadius: "24px",
		overflow: "hidden",
	})),
	name: css(media({
		marginTop: ["24px", null, null, null, "12px"],
		marginBottom: ["12px", null, null, null, "0"],
		...mixin.font("1.75rem", 400, "3rem"),
		color: colors.black,
	})),
	role: css({
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.gray,
	}),
}