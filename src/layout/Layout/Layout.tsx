import {ReactNode} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useRouter} from "next/router";

type LayoutProps = {
	children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({children}) => {

	const router = useRouter();
	const mode = router.pathname === '/blog' ? 'dark' : 'white';

	return (
		<>
			<Header mode={mode}/>
			<main>{children}</main>
			<Footer/>
		</>
	);
}

export default Layout;