/** @jsxImportSource @emotion/react */

import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import {styles} from "./styles";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";

type HeaderProps = {
	mode?: 'white' | "dark",
}

const Header: React.FC<HeaderProps> = ({mode = 'white'}) =>
	<header css={styles.header}>
		<Container>
			{mode === "dark" ?
				<Logo logoColor="darkBlue" textColor="darkBlue"/>
				:
				<Logo logoColor="lightGreen" textColor="white"/>
			}
			<HeaderNavigation mode={mode}/>
		</Container>
	</header>

export default Header;