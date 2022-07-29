import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	post: css(media({
		flex: ["0 1 27.3%", null, null, "0 1 46%", null, "0 1 300px"],
		display: "flex",
		flexDirection: "column",
		gap: ["24px",null,null,null,null,"8px"],
		cursor: "pointer",
	})),
	imageBox: css({
		minHeight: "209px",
		borderRadius: "12px",
		overflow: "hidden",
	}),
	content: css({
		display: "flex",
		flexDirection: "column",
		flex: "1 1 auto",
	}),
	head: css(),
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
		flex: "1 1 auto",
		marginTop: ["12px",null,null,null,null,"4px"],
		marginBottom: ["20px",null,null,null,null,"10px"],
		...mixin.font("1.25rem", 400, "2rem"),
		color: colors.black,
	})),
	footer: css({
		display: "flex",
		alignItems: "center",
		gap: "12px",
	}),
	avatar: css({
		flex: "0 0 32px",
		height: "32px",
		borderRadius: "50%",
		overflow: "hidden",
	}),
	name: css({
		...mixin.font("1rem", 400, "1.75rem"),
		color: colors.black,
	}),
}