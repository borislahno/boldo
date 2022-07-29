/** @jsxImportSource @emotion/react */

import Check from '/public/icons/check.svg';
import {styles} from "./styles";

type BenefitListItemProps = {
	name: string,
}

const BenefitListItem: React.FC<BenefitListItemProps> = ({name}) =>
	<li css={styles.item}>
		<div css={styles.icon}>
			<Check/>
		</div>
		{name}
	</li>

export default BenefitListItem;