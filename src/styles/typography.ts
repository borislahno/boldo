import {css} from '@emotion/react';
import {mixin} from "./mixin";
import {colors} from "./colors";

export const typography = {
	headingPrimarySmall: css({
		...mixin.font('3rem', 400, '4.5rem'),
		color: colors.white,
	}),
	headingSecondary: css({
		...mixin.font('3rem', 400, '4.5rem'),
		color: colors.black,
		textAlign: "center",
	}),
	headingTertiary: css({
		...mixin.font('2.25rem', 400, '3.5rem'),
		color: colors.black,
	}),
	subtitle: css({
		...mixin.font('1.25rem', 400, '2rem'),
		color: colors.gray,
		textAlign: "center",
	}),
}