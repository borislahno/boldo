import {css} from '@emotion/react';
import {mixin} from "./mixin";
import {colors} from "./colors";
import {media} from "./breakpoints";

export const typography = {
	headingPrimarySmall: css(media({
		fontFamily: "Manrope",
		...mixin.font(['3rem', null, null, null, '2.5rem'], 400, ['4.5rem', null, null, null, '3rem']),
		color: colors.white,
	})),
	headingPrimaryLarge: css(media({
		fontFamily: "Manrope",
		...mixin.font(['4rem', null, null, null, "3.1rem", "2.6rem"], 400, ['5.25rem', null, null, null, "3.75rem", "3rem"]),
		color: colors.white,
		textAlign: "center",
	})),
	headingSecondary: css(media({
		fontFamily: "Manrope",
		...mixin.font(['3rem', null, null, null, "2rem", "1.7rem"], 400, ['4.5rem', null, null, null, "3.5rem", "2.5rem"]),
		color: colors.black,
		textAlign: "center",
	})),
	headingTertiary: css(media({
		...mixin.font(['2.25rem', null, null, null, '1.7rem', '1.5rem'], 400, ['3.5rem', null, null, null, "2.8rem", "2.5rem"]),
		color: colors.black,
	})),
	subtitle: css({
		...mixin.font(['1.25rem', null, null, null, null, "1rem"], 400, ['2rem', null, null, null, null, "1.5rem"]),
		color: colors.gray,
		textAlign: "center",
	}),
}