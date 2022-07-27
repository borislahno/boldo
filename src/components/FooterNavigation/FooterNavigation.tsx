/** @jsxImportSource @emotion/react */
import {ReactNode} from "react";
import {styles} from "./styles";

type FooterNavigationProps = {
	name: string,
	list: ReactNode,
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({name, list}) =>
	<nav>
		<p css={styles.name}>{name}</p>
		{list}
	</nav>

export default FooterNavigation;