/** @jsxImportSource @emotion/react */

import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import {styles} from "./styles";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";


const Header: React.FC = () =>
	<header css={styles.header}>
		<Container>
			<Logo logoColor="lightGreen" textColor="white"/>
			<HeaderNavigation/>
		</Container>
	</header>

export default Header;