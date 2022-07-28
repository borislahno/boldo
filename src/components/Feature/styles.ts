import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	feature: css(media({
		display: "flex",
		flexDirection: ["column", null, null, "row", null, "column"],
		justifyContent: "center",
		gap: ["24px", null, null, null, null, "15px"],
		flex: ['0 1 300px', null, null, '0 0 auto'],
		width: [null, null, null, "100%", null, "300px"],
	})),
	image: css(media({
		flex: '0 1 300px',
		paddingTop: ['118%', null, null, "300px", null, "350px"],
		borderRadius: '24px',
		overflow: "hidden",
	})),
	content: css(media({
		flex: [null, null, null, '0 1 300px', null, '0 0 auto'],
	})),
	title: css(media({
		marginBottom: ['12px', null, null, null, null, '6px'],
		...mixin.font('1.5rem', 400, '2.25rem'),
		color: colors.black,
	})),
	text: css(media({
		flex: '1 1 auto',
		marginBottom: ['28px', null, null, null, null, '10px'],
		...mixin.font('1.25rem', 400, '2rem'),
		color: colors.gray,
	})),
	button: css(media({
		width: ['164px',null,null,null,null,'145px'],
		height: '36px',
		paddingBottom: '8px',
		'svg': {
			width: "24px",
			height: "26px",
		}
	})),
}