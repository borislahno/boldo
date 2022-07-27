/** @jsxImportSource @emotion/react */
import ChevronDown from '/public/icons/chevron-down.svg';
import {styles} from "./styles";

type FAQItemProps = {
	title: string,
}

const FAQItem: React.FC<FAQItemProps> = ({title}) => {

	return (
		<div css={styles.item}>
			<p css={styles.title}>
				{title}
			</p>
			<div css={styles.icon}>
				<ChevronDown/>
			</div>
		</div>
	);
}

export default FAQItem;