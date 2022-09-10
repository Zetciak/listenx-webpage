// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
// >> Styles
import useStyles from './swapTokensStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import landingCircle from '../../../public/landingCircle.png';
import bottomPhones from '../../../public/bottomPhones.png';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

// >> Script
function SwapTokens(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv} id="swap" data-aos="zoom-in-up">
				<Typography className={styles.mainTitle} data-aos="zoom-in-up">
					Swap <span className={styles.mainGreen}>BNB</span> To{' '}
					<span className={styles.mainGreen}>$LFI!</span> with our
					platform!
				</Typography>
				<Typography className={styles.mainDesc} data-aos="zoom-in-up">
					Do you want to earn with us thanks of our App? Swap your BNB
					to $LFI!
				</Typography>
				<div className={styles.buttonDiv} data-aos="zoom-in-up">
					<Button
						variant="contained"
						className={styles.button}
						href="."
					>
						<PhoneIphoneIcon className={styles.linkIcon} />
						<Typography>Go To App</Typography>
					</Button>
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
							transform: `translateY(-${
								(props.offsetY - 4800) * 0.25
							}px)`,
						}}
					>
						<Image
							src={bottomPhones}
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

export default SwapTokens;
