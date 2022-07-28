import {css} from '@emotion/react';
import {mixin} from "./mixin";
import {colors} from "./colors";


export const button = {
	btn: css({
		'&, &:link, &:visited': {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			...mixin.font("1.25rem", 700, "1.75rem"),
			borderRadius: '56px',
			cursor: 'pointer',
			transition: 'all 0.3s ease 0s',
		},
		'&:hover': {
			opacity: 0.95,
			transform: 'translateY(-3px)',
		},
		'&:active': {
			transform: 'translateY(0)',
		}
	}),
	btnWhite: css({
		'&, &:link, &:visited': {
			color: colors.darkBlue,
			borderRadius: '24px',
			backgroundColor: colors.white,
		},
	}),
	btnGreen: css({
		'&, &:link, &:visited': {
			color: colors.darkBlue,
			backgroundColor: colors.lightGreen,
			border: `border: 2px solid ${colors.lightGreen1}`,
		},
	}),
	btnTransparentBorderWhite: css({
		'&, &:link, &:visited': {
			color: colors.white,
			backgroundColor: "transparent",
			border: `2px solid ${colors.white}`,
		},
	}),
	btnTransparentBorderBlue: css({
		'&, &:link, &:visited': {
			color: colors.darkBlue,
			backgroundColor: "transparent",
			border: `2px solid ${colors.darkBlue}`,
		},
	}),
	btnLink: css({
		'&, &:link, &:visited': {
			justifyContent: "space-between",
			lineHeight: '2.25rem',
			color: colors.darkBlue,
			borderRadius: '0px',
			borderBottom: `1px solid ${colors.darkBlue}`,
			backgroundColor: 'transparent'
		},
		'&:hover': {
			color: colors.white,
			backgroundColor: colors.darkBlue,
		}
	}),
	btnBlue: css({
		color: colors.white,
		backgroundColor: colors.darkBlue,
	})
}