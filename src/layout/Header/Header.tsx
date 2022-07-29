/** @jsxImportSource @emotion/react */

import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import {styles} from "./styles";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import BurgerIcon from "../../components/BurgerIcon/BurgerIcon";
import {useState} from "react";

type HeaderProps = {
	mode?: 'white' | "dark",
}

const Header: React.FC<HeaderProps> = ({mode = 'white'}) => {

	const [active, setActive] = useState<boolean>(false);

	const onBurgerIconClick = () => {
		document.body.classList.toggle('lock')
		setActive(!active);
	}

	return (
		<header css={styles.header}>
			<Container>
				{mode === "dark" ?
					<Logo logoColor="darkBlue" textColor="darkBlue"/>
					:
					<Logo logoColor="lightGreen" textColor="white"/>
				}
				<HeaderNavigation mode={mode} active={active}/>
				<BurgerIcon onClick={onBurgerIconClick} active={active} mode={mode}/>
			</Container>
		</header>
	);
}

export default Header;