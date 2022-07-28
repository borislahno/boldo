import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	hero: css(media({
		padding: ["170px 20px 0px 20px", null, null, null, "140px 20px 0px 20px", "110px 20px 0px 20px"],
		"& > div": {
			maxWidth: "1200px",
		}
	})),
	subtitle: css({
		marginBottom: "12px",
		color: colors.darkBlue,
	}),
	heading: css(media({
		marginBottom: ["67px", null, null, null, "40px", "30px"],
		color: colors.darkBlue,
	})),
	body: css(media({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: [null, null, null, "column"],
		maxWidth: [null, null, null, "600px"],
		margin: "0 auto",
		paddingBottom: ["72px", null, null, null, null, '45px'],
		gap: "25px",
		borderBottom: `1px solid ${colors.darkBlue}`,
	})),
	image: css(media({
		flex: ["0 1 550px", null, null, "0 0 auto"],
		width: [null, null, null, "100%"],
		minHeight: ["386px", null, null, null, null, 'auto'],
		paddingTop: [null, null, null, null, null, "70%"],
		borderRadius: "24px",
		overflow: "hidden",
	})),
	content: css(media({
		flex: ["0 1 550px", null, null, "0 0 auto"],
	})),
	category: css({
		marginRight: "12px",
		...mixin.font("1rem", 700, "1.75rem"),
		color: colors.darkBlue,
	}),
	date: css({
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.gray,
	}),
	text: css(media({
		marginTop: "12px",
		marginBottom: "20px",
		fontFamily: "Manrope",
		...mixin.font(["2.8rem", null, "2.5rem", "2.3rem", null, "2rem"], 400, ["4.5rem", null, "4rem", null, null, "3rem"]),
		color: colors.black,
	})),
	footer: css({
		display: "flex",
		alignItems: "center",
		gap: "12px",
	}),
	avatar: css({
		width: "32px",
		height: "32px",
		borderRadius: "50%",
		overflow: "hidden",
	}),
	name: css({
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.black,
	}),
}