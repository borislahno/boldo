import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	numbers: css(media({
		padding: ["94px 20px 96px 20px",null,null,null,"60px 20px 65px 20px","40px 20px 45px 20px"],
		backgroundColor: colors.darkBlue,
		'& > div': {
			maxWidth: "1000px",
		}
	})),
	subtitle: css(media({
		marginBottom: ["12px",null,null,null,"6px"],
		color: colors.lightGray,
	})),
	heading: css(media({
		marginBottom: ["82px",null,null,null,"60px","40px"],
		color: colors.white,
	})),
	metrics: css(media({
		display: "flex",
		justifyContent: "space-between",
		flexDirection: [null, null, null, "column"],
		alignItems: "center",
		gap: ["20px",null,null,"70px","50px","30px"],
	})),
}