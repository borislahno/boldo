/** @jsxImportSource @emotion/react */
import Container from "../../layout/Container/Container";
import {typography} from "../../styles/typography";
import {styles} from "./styles";
import {button} from "../../styles/button";
import Link from "next/link";

const HomeHero: React.FC = () =>
	<section css={styles.hero}>
		<Container>
			<div css={styles.main}>
				<div css={styles.content}>
					<h1 css={[styles.heading, typography.headingPrimarySmall]}>Save time by building fast with Boldo
						Template </h1>
					<p css={styles.text}>Funding handshake buyer business-to-business metrics iPad partnership. First mover
						advantage innovator success deployment non-disclosure.
					</p>
					<div css={styles.buttons}>
						<Link href="#">
							<a css={[button.btn, button.btnGreen, styles.buy]}>Buy template</a>
						</Link>
						<Link href="#">
							<a css={[button.btn, button.btnTransparentBorderWhite, styles.explore]}>Explore</a>
						</Link>
					</div>
				</div>
				<div css={styles.imageBox}>
					<img src="/images/home/hero/hero.webp" alt="Charts"/>
				</div>
			</div>
			<div css={styles.logoBox}>
				<img src="/images/home/hero/boldo.svg" alt="Boldo logo"/>
				<img src="/images/home/hero/presto.svg" alt="Presto logo"/>
				<img src="/images/home/hero/boldo.svg" alt="Boldo logo"/>
				<img src="/images/home/hero/presto.svg" alt="Presto logo"/>
				<img src="/images/home/hero/boldo.svg" alt="Boldo logo"/>
				<img src="/images/home/hero/presto.svg" alt="Presto logo"/>
			</div>
		</Container>
	</section>

export default HomeHero;