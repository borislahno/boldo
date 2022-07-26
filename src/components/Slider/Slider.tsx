/** @jsxImportSource @emotion/react */
import {ReactNode, useState} from "react";
import {styles} from "./styles";
import {button} from "../../styles/button";
import LeftArrow from '/public/icons/arrow-left.svg';
import RightArrow from '/public/icons/arrow-right.svg';

type SliderProps = {
	count: number,
	items: ReactNode[],
}

const Slider: React.FC<SliderProps> = ({count, items}) => {
	const [position, setPosition] = useState<number>(0);
	const start = -400 * (count - 1);

	const onNextClick = () => {
		if (position > start) {
			setPosition(position - 400)
		}
	}

	const onPreviousClick = () => {
		if (position < 0) {
			setPosition(position + 400);
		}
	}
	return (
		<div css={styles.slider}>
			<div css={styles.buttonBox}>
				<a css={[button.btn, button.btnWhite, styles.button]} onClick={onPreviousClick}><LeftArrow/></a>
				<a css={[button.btn, button.btnWhite, styles.button]} onClick={onNextClick}><RightArrow/></a>
			</div>
			<div css={[styles.path, {left: `${position}px`}]}>
				{items.map(item => item)}
			</div>
		</div>
	);
}

export default Slider;