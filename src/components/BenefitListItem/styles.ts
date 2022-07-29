import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";

export const styles = {
	item: css(media({
		display: "flex",
		gap: ["27px", null, null, null, null, "14px"],
		...mixin.font(['1.25rem', null, null, null, null, '1rem'], 400, ['2.3rem', null, null, null, null, '1.8rem']),
		color: colors.black,
	})),
	icon: css(media({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flex: ['0 0 36px', null, null, null, null, '0 0 30px'],
		height: ['36px', null, null, null, null, '30px'],
		color: colors.white,
		borderRadius: "50%",
		backgroundColor: colors.darkBlue,
	})),
}