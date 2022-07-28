/** @jsxImportSource @emotion/react */
import Link from "next/link";
import ArrowRight from '/public/icons/arrow-right.svg';
import {styles} from "./styles";
import {button} from "../../styles/button";
import {utils} from "../../styles/utils";

type FeatureProps = {
	imageUrl: string,
	title: string,
	text: string,
}

const Feature: React.FC<FeatureProps> = ({imageUrl, title, text}) =>
	<div css={styles.feature}>
		<div css={[styles.image, utils.iad]}>
			<img src={imageUrl} alt={title}/>
		</div>
		<div css={styles.content}>
			<p css={styles.title}>{title}</p>
			<p css={styles.text}>{text}</p>
			<Link href="#">
				<a css={[button.btn, button.btnLink, styles.button]}>
					Explore page
					<ArrowRight/>
				</a>
			</Link>
		</div>
	</div>

export default Feature;