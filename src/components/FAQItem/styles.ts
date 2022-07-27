import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	item: css({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "15px",
		paddingBottom: "16px",
		borderBottom: `1px solid ${colors.lightGray1}`,
	}),
	title: css({
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.black,
	}),
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
