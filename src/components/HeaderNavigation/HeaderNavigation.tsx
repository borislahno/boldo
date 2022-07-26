/** @jsxImportSource @emotion/react */
import LinkItem from "../LinkItem/LinkItem";
import {styles} from "./styles";
import {button} from "../../styles/button";
import Link from "next/link";

const HeaderNavigation: React.FC = () =>
	<nav>
		<ul css={styles.list}>
			<LinkItem to="#" name="Product"/>
			<LinkItem to="#" name="Services"/>
			<LinkItem to="#" name="About"/>
			<li>
				<Link href="#">
					<a css={[button.btn, button.btnWhite, {width: '128px', height: '40px'}]}>
						Log In
					</a>
				</Link>
			</li>
		</ul>
	</nav>

export default HeaderNavigation;