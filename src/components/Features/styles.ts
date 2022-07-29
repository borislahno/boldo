import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	features: css(media({
		display: "flex",
		flexDirection: ["row", null, null, "column"],
		justifyContent: "space-between",
		alignItems: "center",
		gap: ["30px", null, null, null, null, "45px"],
	})),
}