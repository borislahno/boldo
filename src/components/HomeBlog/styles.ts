import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	blog: css(media({
		padding: ["0 20px 124px 20px",null,null,null,"0 20px 90px 20px", "0 20px 50px 20px"],
	})),
	subtitle: css({
		marginBottom: "12px",
	}),
	heading: css(media({
		maxWidth: "900px",
		margin: ["0 auto 77px auto", null, null, null,"0 auto 50px auto","0 auto 20px auto"],
	})),
	postContainer: css(media({
		display: "flex",
		justifyContent: ["space-around", null, null, 'space-between', null, "center"],
		flexWrap: [null, null, null, "wrap"],
		gap: ["40px", null, null, null, null, "50px"],
		maxWidth: [null, null, null, "650px", null, "none"],
		margin: ["0 auto 84px auto", null, null, null, "0 auto 55px auto"],
	})),
	button: css(media({
		width: ["219px",null,null,null,null,"190px"],
		height: ["60px",null,null,null,null,"50px"],
		margin: "0 auto",
	})),
}