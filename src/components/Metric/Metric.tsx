/** @jsxImportSource @emotion/react */
import {styles} from "./styles";

type MetricProps = {
	name: string,
	value: string,
}

const Metric: React.FC<MetricProps> = ({name, value}) =>
	<div css={styles.metric}>
		<p css={styles.value}>
			{value}
		</p>
		<p css={styles.name}>
			{name}
		</p>
	</div>

export default Metric;