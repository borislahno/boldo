import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";
import {colors} from "../../styles/colors";

export const styles = {
	navigation: css(media({
		position: ["relative", null, null, null, "fixed"],
		top: [null, null, null, null, 0],
		left: [null, null, null, null, "-40%", "-55%"],
		zIndex: "100",
		width: [null, null, null, null, "200px"],
		height: ["50px", null, null, null, "100%"],
		padding: [null, null, null, null, "120px 0 30px 0"],
		backgroundColor: [null, null, null, null, colors.lightBlue],
		opacity: [null, null, null, null, 0],
		transition: [null, null, null, null, "left,opacity 0.5s ease 0s"],
	})),
	active: css({
		left: "0 !important",
		opacity: "1 !important",
	}),
	white: css(media({
		backgroundColor: [null, null, null, null, colors.lightBlue],
	})),
	dark: css(media({
		backgroundColor: [null, null, null, null, colors.lightGray],
	})),
	list: css(media({
		display: ["flex", null, null, null, 'none'],
		flexDirection: ["flex", null, null, null, 'column'],
		alignItems: "center",
		gap: '40px',
		height: "100%",
		overflow: "auto",
		msOverflowStyle: 'none',
		"&::-webkit-scrollbar": {
			width: 0,
			height: 0,
		}
	})),
	button: css({
		width: '128px',
		height: '40px',
		...mixin.font("1rem", 700, "1.5rem"),
	}),
}