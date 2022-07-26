import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	feature: css({
		display: "flex",
		flexDirection: "column",
		flex: '0 1 300px',
	}),
	image: css({
		borderRadius: '24px',
		overflow: "hidden",
		paddingTop: '118%',
	}),
	title: css({
		marginTop: '24px',
		marginBottom: '12px',
		...mixin.font('1.5rem', 400, '2.25rem'),
		color: colors.black,
	}),
	text: css({
		flex: '1 1 auto',
		marginBottom: '28px',
		...mixin.font('1.25rem', 400, '2rem'),
		color: colors.gray,
	}),
	button: css({
		width: '164px',
		height: '36px',
		paddingBottom: '8px',
		'svg': {
			width: "24px",
			height: "26px",
		}
	}),
}