/** @jsxImportSource @emotion/react */

import {styles} from "./styles";
import Feature from "../Feature/Feature";

const Features: React.FC = () =>
	<div css={styles.features}>
		<Feature
			imageUrl="/images/home/services/01.webp"
			title="Cool feature title"
			text="Learning curve network effects return on investment."/>
		<Feature
			imageUrl="/images/home/services/02.webp"
			title="Even cooler feature"
			text="Learning curve network effects return on investment."/>
		<Feature
			imageUrl="/images/home/services/03.webp"
			title="Cool feature title"
			text="Learning curve network effects return on investment."/>
	</div>

export default Features;