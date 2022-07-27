/** @jsxImportSource @emotion/react */
import Container from "../Container/Container";
import FooterNavigation from "../../components/FooterNavigation/FooterNavigation";
import LinkItem from "../../components/LinkItem/LinkItem";
import Logo from "../../components/Logo/Logo";
import {styles} from "./styles";

const Footer: React.FC = () =>
	<footer css={styles.footer}>
		<Container>
			<div css={styles.content}>
				<Logo textColor="darkBlue" logoColor="darkBlue"/>
				<p css={styles.text}>
					Social media validation business model canvas graphical user interface launch party creative facebook iPad
					twitter.
				</p>
				<p css={styles.rights}>All rights reserved.</p>
			</div>
			<div css={styles.navigation}>
				<FooterNavigation
					name="Landings"
					list={
						<ul css={styles.list}>
							<LinkItem to="#" name="Home" type="gray"/>
							<LinkItem to="#" name="Products" type="gray"/>
							<LinkItem to="#" name="Services" type="gray"/>
						</ul>
					}
				/>
				<FooterNavigation
					name="Company"
					list={
						<ul css={styles.list}>
							<LinkItem to="#" name="Home" type="gray"/>
							<LinkItem to="#" name="Careers" type="gray"><p css={styles.hiring}>Hiring!</p></LinkItem>
							<LinkItem to="#" name="Services" type="gray"/>
						</ul>
					}
				/>
				<FooterNavigation
					name="Resources"
					list={
						<ul css={styles.list}>
							<LinkItem to="/blog" name="Blog" type="gray"/>
							<LinkItem to="#" name="Products" type="gray"/>
							<LinkItem to="#" name="Services" type="gray"/>
						</ul>
					}
				/>
			</div>
		</Container>
	</footer>

export default Footer;