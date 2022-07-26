import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	item: css({
		display: "flex",
		alignItems: "center",
		gap: '16px',
		width: "500px",
		height: "68px",
		paddingLeft: "22px",
		...mixin.font('1rem', 600, '1.75rem'),
		color: colors.black,
		borderRadius: "4px",
		backgroundColor: colors.white,
		boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.08)',
		transition: 'all 0.2s ease 0s',
		'&:hover': {
			color: colors.white,
			backgroundColor: colors.darkBlue,
		}
	}),
}