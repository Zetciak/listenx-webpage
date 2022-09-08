// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './landingStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import landingPhones from '../../../public/landingPhones.png';
import landingCircle from '../../../public/landingCircle.png';
import LinkIcon from '@mui/icons-material/Link';

// >> Script
function Landing(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="home">
			<div className={styles.insideDiv} data-aos="zoom-in-up">
				<Typography className={styles.mainTitle} data-aos="zoom-in-up">
					Listen Music And{' '}
					<span className={styles.mainGreen}>Earn Money</span> For{' '}
					<span className={styles.mainGreen}>Free!</span>
				</Typography>
				<Typography className={styles.mainDesc} data-aos="zoom-in-up">
					We are something new in WEB3 industry. Be part of our
					community and enjoy{' '}
				</Typography>
				<div className={styles.buttonsDiv} data-aos="zoom-in-up">
					<div className={styles.leftButtonDiv}>
						<Button
							variant="contained"
							className={styles.leftButton}
							href="."
						>
							<LinkIcon className={styles.linkIcon} />
							<Typography>List Music</Typography>
						</Button>
					</div>
					<div className={styles.rightButtonDiv}>
						<Button
							variant="contained"
							className={styles.rightButton}
							href="."
						>
							<LinkIcon className={styles.linkIcon} />
							<Typography>Whitepapers</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.bottomSection}>
					<div className={styles.bottomCircle1}>
						<Image
							src={landingCircle}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.bottomCircle2}>
						<Image
							src={landingCircle}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={styles.bottomCircle3}>
						<Image
							src={landingCircle}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div
						className={styles.bottomSectionImage}
						style={{
							transform: `
							translateY(${props.mouseY * 0.025}px)
							translateX(${props.mouseX * 0.025}px)
							`,
						}}
					>
						<Image
							src={landingPhones}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
