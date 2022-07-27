/** @jsxImportSource @emotion/react */
import {styles} from "./styles";
import {utils} from "../../styles/utils";

type ValueProps = {
	image: string,
	name: string,
	text: string,
}

const Value: React.FC<ValueProps> = ({image, name, text}) =>
	<div css={styles.value}>
		<div css={[utils.iad,styles.image]}>
			<img src={image} alt={name}/>
		</div>
		<div css={styles.content}>
			<p css={styles.name}>{name}</p>
			<p css={styles.text}>{text}</p>
		</div>
	</div>

export default Value;