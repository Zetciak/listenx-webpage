// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';

// >> Styles
import useStyles from './partnersStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import binance from '../../../public/partners/binance.png';
import coinmarketcap from '../../../public/partners/coinmarketcap.png';
import coingecko from '../../../public/partners/coingecko.png';
import bscscan from '../../../public/partners/bscscan.png';

// >> Variables
let partners = [
	{ logo: binance, link: 'https://www.binance.com/' },
	{ logo: bscscan, link: 'https://bscscan.com/' },
	{ logo: coingecko, link: 'https://www.coingecko.com' },
	{ logo: coinmarketcap, link: 'https://coinmarketcap.com/' },
];

// >> Script
function Partners() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="partners">
			<div className={styles.insideDiv}>
				{partners.map((element, index) => {
					return (
						<div key={index} className={styles.oneLogo}>
							<div data-aos="zoom-in-up">
								<a
									href={element.link}
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={element.logo}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										priority={true}
									/>
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Partners;
