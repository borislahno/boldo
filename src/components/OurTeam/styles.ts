import {css} from "@emotion/react";
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	team: css(media({
		padding: ["98px 20px 120px 20px", null,null,null,"70px 20px 90px 20px","50px 20px 60px 20px"],
		'& > div': {
			maxWidth: "1000px",
		}
	})),
	content: css({
		maxWidth: "799px",
		margin: "0 auto",
	}),
	subtitle: css(media({
		marginBottom: ["12px", null, null, null, "5px"],
		textAlign: "left",
	})),
	heading: css(media({
		marginBottom: ["22px", null, null, null, "5px"],
		textAlign: "left",
	})),
	text: css(media({
		marginBottom: ["60px", null, null, null, "30px"],
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.gray
	})),
	members: css({
		display: "flex",
		justifyContent: "space-between",
		gap: "30px",
		overflow: "auto",
		msOverflowStyle: 'none',
		"&::-webkit-scrollbar": {
			width: 0,
			height: 0,
		}
	}),
}