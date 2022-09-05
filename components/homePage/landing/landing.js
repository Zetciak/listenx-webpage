// >> Modules
import getVariable from '../../globalVariables';

// >> Styles
import useStyles from './landingStyle';
import useGlobalStyles from '../../globalStyle';

// >> Script
function Landing() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>Landing page</div>
		</div>
	);
}

export default Landing;
