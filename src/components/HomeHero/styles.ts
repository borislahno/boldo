import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";

export const styles = {
	hero: css({
		padding: '162px 20px 64px 20px',
		backgroundColor: colors.darkBlue,
		'& > div': {
			maxWidth: "1200px",
		}
	}),
	main: css({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: "center",
		gap: '10px',
	}),
	content: css({
		flex: "0 1 573px",
	}),
	imageBox: css({
		flex: "0 1 494px",
		'img': {
			width: '100%',
		}
	}),
	heading: css({
		marginBottom: '16px',
	}),
	text: css({
		marginBottom: "40px",
		...mixin.font('1rem', 400, '1.75rem'),
		color: colors.lightGray,
	}),
	buttons: css({
		display: "flex",
		gap: '24px',
	}),
	logoBox: css({
		position: 'relative',
		display: "flex",
		gap: '67px',
		marginTop: "70px",
		overflow: 'hidden',
		'&::before': {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(90deg, #0A2640 0%, rgba(10, 38, 64, 0.109375) 31.6%, rgba(10, 38, 64, 0) 72.89%, #0A2640 97.87%)',
		}
	}),
}