import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";

export const styles = {
	logo: css({
		display: "flex",
		alignItems: "center",
		gap: '11px',
	}),
	text: css({
		fontFamily: 'Manrope',
		...mixin.font('2.69rem', 700, '2.125rem'),
	})
}