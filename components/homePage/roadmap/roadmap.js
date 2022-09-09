// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize.js';
import { FreeMode } from 'swiper';

// >> Styles
import useStyles from './roadmapStyle';
import useGlobalStyles from '../../globalStyle';
import 'swiper/css';
import 'swiper/css/free-mode';

// >> Images
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

// >> Variables
let phases = {
	['Phase 1']: {
		done: true,
		moveTop: 0, // Move higher in px
		elements: [
			'1 We are something new in WEB3 industry. Be part of our community and enjoy product We are something',
			'1 We are something new in WEB3 industry. Be part of our community',
			'1 Be part of our community and enjoy product',
		],
	},

	['Phase 2']: {
		done: true,
		moveTop: -40, // Move higher in px
		elements: [
			'2 We are something new in WEB3 industry. Be part of our community and enjoy product We are something',
			'2 We are something new in WEB3 industry. Be part of our community',
			'2 Be part of our community and enjoy product',
		],
	},

	['Phase 3']: {
		done: false,
		moveTop: 40, // Move higher in px
		elements: [
			'3 We are something new in WEB3 industry. Be part of our community and enjoy product We are something',
			'3 We are something new in WEB3 industry. Be part of our community',
			'3 Be part of our community and enjoy product',
		],
	},

	['Phase 4']: {
		done: false,
		moveTop: 15, // Move higher in px
		elements: ['TBA...'],
	},
};

// >> Script
function Roadmap() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const size = useWindowSize();

	// >> Functions
	const [drawPhases, setDrawPhases] = useState([]);
	useEffect(() => {
		let drawPhasesL = [];

		for (const [i, v] of Object.entries(phases)) {
			drawPhasesL.push(
				<SwiperSlide
					key={i}
					className={styles.oneSwiperSlide}
					style={
						v.done === true
							? {
									opacity: '1',
									top: `${v.moveTop}px`,
							  }
							: {
									opacity: '.5',
									top: `${v.moveTop}px`,
							  }
					}
				>
					<div className={styles.leftLines}>
						<div className={styles.topCircle}>
							<div className={styles.topCircleInside}></div>
						</div>
						<div className={styles.longLine}></div>
						<div className={styles.bottomCircle}>
							{v.done === true ? (
								<DoneRoundedIcon className={styles.doneIcon} />
							) : (
								<AccessTimeRoundedIcon
									className={styles.timeIcon}
								/>
							)}
						</div>
					</div>
					<div className={styles.rightTexts}>
						<Typography className={styles.phaseName}>
							{i}
						</Typography>
						{v.elements.map((element, index) => {
							return (
								<Typography
									key={index}
									className={styles.onePhasePoint}
								>
									{element}
								</Typography>
							);
						})}
					</div>
				</SwiperSlide>
			);
		}

		setDrawPhases(drawPhasesL);
	}, [styles]);

	// >> Render
	return (
		<div className={styles.outsideDiv} id="roadmap">
			<div className={styles.insideDiv} data-aos="zoom-in-up">
				<Typography className={styles.mainTitle} data-aos="zoom-in-up">
					<span className={styles.mainGreen}>Roadmap</span>
				</Typography>
				<Typography className={styles.mainDesc} data-aos="zoom-in-up">
					The next months will be crucial in terms of the ListenFi development.
				</Typography>

				<div className={styles.roadmapDiv}>
					<Swiper
						className={styles.swiperDiv}
						slidesPerView={
							size.width > 1720
								? 3.7
								: size.width > 1500
								? 3
								: size.width > 870
								? 2
								: size.width > 650
								? 1.5
								: size.width > 450
								? 1
								: 0.9
						}
						freeMode={true}
						modules={[FreeMode]}
					>
						{drawPhases}
					</Swiper>
				</div>
			</div>
			<div className={styles.bottomLines}></div>
		</div>
	);
}

export default Roadmap;
