import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";

export const styles = {
	name: css({
		marginBottom: "32px",
		...mixin.font('1.25rem', 700, '2rem'),
		color: colors.black,
	})
}