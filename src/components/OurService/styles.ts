import {css} from '@emotion/react';
import {media} from "../../styles/breakpoints";

export const styles = {
	service: css(media({
		padding: ['82px 20px 120px 20px', null, null, null, '40px 20px 80px 20px','40px 20px 40px 20px'],
	})),
	heading: css(media({
		maxWidth: '842px',
		margin: ['12px auto 78px auto', null, null, null, '12px auto 40px auto'],
	})),
}