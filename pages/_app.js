// >> Modules
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';

// >> Styling
import '../styles/globals.css';

// >> Script
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	// >> Render
	return (
		<>
			<div>
				<CssBaseline />
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
