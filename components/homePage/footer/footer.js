// >> Modules
import getVariable from '../../globalVariables';
import { Link } from 'react-scroll';
import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './footerStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import logo from '../../../public/logo.png';
import twitter from '../../../public/twitter.svg';

// >> Script
function Footer() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv} data-aos="fade-up">
				<div className={styles.topSection}>
					<div className={styles.topLeftSection}>
						<div className={styles.logoDiv}>
							<Image
								src={logo}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
						<div className={styles.topLeftMenu}>
							<Link to="home" className={styles.oneMenuElement}>
								<Typography>Home</Typography>
							</Link>
							<Link
								to="partners"
								className={styles.oneMenuElement}
							>
								<Typography>Partners</Typography>
							</Link>
							<Link to="whatis" className={styles.oneMenuElement}>
								<Typography>What is ListenX</Typography>
							</Link>
							<Link
								to="keypoints"
								className={styles.oneMenuElement}
							>
								<Typography>Key Points</Typography>
							</Link>
							<Link to="swap" className={styles.oneMenuElement}>
								<Typography>Swap</Typography>
							</Link>
							<Link
								to="roadmap"
								className={styles.oneMenuElement}
							>
								<Typography>Roadmap</Typography>
							</Link>
							<Link to="faq" className={styles.oneMenuElement}>
								<Typography>FAQ</Typography>
							</Link>
						</div>
					</div>
					<div className={styles.topRightSection}>
						<IconButton
							variant="contained"
							className={styles.topRightButton}
							href="."
							target="_blank"
						>
							<div className={styles.topRightButtonImage}>
								<Image
									src={twitter}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
						</IconButton>
						<IconButton
							variant="contained"
							className={styles.topRightButton}
							href="."
							target="_blank"
						>
							<div className={styles.topRightButtonImage}>
								<Image
									src={twitter}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
						</IconButton>
						<IconButton
							variant="contained"
							className={styles.topRightButton}
							href="."
							target="_blank"
						>
							<div className={styles.topRightButtonImage}>
								<Image
									src={twitter}
									alt=""
									layout="responsive"
									objectFit="contain"
									quality={100}
									priority={true}
								/>
							</div>
						</IconButton>
					</div>
				</div>
				<div className={styles.centerLine}></div>
				<div className={styles.bottomSection}>
					<Typography className={styles.leftBottomText}>
						© 2022{' '}
						<span className={styles.leftBottomGreen}>ListenX</span>{' '}
						All rights reserved
					</Typography>
					<div className={styles.bottomRightElements}>
						<a href="." className={styles.oneBottomRight}>
							Terms & Conditions
						</a>
						<a href="." className={styles.oneBottomRight}>
							Privacy Policy
						</a>
						<a href="." className={styles.oneBottomRight}>
							Sitemap
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
