import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	item: css({}),
	whiteLink: css({
		...mixin.font('1rem', 600, '1.75rem'),
		color: colors.white,
		cursor: "pointer",
		transition: 'all .2s',
		'&:hover, &:active': {
			opacity: 0.7,
		}
	}),
	grayLink: css({}),
}