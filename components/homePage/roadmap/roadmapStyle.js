// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import roadmapLines from '../../../public/roadmapLines.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '4',
	},

	insideDiv: {
		width: '1392px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '55px',
		'z-index': '2',
	},

	mainTitle: {
		width: '530px',
		margin: '0 auto',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '36px',
		lineHeight: '125%',
		textAlign: 'center',
		color: '#FFFFFF',
	},

	mainGreen: {
		color: getVariable['colors']['pageMainColor'],
	},

	mainDesc: {
		width: '471px',
		margin: '0 auto',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '13.5px',
		lineHeight: '125%',
		textAlign: 'center',
		letterSpacing: '0.15px',
		color: '#FFFFFF',
		marginTop: '25.5px',
	},

	roadmapDiv: {
		width: '120%',
		marginTop: '170px',
		position: 'relative',
	},

	swiperDiv: {
		width: '100%',
		position: 'relative',
		overflow: 'visible',
	},

	oneSwiperSlide: {
		width: '360px !important',
		height: '456px',
		position: 'relative',
		marginRight: '90px',

		transform: `translateY(0px)`,
		transition: 'transform 1s',

		'&:hover': {
			transform: `translateY(-20px)`,
		},
	},

	leftLines: {
		position: 'absolute',
		height: '100%',
		left: '20px',
	},

	topCircle: {
		width: '36px',
		height: '36px',
		background: '#FFFFFF',
		borderRadius: '100%',
		position: 'absolute',
		'z-index': '2',
		left: '-16px',
	},

	topCircleInside: {
		width: '23px',
		height: '23px',
		background: getVariable['colors']['pageMainColor'],
		borderRadius: '100%',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},

	longLine: {
		height: '100%',
		width: '4px',
		background:
			'linear-gradient(180deg, #31C570 0%, rgba(49, 197, 112, 0) 100.95%)',
		position: 'absolute',
		'z-index': '1',
	},

	bottomCircle: {
		position: 'absolute',
		width: '26px',
		height: '26px',
		background: '#ffffff',
		borderRadius: '100%',
		bottom: '0px',
		left: '-11px',
	},

	doneIcon: {
		position: 'absolute',
		width: '20px',
		height: 'auto',
		color: getVariable['colors']['pageMainColor'],
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},

	timeIcon: {
		position: 'absolute',
		width: '18px',
		height: 'auto',
		color: getVariable['colors']['pageMainColor'],
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},

	rightTexts: {
		marginLeft: '55px',
		position: 'relative',
	},

	phaseName: {
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '21px',
		lineHeight: '125%',
		color: getVariable['colors']['pageMainColor'],
	},

	onePhasePoint: {
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '10.5px',
		letterSpacing: '0.15px',
		lineHeight: '125%',
		color: '#ffffff',
		marginLeft: '15px',
		marginTop: '13px',
		position: 'relative',

		'&:before': {
			position: 'absolute',
			left: '-13px',
			top: '4px',
			content: '""',
			background: '#ffffff',
			width: '3px',
			height: '3px',
			borderRadius: '100%',
		},
	},

	bottomLines: {
		position: 'absolute',
		width: '300%',
		height: '170px',
		background: `url(${roadmapLines.src})`,
		bottom: '-75px',
		backgroundRepeat: 'repeat',
		animation: '$lineMove 120s linear infinite',
		'z-index': '1',
	},

	'@keyframes lineMove': {
		'0%': {
			backgroundPosition: '0%',
			backgroundSize: '30% 100%',
		},
		'100%': {
			backgroundPosition: '122%',
			backgroundSize: '30% 100%',
		},
	},

	// >> Responsive scale
	// 1720px
	['@media (max-width: 1720px)']: {
		insideDiv: {
			width: '1044px',
		},

		imageDiv: {
			right: '150px',
		},
	},

	// 1200px
	['@media (max-width: 1200px)']: {
		insideDiv: {
			width: '90%',
		},
	},

	// 850px
	['@media (max-width: 850px)']: {
		mainTitle: {
			width: '100%',
		},

		mainDesc: {
			width: '100%',
		},
	},

	// 376px
	['@media (max-width: 376px)']: {
		oneSwiperSlide: {
			width: '330px !important',
		},
	},
});

export default useStyles;
