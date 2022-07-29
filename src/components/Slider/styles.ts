import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	slider: css(media({
		overflow: "hidden",
		marginTop: ["-45px", null, null, "50px"],
	})),
	path: css(media({
		position: 'relative',
		display: 'flex',
		gap: '22px',
		transition: 'left 0.4s',
		overflow: [null, null, null, "auto"],
		msOverflowStyle: 'none',
		"&::-webkit-scrollbar": {
			width: 0,
			height: 0,
		}
	})),
	buttonBox: css(media({
		display: ["flex", null, null, "none"],
		justifyContent: "flex-end",
		alignItems: "flex-end",
		gap: "28px",
		height: "80px",
		marginBottom: "60px",
	})),
	button: css({
		'&, &:link, &:visited': {
			flex: "0 0 72px",
			height: "72px",
			borderRadius: "50%",
		},
		'svg': {
			width: "36px",
			height: "39px",
			marginBottom: "-2px",
		},
	}),
}