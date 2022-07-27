import {css} from "@emotion/react";
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	team: css({
		padding: "98px 20px 120px 20px",
		'& > div': {
			maxWidth: "1000px",
		}
	}),
	content: css({
		maxWidth: "799px",
		margin: "0 auto",
	}),
	subtitle: css({
		marginBottom: "12px",
		textAlign: "left",
	}),
	heading: css({
		marginBottom: "22px",
		textAlign: "left",
	}),
	text: css({
		marginBottom: "60px",
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.gray
	}),
	members: css({
		display: "flex",
		justifyContent: "space-between",
		gap: "15px",
	}),
}