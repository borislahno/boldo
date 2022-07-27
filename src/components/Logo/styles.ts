import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";

export const styles = {
	logo: css({
		display: "inline-flex",
		alignItems: "center",
		gap: '11px',
		cursor: "pointer",
	}),
	text: css({
		fontFamily: 'Manrope',
		...mixin.font('2.69rem', 700, '2.125rem'),
	})
}