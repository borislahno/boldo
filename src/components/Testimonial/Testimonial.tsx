/** @jsxImportSource @emotion/react */

import {styles} from "./styles";
import {utils} from "../../styles/utils";

type TestimonialProps = {
	text: string,
	image: string,
	name: string,
	role: string,
}

const Testimonial: React.FC<TestimonialProps> = ({text, name, image, role}) =>
	<div css={styles.testimonial}>
		<p css={styles.text}>&quot;{text}&quot;</p>
		<div css={styles.footer}>
			<div css={[styles.avatar, utils.iad]}>
				<img src={image} alt={name}/>
			</div>
			<div>
				<p css={styles.name}>{name}</p>
				<p css={styles.role}>{role}</p>
			</div>
		</div>
	</div>

export default Testimonial;
