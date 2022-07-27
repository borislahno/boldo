/** @jsxImportSource @emotion/react */
import {styles} from "./styles";
import {utils} from "../../styles/utils";

type TeamMemberProps = {
	image: string,
	name: string,
	role: string,
}

const TeamMember: React.FC<TeamMemberProps> = ({image, name, role}) =>
	<div css={styles.member}>
		<div css={[utils.iad, styles.image]}>
			<img src={image} alt={name}/>
		</div>
		<p css={styles.name}>{name}</p>
		<p css={styles.role}>{role}</p>
	</div>

export default TeamMember;