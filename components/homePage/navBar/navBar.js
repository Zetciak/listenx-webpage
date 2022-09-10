// >> Modules
import getVariable from '../../globalVariables';
import { Link } from 'react-scroll';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './navBarStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import logo from '../../../public/logo.png';

// >> Script
function NavBar() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} data-aos="fade-down">
			<div className={styles.insideDiv}>
				<div className={styles.leftSection} data-aos="fade-right">
					<Image
						src={logo}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
					/>
				</div>
				<div className={styles.centerSection}>
					<Link to="home" className={styles.oneCenterElement}>
						<Typography>Home</Typography>
					</Link>
					<Link to="partners" className={styles.oneCenterElement}>
						<Typography>Partners</Typography>
					</Link>
					<Link to="whatis" className={styles.oneCenterElement}>
						<Typography>What is ListenFi</Typography>
					</Link>
					<Link to="keypoints" className={styles.oneCenterElement}>
						<Typography>Key Points</Typography>
					</Link>
					<Link to="swap" className={styles.oneCenterElement}>
						<Typography>Swap</Typography>
					</Link>
					<Link to="roadmap" className={styles.oneCenterElement}>
						<Typography>Roadmap</Typography>
					</Link>
					<Link to="faq" className={styles.oneCenterElement}>
						<Typography>FAQ</Typography>
					</Link>
				</div>
				<div className={styles.rightSection} data-aos="fade-left">
					<Button
						variant="contained"
						className={styles.button}
						href="."
					>
						<PhoneIphoneIcon className={styles.linkIcon} />
						<Typography>Go To App</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
