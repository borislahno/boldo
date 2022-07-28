import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";

export const styles = {
	hero: css(media({
		padding: ["155px 20px 166px 20px", null, null, null, "135px 20px 166px 20px", "120px 20px 166px 20px"],
		backgroundColor: colors.darkBlue,
	})),
	subtitle: css(media({
		marginBottom: ["12px", null, null, null, "8px", "4px"],
		color: colors.white,
	})),
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