import type {AppProps} from 'next/app'
import Layout from "../src/layout/Layout/Layout";
import {Global} from "@emotion/react";
import {fontFace} from "../src/styles/fontFace";
import {resetStyles} from "../src/styles/resetStyles";

const MyApp = ({Component, pageProps}: AppProps) =>
	<>
		<Global styles={[resetStyles, fontFace]}/>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>


export default MyApp
