import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	testimonials: css(media({
		padding: ['96px 20px',null,null,null,'70px 20px','50px 20px'],
		backgroundColor: colors.darkBlue,
	})),
	heading: css({
		maxWidth: "740px",
		color: colors.white,
		textAlign: "left",
	}),
}