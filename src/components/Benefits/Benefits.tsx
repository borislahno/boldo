/** @jsxImportSource @emotion/react */
import {typography} from "../../styles/typography";
import BenefitListItem from "../BenefitListItem/BenefitListItem";
import BenefitBlockItem from "../BenefitBlockItem/BenefitBlockItem";
import Feather from '/public/icons/feather.svg';
import Eye from '/public/icons/eye.svg';
import Sun from '/public/icons/sun.svg';
import {styles} from "./styles";
import Link from "next/link";
import {button} from "../../styles/button";

const Benefits: React.FC = () =>
	<div css={styles.benefits}>
		<div css={styles.block}>
			<div css={styles.firstImage}>
				<img src="/images/home/services/04.webp" alt="A man is talking on the phone"/>
			</div>
			<div css={styles.content}>
				<h3 css={[typography.headingTertiary]}>
					We connect our customers with the best, and help them keep up-and stay open.
				</h3>
				<ul css={styles.list}>
					<BenefitListItem name="We connect our customers with the best."/>
					<BenefitListItem name="Advisor success customer launch party."/>
					<BenefitListItem name="Business-to-consumer long tail."/>
				</ul>
				<Link href="#">
					<a css={[button.btn, button.btnBlue, styles.button]}>Start now</a>
				</Link>
			</div>
		</div>
		<div css={styles.block}>
			<div css={styles.content}>
				<h3 css={typography.headingTertiary}>
					We connect our customers with the best, and help them keep up-and stay open.
				</h3>
				<ul css={styles.list}>
					<BenefitBlockItem icon={<Feather/>} text="We connect our customers with the best."/>
					<BenefitBlockItem icon={<Eye/>} text="Advisor success customer launch party."/>
					<BenefitBlockItem icon={<Sun/>} text="Business-to-consumer long tail."/>
				</ul>
			</div>
			<div css={styles.secondImage}>
				<img src="/images/home/services/05.webp" alt="A woman is talking on the phone"/>
			</div>
		</div>
	</div>

export default Benefits;