import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	value: css(media({
		display: "flex",
		justifyContent: "space-between",
		flexDirection: [null, null, null, null, null, "column"],
		alignItems: ["flex-start", null, null, null, null, "center"],
		gap: ["15px", null, null, null, null, "7px"],
	})),
	image: css(media({
		flex: ["0 0 150px", null, null, null, null, "0 0 auto"],
		width: [null, null, null, null, null, "150px"],
		height: "150px",
		borderRadius: "24px",
		overflow: "hidden",
	})),
	content: css(media({
		flex: ["0 1 600px", null, null, null, null, "0 0 auto"],
		maxWidth: [null, null, null, null, null, "350px"],
	})),
	name: css(media({
		marginBottom: ["16px", null, null, null, "0"],
		...mixin.font(["1.75rem", null, null, null, "1.5rem"], 400, ["3rem", null, null, null, "2.5rem"]),
		color: colors.white,
		textAlign: [null, null, null, null, null, "center"]
	})),
	text: css(media({
		...mixin.font(["1.25rem", null, null, null, "1rem"], 400, ["2rem", null, null, null, "1.5rem"]),
		color: colors.white,
		textAlign: [null,null,null,null,null,"center"],
	})),
}