/** @jsxImportSource @emotion/react */

import {styles} from "./styles";

type BurgerIconProps = {
	active: boolean,
	onClick: () => void,
	mode: 'white' | 'dark',
}

const BurgerIcon: React.FC<BurgerIconProps> = ({active, onClick,mode}) =>
	<div css={[styles.burgerIcon,styles[mode], active ? styles.active : null]} onClick={onClick}>
		<span></span>
	</div>


export default BurgerIcon;