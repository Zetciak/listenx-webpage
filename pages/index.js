// >> Modules
import { useEffect } from 'react';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import useGlobalStyles from '../components/globalStyle';

// >> Pages
import HomePage from '../components/homePage/homePage';

// >> Script
export default function Home() {
	// >> Style
	const styles = useGlobalStyles();

	// >> Functions
	useEffect(() => {
		Aos.init({ duration: 700, once: true });
	}, []);

	// >> Render
	return (
		<div className={styles.container}>
			<HomePage />
		</div>
	);
}
