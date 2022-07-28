/** @jsxImportSource @emotion/react */

import {styles} from "./styles";
import {utils} from "../../styles/utils";

type PostItemProps = {
	image: string,
	text: string,
	avatar: string,
	name: string,
}

const PostItem: React.FC<PostItemProps> = ({image, text, avatar, name}) =>
	<div css={styles.post}>
		<div css={[utils.iad, styles.imageBox]}>
			<img src={image} alt="Post image"/>
		</div>
		<div css={styles.content}>
			<div css={styles.head}>
				<span css={styles.category}>Category</span>
				<span css={styles.date}>November 22, 2021</span>
			</div>
			<p css={styles.text}>{text}</p>
			<div css={styles.footer}>
				<div css={[utils.iad, styles.avatar]}>
					<img src={avatar} alt="User proto"/>
				</div>
				<p css={styles.name}>{name}</p>
			</div>
		</div>
	</div>

export default PostItem;