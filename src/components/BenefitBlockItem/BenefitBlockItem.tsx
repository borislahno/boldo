/** @jsxImportSource @emotion/react */
import {ReactNode} from "react";
import {styles} from "./styles";

type BenefitBlockItemProps = {
	icon: ReactNode,
	text: string
}

const BenefitBlockItem: React.FC<BenefitBlockItemProps> = ({icon, text}) =>
	<li css={styles.item}>
		{icon}
		{text}
	</li>

export default BenefitBlockItem;