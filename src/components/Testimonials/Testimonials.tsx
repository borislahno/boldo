/** @jsxImportSource @emotion/react */
import {typography} from "../../styles/typography";
import Container from "../../layout/Container/Container";
import {styles} from "./styles";
import Testimonial from "../Testimonial/Testimonial";
import Slider from "../Slider/Slider";

const Testimonials: React.FC = () => {

	const testimonials = [
		<Testimonial
			key="testimonialOne"
			text="Buyer buzz partner network disruptive non-disclosure agreement business"
			image="/images/home/testimonials/01.webp"
			name="Albus Dumbledore"
			role="Manager @ Howarts"
		/>,
		<Testimonial
			key="testimonialTwo"
			text="Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
			image="/images/home/testimonials/02.webp"
			name="Severus Snape"
			role="Manager @ Slytherin"
		/>,
		<Testimonial
			key="testimonialThree"
			text="Release facebook responsive web design business model canvas seed money monetization."
			image="/images/home/testimonials/03.webp"
			name="Harry Potter"
			role="Team Leader @ Gryffindor"
		/>,
		<Testimonial
			key="testimonialFour"
			text="Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
			image="/images/home/testimonials/02.webp"
			name="Severus Snape"
			role="Manager @ Slytherin"
		/>,
	]

	return (
		<section css={styles.testimonials}>
			<Container>
					<h2 css={[typography.headingSecondary, styles.heading]}>An enterprise template to ramp up your company
						website</h2>
				<Slider count={testimonials.length} items={testimonials}/>
			</Container>
		</section>
	);
}

export default Testimonials;