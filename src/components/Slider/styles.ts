import {css} from '@emotion/react';

export const styles = {
	slider: css({
		overflow: "hidden",
		marginTop: "-45px",
	}),
	path: css({
		position: 'relative',
		display: 'flex',
		gap: '50px',
		transition: 'left 0.4s',
	}),
	buttonBox: css({
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		gap: "28px",
		height: "80px",
		marginBottom: "60px",
	}),
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