import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	metric: css(media({
		display: "flex",
		flexDirection: "column",
		alignItems: [null, null, null, "center"],
		gap: ["32px", null, null, null, "10px","0px"],
	})),
	value: css(media({
		fontFamily: "Manrope",
		...mixin.font(["6rem", null, null, null, "4rem","3rem"], 400, "3.5rem"),
		color: colors.lightGreen,
	})),
	name: css(media({
		...mixin.font(["1.5rem", null, null, null, "1.3rem","1rem"], 400, ["2.25rem", null, null, null, "1.9rem","1.5rem"]),
		color: colors.lightGray,
	})),
}