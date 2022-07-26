import {css} from '@emotion/react';

export const styles = {
	benefits: css({
		padding: '197px 20px 120px 20px',
	}),
	block: css({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "20px",
		"&:first-child": {
			marginBottom: "120px",
		}
	}),
	firstImage: css({
		flex: "0 1 494px",
		borderRadius: "24px",
		overflow: "hidden",
		'img': {
			width: "100%",
		},
	}),
	list: css({
		display: "flex",
		flexDirection: "column",
		gap: "25px",
		marginTop: "41px",
	}),
	content: css({
		flex: "0 1 493px",
	}),
	secondImage: css({
		flex: "0 1 444px",
		borderRadius: "24px",
		overflow: "hidden",
		'img': {
			width: "100%",
		},
	}),
	button: css({
		width: "210px",
		height: "60px",
		marginTop: "56px",
	}),
};