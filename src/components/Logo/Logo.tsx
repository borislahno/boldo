/** @jsxImportSource @emotion/react */
import {styles} from "./styles";
import {colors} from "../../styles/colors";
import LogoImage from '/public/images/logo.svg';
import Link from "next/link";

type LogoProps = {
	textColor?: 'darkBlue' | 'white',
	logoColor?: 'lightGreen' | 'darkBlue',
}

const Logo: React.FC<LogoProps> = ({textColor = 'darkBlue', logoColor = 'darkBlue'}) =>
	<Link href="/">
		<a css={[styles.logo, {color: colors[logoColor]}]}>
			<LogoImage/>
			<p css={[styles.text, {color: colors[textColor]}]}>Boldo</p>
		</a>
	</Link>

export default Logo;