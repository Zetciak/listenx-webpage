// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';

// >> Styles
import useStyles from './partnersStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import binance from '../../../public/partners/binance.png';
import bitmex from '../../../public/partners/bitmex.png';
import blockchain from '../../../public/partners/blockchain.png';
import ethereum from '../../../public/partners/ethereum.png';

// >> Variables
let partners = [
	{ logo: binance, link: 'https://www.binance.com/' },
	{ logo: ethereum, link: 'https://ethereum.org/' },
	{ logo: blockchain, link: 'https://blockchain.io/' },
	{ logo: bitmex, link: 'https://www.bitmex.com/' },
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
