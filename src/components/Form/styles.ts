import {css} from '@emotion/react';
import {colors} from "../../styles/colors";
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";

export const styles = {
	formBlock: css(media({
		padding: ["0 20px 84px 20px", null, null, null, "0 20px 55px 20px", "0 20px 30px 20px"],
		'& > div': {
			maxWidth: "1200px",
		}
	})),
	form: css(media({
		position: "relative",
		zIndex: "10",
		width: "100%",
		padding: ["72px 20px 74px 20px", null, null, null, "50px 20px 50px 20px", "30px 20px 30px 20px"],
		backgroundColor: colors.darkBlue,
		borderRadius: "12px",
		overflow: "hidden",
		"::after": {
			content: '""',
			position: "absolute",
			zIndex: "12",
			top: ["-1040px", null, null, null, "-1100px", "-670px"],
			right: ["-600px", null, null, null, "-700px", "-450px"],
			width: ["1293px", null, null, null, null, "800px"],
			height: ["1293px", null, null, null, null, "800px"],
			borderRadius: "50%",
			backgroundColor: colors.lightBlue,
		}
	})),
	heading: css(media({
		position: "relative",
		zIndex: "30",
		maxWidth: "750px",
		margin: ["0 auto 50px auto", null, null, null, null, "0 auto 30px auto"],
		color: colors.white,
	})),
	content: css(media({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: [null, null, null, null, null, "column"],
		gap: "24px",
		maxWidth: ["716px", null, null, null, null, "300px"],
		margin: "0 auto",
	})),
	input: css(media({
		flex: ["0 1 370px", null, null, null, null, "0 0 auto"],
		width: [null, null, null, null, null, "100%"],
		height: ["56px", null, null, null, null, "45px"],
		padding: "12px 15px 12px 32px",
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.black,
		borderRadius: "240px",
		backgroundColor: colors.white,
		"&::placeholder": {
			color: colors.black,
		}
	})),
	button: css(media({
		width: ["210px", null, null, null, null, "160px"],
		height: ["60px", null, null, null, null, "45px"],
	})),
}