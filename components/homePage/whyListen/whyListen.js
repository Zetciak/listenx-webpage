// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './whyListenStyle';
import useGlobalStyles from '../../globalStyle';

// >> Script
function WhyListen() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="whatis" data-aos="fade-up">
			<div className={styles.insideDiv} data-aos="zoom-in-up">
				<Typography className={styles.mainTitle}>
					Why <span className={styles.mainGreen}>ListenX?</span>
				</Typography>
				<Typography className={styles.mainDesc}>
					We are something new in WEB3 industry. Be part of our
					community and enjoy productWe are something
				</Typography>
				<div className={styles.youtubeDiv}>
					<iframe
						className={styles.youtube}
						src="https://www.youtube.com/embed/4YCXJrqUdrk"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default WhyListen;
