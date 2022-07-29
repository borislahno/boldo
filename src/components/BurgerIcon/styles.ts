import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	burgerIcon: css(media({
		position: "absolute",
		zIndex: "100",
		right: "20px",
		display: ["none", null, null, null, "block"],
		width: "42px",
		height: "28px",
		cursor: "pointer",
		"span": {
			position: "absolute",
			top: "13px",
			width: "100%",
			height: "3px",
			backgroundColor: colors.white,
			transition: "all 0.3s ease 0s",
		},
		"&::before, &::after": {
			content: '""',
			position: "absolute",
			left: 0,
			width: "100%",
			height: "3px",
			backgroundColor: colors.white,
			transition: "all 0.3s ease 0s",
		},
		"&::after": {
			top: 0,
		},
		"&::before": {
			bottom: 0,
		}
	})),
	active: css({
		"span": {
			display: "none",
		},
		"&::after": {
			transform: "rotate(45deg)",
			top: "13px",
		},
		"&::before": {
			transform: "rotate(-45deg)",
			bottom: "13px",
		},
	}),
	white: css({
		"span": {
			backgroundColor: colors.white,
		},
		"&::before, &::after": {
			backgroundColor: colors.white,
		}
	}),
	dark: css({
		"span": {
			backgroundColor: colors.darkBlue,
		},
		"&::before, &::after": {
			backgroundColor: colors.darkBlue,
		}
	}),
}
