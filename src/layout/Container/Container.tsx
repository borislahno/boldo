/** @jsxImportSource @emotion/react */
import {ReactNode} from 'react';
import {styles} from "./styles";

type ContainerProps = {
	children: ReactNode,
}

const Container: React.FC<ContainerProps> = ({children}) =>
	<div css={styles.container}>
		{children}
	</div>

export default Container;