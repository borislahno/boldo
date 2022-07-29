/** @jsxImportSource @emotion/react */
import {button} from "../../styles/button";
import {styles} from "./styles";
import {typography} from "../../styles/typography";
import Container from "../../layout/Container/Container";

const Form: React.FC = () =>
	<section css={styles.formBlock}>
		<Container>
			<form css={styles.form} action="#">
				<h2 css={[typography.headingSecondary, styles.heading]}>
					An enterprise template to ramp up your company website
				</h2>
				<div css={styles.content}>
					<input css={styles.input} type="text" placeholder="Your email address" name="emailText"/>
					<button css={[button.btn, button.btnGreen, styles.button]}>Start now</button>
				</div>
			</form>
		</Container>
	</section>


export default Form;