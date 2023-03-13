import { Layout } from "../components/layout";
import '../style.css';

const CustomApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<main>
				<Component {...pageProps} />
			</main>
		</Layout>

	)
}

export default CustomApp;
