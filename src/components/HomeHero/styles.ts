import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";

export const styles = {
	hero: css(media({
		padding: ['162px 20px 64px 20px', null, null, null, '110px 20px 64px 20px', '110px 20px 40px 20px'],
		backgroundColor: colors.darkBlue,
		'& > div': {
			maxWidth: "1200px",
		}
	})),
	main: css(media({
		display: 'flex',
		flexDirection: ["row", null, null, "column"],
		justifyContent: 'space-between',
		alignItems: "center",
		gap: '20px',
	})),
	content: css(media({
		flex: ["0 1 573px", null, null, "0 1 auto"],
		maxWidth: [null, null, null, "700px"],
		margin: [null, null, null, "0 auto"],
	})),
	imageBox: css(media({
		display: [null, null, null, "none"],
		flex: "0 1 494px",
		'img': {
			width: '100%',
		}
	})),
	heading: css({
		marginBottom: '16px',
	}),
	text: css(media({
		marginBottom: ["40px", null, null, null, null, "20px"],
		...mixin.font('1rem', 400, '1.75rem'),
		color: colors.lightGray,
	})),
	buttons: css({
		display: "flex",
		gap: '24px',
	}),
	buy: css(media({
		width: ['247px', null, null, null, null, "170px"],
		height: ['60px', null, null, null, null, "50px"],
	})),
	explore: css(media({
		width: ['187px', null, null, null, null, "130px"],
		height: ['60px', null, null, null, null, "50px"],
	})),
	logoBox: css(media({
		position: 'relative',
		display: "flex",
		gap: ['67px', null, null, null, null, "30px"],
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
	})),
}