/** @jsxImportSource @emotion/react */
import Link from "next/link";
import {styles} from "./styles";
import {ReactNode} from "react";

type LinkItemProps = {
	type?: 'white' | 'gray' | 'dark',
	to: string,
	name: string,
	children?: ReactNode,
}

const LinkItem: React.FC<LinkItemProps> = ({type = 'white', to, name, children}) =>
	<li>
		<Link href={to}>
			<a css={[styles.link, styles[`${type}Link`]]}>{name} {children}</a>
		</Link>
	</li>

export default LinkItem;