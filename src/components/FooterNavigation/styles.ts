import {css} from '@emotion/react';
import {mixin} from "../../styles/mixin";
import {colors} from "../../styles/colors";
import {media} from "../../styles/breakpoints";

export const styles = {
	name: css(media({
		marginBottom: ["32px",null,null,null,null,"18px"],
		...mixin.font('1.25rem', 700, '2rem'),
		color: colors.black,
	})),
}