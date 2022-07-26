import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";

export const styles = {
	item: css({
		display: "flex",

		gap: "27px",
		...mixin.font('1.25rem', 400, '2rem'),
		color: colors.black,
	}),
	icon: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flex: '0 0 36px',
		height: "36px",
		color: colors.white,
		borderRadius: "50%",
		backgroundColor: colors.darkBlue,
	}),
}