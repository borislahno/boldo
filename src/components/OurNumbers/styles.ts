import {css} from '@emotion/react';
import {colors} from "../../styles/colors";

export const styles = {
	numbers: css({
		padding: "94px 20px 96px 20px",
		backgroundColor: colors.darkBlue,
		'& > div': {
			maxWidth: "1000px",
		}
	}),
	subtitle: css({
		marginBottom: "12px",
		color: colors.lightGray,
	}),
	heading: css({
		marginBottom: "82px",
		color: colors.white,
	}),
	metrics: css({
		display: "flex",
		justifyContent: "space-between",
		gap: "20px",
	}),
}