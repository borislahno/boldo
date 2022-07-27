import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";

export const styles = {
	hero: css({
		padding: "155px 20px 166px 20px",
		backgroundColor: colors.darkBlue,
	}),
	subtitle: css({
		marginBottom: "12px",
		color: colors.white,
	}),
	heading: css({
		maxWidth: "842px",
		margin: "0 auto 17px auto"
	}),
	text: css({
		maxWidth: "745px",
		margin: "0 auto",
		...mixin.font('1rem', 400, '1.75rem'),
		color: colors.white,
		textAlign: "center",
	}),
}