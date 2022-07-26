/** @jsxImportSource @emotion/react */
import Link from "next/link";
import {styles} from "./styles";

type LinkItemProps = {
	type?: 'white' | 'gray',
	to: string,
	name: string,
}

const LinkItem: React.FC<LinkItemProps> = ({type = 'white', to, name}) =>
	<li>
		<Link href={to}>
			<a css={styles[`${type}Link`]}>{name}</a>
		</Link>
	</li>

export default LinkItem;