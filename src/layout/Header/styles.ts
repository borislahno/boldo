import {css} from '@emotion/react';

export const styles = {
	header: css({
		position: "absolute",
		top: 0,
		left: 0,
		width: '100%',
		padding: '56px 20px 56px 20px',
		'& > div': {
			display: "flex",
			justifyContent: 'space-between',
			alignItems: "center",
		}
	}),
}