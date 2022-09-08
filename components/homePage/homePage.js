// >> Modules
import Image from 'next/image';
import Head from 'next/head';
import getVariable from '../globalVariables';
import { useEffect, useState } from 'react';

// >> Styles
import useStyles from './homePageStyle';
import useGlobalStyles from '../globalStyle';

// >> Images
import bgCircle from '../../public/bgCircle.png';

// >> Components
import NavBar from './navBar/navBar';
import Landing from './landing/landing';
import Partners from './partners/partners';
import WhyListen from './whyListen/whyListen';
import App from './app/app';
import MusicBanners from './musicBanners/musicBanners';
import SwapTokens from './swapTokens/swapTokens';
import Roadmap from './roadmap/roadmap';
import Faq from './faq/faq';
import Footer from './footer/footer';

// >> Variables
let bgCircles = [
	{ top: '-700px', float: 'right' },
	{ top: '0px', float: 'left' },
	{ top: '700px', float: 'right' },
	{ top: '1600px', float: 'left' },
	{ top: '2500px', float: 'right' },
	{ top: '3400px', float: 'left' },
	{ top: '4300px', float: 'right' },
	{ top: '5200px', float: 'left' },
	{ top: '6100px', float: 'right' },
	{ top: '7000px', float: 'left' },
];

// >> Script
function HomePage() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Parallax
	const [offsetY, setOffsetY] = useState(0);
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const handleScroll = () => {
		setOffsetY(window.pageYOffset);
	};

	const handleMove = (e) => {
		setMouseX(e.pageX);
		setMouseY(e.pageY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMove);
		};
	}, []);

	// >> Render
	return (
		<>
			<Head>
				<title>{getVariable['texts']['pageTitle']}</title>
				<meta charSet="utf-8" />
				<meta
					name="theme-color"
					content={getVariable['colors']['pageMainColor']}
				/>
				<meta
					name="keywords"
					content={getVariable['texts']['pageTags']}
				/>
				<meta
					name="description"
					content={getVariable['texts']['pageDesc']}
				/>

				<meta
					property="og:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					property="og:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					property="og:image"
					content={getVariable['texts']['pageImage']}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={getVariable['texts']['pageLink']}
				/>
				<meta
					property="twitter:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta
					name="twitter:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					name="twitter:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					name="twitter:image"
					content={getVariable['texts']['pageImage']}
				/>
			</Head>
			<div className={styles.mainDiv}>
				<div className={styles.backgroundDiv}>
					<div className={styles.backgroundDivInside}>
						{bgCircles.map((element, index) => {
							return (
								<div
									key={index}
									className={styles.circleDiv}
									style={
										element.float === 'right'
											? {
													top: element.top,
													right: '-1200px',
											  }
											: {
													top: element.top,
													left: '-1200px',
											  }
									}
								>
									<Image
										src={bgCircle}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										priority={true}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.componentsDiv}>
					<NavBar />
					<Landing
						offsetY={offsetY}
						mouseX={mouseX}
						mouseY={mouseY}
					/>
					<Partners />
					<WhyListen />
					<App offsetY={offsetY} />
					<MusicBanners />
					<SwapTokens offsetY={offsetY} />
					<Roadmap />
					<Faq />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default HomePage;
