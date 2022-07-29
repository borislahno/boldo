/** @jsxImportSource @emotion/react */
import Container from "../../layout/Container/Container";
import {styles} from "./styles";
import {typography} from "../../styles/typography";
import TeamMember from "../TeamMember/TeamMember";

const OurTeam: React.FC = () =>
	<section css={styles.team}>
		<Container>
			<div css={styles.content}>
				<p css={[typography.subtitle, styles.subtitle]}>Our team</p>
				<h2 css={[typography.headingSecondary, styles.heading]}>The leadership team</h2>
				<p css={styles.text}>
					Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
					iteration. Traction stock user experience deployment beta innovator incubator focus.
				</p>
			</div>
			<div css={styles.members}>
				<TeamMember image="/images/about/team/01.webp" name="Michael Scott" role="General Manager"/>
				<TeamMember image="/images/about/team/02.webp" name="Dwight Schrute" role="General Manager"/>
				<TeamMember image="/images/about/team/03.webp" name="Pam Beetsley" role="General Manager"/>
			</div>
		</Container>
	</section>

export default OurTeam;