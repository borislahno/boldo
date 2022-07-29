import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	header: css(media({
		position: "absolute",
		top: 0,
		left: 0,
		width: '100%',
		minWidth: "375px",
		padding: ['56px 20px 56px 20px', null, null, null, '30px 20px 30px 20px'],
		'& > div': {
			display: "flex",
			justifyContent: 'space-between',
			alignItems: "center",
			maxWidth: "1200px",
		}
	})),
}