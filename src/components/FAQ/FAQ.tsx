/** @jsxImportSource @emotion/react */
import {typography} from "../../styles/typography";
import FAQItem from "../FAQItem/FAQItem";
import Container from "../../layout/Container/Container";
import {styles} from "./styles";
import {utils} from "../../styles/utils";


const FAQ: React.FC = () =>
	<section css={styles.faq}>
		<Container>
			<div css={[utils.iad, styles.imageBox]}>
				<img src="/images/home/block/01.webp" alt="People in the office at computers"/>
			</div>
			<div css={styles.content}>
				<h3 css={[typography.headingTertiary, styles.title]}>
					We connect our customers with the best, and help them keep up-and stay open.
				</h3>
				<div css={styles.faqBox}>
					<FAQItem title="We connect our customers with the best?"/>
					<FAQItem title="Android research & development rockstar? "/>
				</div>
			</div>
		</Container>
	</section>

export default FAQ;