import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	item: css({}),
	link: css({
		...mixin.font('1rem', 600, '1.75rem'),
		cursor: "pointer",
		transition: 'all .2s',
		'&:hover, &:active': {
			opacity: 0.7,
		}
	}),
	whiteLink: css({
		color: colors.white,
	}),
	grayLink: css({
		...mixin.font('1.25rem', 400, '2rem'),
		color: colors.gray,
	}),
	darkLink: css({
		color: colors.darkBlue,
	}),
}