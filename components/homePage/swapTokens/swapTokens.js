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
import LinkIcon from '@mui/icons-material/Link';

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
					Swap Your <span className={styles.mainGreen}>Tokens</span>{' '}
					For
					<span className={styles.mainGreen}>$USDT!</span>
				</Typography>
				<Typography className={styles.mainDesc} data-aos="zoom-in-up">
					We are something new in WEB3 industry. Be part of our
					community and enjoy productWe are something
				</Typography>
				<div className={styles.buttonDiv} data-aos="zoom-in-up">
					<Button
						variant="contained"
						className={styles.button}
						href="."
					>
						<LinkIcon className={styles.linkIcon} />
						<Typography>Download App</Typography>
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
