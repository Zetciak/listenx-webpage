// >> Modules
import getVariable from '../../globalVariables';
import { Button, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './musicBannersStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import banner1 from '../../../public/musicBanners/banner1.png';
import banner2 from '../../../public/musicBanners/banner2.png';
import banner3 from '../../../public/musicBanners/banner3.png';
import banner4 from '../../../public/musicBanners/banner4.png';
import banner5 from '../../../public/musicBanners/banner5.png';
import banner6 from '../../../public/musicBanners/banner6.png';
import banner7 from '../../../public/musicBanners/banner7.png';
import banner8 from '../../../public/musicBanners/banner8.png';
import banner9 from '../../../public/musicBanners/banner9.png';
import banner10 from '../../../public/musicBanners/banner10.png';
import banner11 from '../../../public/musicBanners/banner11.png';
import banner12 from '../../../public/musicBanners/banner12.png';
import banner13 from '../../../public/musicBanners/banner13.png';
import LinkIcon from '@mui/icons-material/Link';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

// >> Variables
let banners = [
	{ banner: banner1, title: 'Super Freaky...', author: 'Nicki Minaj' },
	{ banner: banner2, title: 'Godzilla', author: 'Eminem' },
	{ banner: banner3, title: 'Higher', author: 'French Montana' },
	{ banner: banner4, title: 'Doja', author: 'Central Cee' },
	{ banner: banner5, title: 'XO Tour Llif3', author: 'Lil Uzi Vert' },
	{ banner: banner6, title: 'Love of Mine', author: 'Imagine Dragons' },
	{ banner: banner7, title: 'Tissues', author: 'YUNGBLUD' },
	{ banner: banner8, title: 'Hell', author: 'EST Gee' },
	{ banner: banner9, title: 'Little Miss', author: 'NLE Choppa' },
	{ banner: banner10, title: 'Detox', author: 'Lil Baby' },
	{ banner: banner11, title: 'Dior', author: 'Pop Smoke' },
	{ banner: banner12, title: 'I’m back', author: 'Lil Pump' },
];

// >> Script
function MusicBanners() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const [drawBanners, setDrawBanners] = useState([]);
	useEffect(() => {
		let drawBannersL = [];
		banners.map((element, index) => {
			drawBannersL.push(
				<div
					key={index}
					className={styles.oneBanner}
					style={{
						background: `url(${element.banner.src})`,
					}}
				>
					<div className={styles.bottomInfos}>
						<Typography className={styles.titleText}>
							{element.title}
						</Typography>
						<Typography className={styles.authorText}>
							{element.author}
						</Typography>
					</div>
					<div className={styles.bottomButtonDiv}>
						<IconButton
							variant="contained"
							className={styles.bottomButton}
						>
							<PlayArrowRoundedIcon
								className={styles.bottomButtonIcon}
							/>
						</IconButton>
					</div>
				</div>
			);
		});
		setDrawBanners(drawBannersL);
	}, [styles]);

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv} data-aos="zoom-in-up">
				<Typography className={styles.mainTitle}>
					You Can Listen To{' '}
					<span className={styles.mainGreen}>Everything!</span>
				</Typography>
				<Typography className={styles.mainDesc}>
					We are something new in WEB3 industry. Be part of our
					community and enjoy product
				</Typography>
				<div className={styles.buttonDiv}>
					<Button
						variant="contained"
						className={styles.button}
						href="."
					>
						<LinkIcon className={styles.linkIcon} />
						<Typography>Lorem Ipsum</Typography>
					</Button>
				</div>
			</div>
			<div className={styles.sliders}>
				<div data-aos="fade-right">
					<Marquee
						className={styles.marquee}
						gradient={false}
						speed={50}
						pauseOnHover={true}
						direction="right"
					>
						{drawBanners}
					</Marquee>
				</div>
				<div data-aos="fade-left">
					<Marquee
						className={styles.marquee}
						gradient={false}
						speed={50}
						pauseOnHover={true}
					>
						{drawBanners}
						<div
							className={styles.oneBanner}
							style={{
								background: `url(${banner13.src})`,
							}}
						>
							<div className={styles.bottomInfos}>
								<Typography className={styles.titleText}>
									Trójkąt Bermudzki
								</Typography>
								<Typography className={styles.authorText}>
									Sentino, Nitro, MB
								</Typography>
							</div>
							<div className={styles.bottomButtonDiv}>
								<IconButton
									variant="contained"
									className={styles.bottomButton}
									href="https://www.youtube.com/watch?v=0FTPCEwJpCY"
									target="_blank"
								>
									<PlayArrowRoundedIcon
										className={styles.bottomButtonIcon}
									/>
								</IconButton>
							</div>
						</div>
					</Marquee>
				</div>
			</div>
		</div>
	);
}

export default MusicBanners;
