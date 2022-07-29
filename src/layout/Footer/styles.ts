import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	footer: css(media({
		padding: ["100px 20px 117px 20px",null,null,"50px 20px 60px 20px"],
		'& > div': {
			display: "flex",
			flexDirection:['row',null,null,null,"column"],
			justifyContent: "space-between",
			gap: ["30px",null,null,null,null,"20px"],
			maxWidth: "1200px",
		}
	})),
	content: css(media({
		flex: ["0 1 300px",null,null,null,"0 0 auto"],
	})),
	text: css(media({
		marginTop: ["40px",null,null,"25px"],
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.gray
	})),
	rights: css(media({
		marginTop: ["64px",null,null,"40px",null,"20px"],
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.gray
	})),
	navigation: css(media({
		flex: ["0 1 721px",null,null,null,"0 0 auto"],
		display: "flex",
		justifyContent: ["space-around",null,null,null,null,"space-between"],
		gap: "20px",
	})),
	list: css(media({
		display: "flex",
		flexDirection: "column",
		gap: ["40px",null,null,"25px",null,"15px"],
		width: ["155px",null,null,"auto"],
	})),
	hiring: css(media({
		display: "inline-flex",
		justifyContent: "center",
		alignItems: "center",
		width: ["72px",null,null,null,null,"50px"],
		height: ["30px",null,null,null,null,"25px"],
		marginLeft: "5px",
		...mixin.font("0.8rem", 700, "1.75rem"),
		color: colors.darkBlue,
		borderRadius: "120px",
		backgroundColor: colors.lightGreen,
	})),
}