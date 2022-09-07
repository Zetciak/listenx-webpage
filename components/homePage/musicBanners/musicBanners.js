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
import LinkIcon from '@mui/icons-material/Link';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

// >> Variables
let banners = [
	{ banner: banner1, title: 'Hulanki', author: 'Young Leosia' },
	{ banner: banner2, title: 'Europa', author: 'Taco Hemingway' },
	{ banner: banner3, title: 'Gombao 33', author: 'Mata' },
	{ banner: banner4, title: 'Muzyka Rozryw...', author: 'Pezet' },
	{ banner: banner5, title: 'Feelings', author: 'Chizzya' },
	{ banner: banner6, title: 'Oldschool', author: 'Kuba Badach' },
	{ banner: banner7, title: 'Czerwony Dywan', author: 'Paluch' },
	{ banner: banner8, title: 'Miejska Jungla', author: 'Alberto' },
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
					</Marquee>
				</div>
			</div>
		</div>
	);
}

export default MusicBanners;
