import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {media} from "../../styles/breakpoints";

export const styles = {
	navigation: css(media({
		display: [null, null, null, null, 'none'],
	})),
	list: css({
		display: "flex",
		alignItems: "center",
		gap: '40px',
	}),
	button: css({
		width: '128px',
		height: '40px',
		...mixin.font("1rem", 700, "1.5rem"),
	}),
}