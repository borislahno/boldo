import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	item: css(media({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "15px",
		paddingBottom: ["16px", null, null, null, null, "8px"],
		borderBottom: `1px solid ${colors.lightGray1}`,
	})),
	title: css(media({
		...mixin.font(["1.25rem", null, null, null, null, "1rem"], 400, ["2rem", null, null, null, null, "1.7rem"]),
		color: colors.black,
	})),
	icon: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "28px",
		height: "28px",
		color: colors.white,
		borderRadius: "50%",
		backgroundColor: colors.darkBlue,
		'svg': {
			marginTop: "2px",
		}
	}),
}
