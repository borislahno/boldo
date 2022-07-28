/** @jsxImportSource @emotion/react */
import LinkItem from "../LinkItem/LinkItem";
import {styles} from "./styles";
import {button} from "../../styles/button";
import Link from "next/link";

type HeaderNavigationProps = {
	mode?: 'white' | "dark",
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({mode}) =>
	<nav css={styles.navigation}>
		<ul css={styles.list}>
			<LinkItem to="#" name="Product" type={mode}/>
			<LinkItem to="#" name="Services" type={mode}/>
			<LinkItem to="/about" name="About" type={mode}/>
			<li>
				<Link href="#">
					{mode === 'dark' ?
						<a css={[button.btn, button.btnTransparentBorderBlue, styles.button]}>
							Log In
						</a>
						:
						<a css={[button.btn, button.btnWhite, styles.button]}>
							Log In
						</a>
					}

				</Link>
			</li>
		</ul>
	</nav>

export default HeaderNavigation;