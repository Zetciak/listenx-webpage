// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './appStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import dashboard from '../../../public/dashboard.png';
import LinkIcon from '@mui/icons-material/Link';

// >> Script
function App(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="keypoints">
			<div className={styles.insideDiv}>
				<div
					className={styles.rightSection}
					data-aos="fade-left"
					style={{
						transform: `translateY(${
							(props.offsetY - 2200) * 0.1
						}px)`,
					}}
				>
					<Typography className={styles.mainTitle}>
						Get <span className={styles.mainGreen}>Paid</span> For{' '}
						<span className={styles.mainGreen}>
							Listening Music
						</span>{' '}
						And{' '}
						<span className={styles.mainGreen}>
							Collect Rewards
						</span>
					</Typography>
					<Typography className={styles.mainDesc}>
					Listen to music from the ListenFi mobile app and get paid in $LFI tokens!
					</Typography>
					<div className={styles.buttonDiv}>
						<Button
							variant="contained"
							className={styles.button}
							href="."
						>
							<LinkIcon className={styles.linkIcon} />
							<Typography>Download App</Typography>
						</Button>
					</div>
				</div>
				<div
					className={styles.leftSection}
					style={{
						transform: `translateY(-${
							(props.offsetY - 2200) * 0.1
						}px)`,
					}}
					data-aos="fade-right"
				>
					<div className={styles.imageDiv}>
						<Image
							src={dashboard}
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

export default App;
