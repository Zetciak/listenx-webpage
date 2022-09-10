// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

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
		marginTop: '110px',
	},

	mainTitle: {
		width: '690px',
		margin: '0 auto',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '48px',
		lineHeight: '125%',
		textAlign: 'center',
		color: '#FFFFFF',
	},

	mainGreen: {
		color: getVariable['colors']['pageMainColor'],
	},

	mainDesc: {
		width: '560px',
		margin: '0 auto',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16.5px',
		lineHeight: '125%',
		textAlign: 'center',
		letterSpacing: '0.15px',
		color: '#FFFFFF',
		marginTop: '25.5px',
	},

	buttonsDiv: {
		margin: '0 auto',
		marginTop: '25.5px',
		width: '350px',
		height: '42px',
		position: 'relative',
	},

	leftButtonDiv: {
		float: 'left',
		height: '100%',
		width: '48%',
		position: 'relative',
	},

	rightButtonDiv: {
		float: 'right',
		height: '100%',
		width: '48%',
		position: 'relative',
	},

	leftButton: {
		width: '100%',
		height: '100%',
		background: getVariable['colors']['pageMainColor'],
		boxShadow: 'none',
		borderRadius: '7.5px',
		transition: `background ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			background: getVariable['colors']['pageMainColorHover'],
			boxShadow: 'none',
		},

		'& p': {
			fontFamily: 'Krona One',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '12px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	rightButton: {
		width: '100%',
		height: '100%',
		background: 'none',
		border: `2px solid ${getVariable['colors']['pageMainColor']}`,
		boxShadow: 'none',
		borderRadius: '7.5px',
		transition: `border ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			background: 'none',
			border: `2px solid ${getVariable['colors']['pageMainColorHover']}`,
			boxShadow: 'none',
		},

		'& p': {
			fontFamily: 'Krona One',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '12px',
			lineHeight: '100%',
			textTransform: 'none',
			color: '#FFFFFF',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	telegramIcon: {
		width: '19px',
		height: 'auto',
		color: '#FFFFFF',
		marginRight: '6px',
	},

	presaleIcon: {
		width: '19px',
		height: 'auto',
		color: '#FFFFFF',
		marginRight: '6px',
	},

	bottomSection: {
		margin: '0 auto',
		marginTop: '150px',
		position: 'relative',
		width: '739px',
		height: '705px',
		pointerEvents: 'none',
	},

	bottomSectionImage: {
		width: '100%',
		height: '100%',
		position: 'relative',
		top: '0px',
		transition: 'top 1s',

		'&:hover': {
			top: '-20px',
		},
	},

	bottomCircle1: {
		width: '322px',
		height: '322px',
		position: 'absolute',
		left: '20%',
		//top: '-100px',
		animation: '$animateCircle1 8s ease infinite',
	},

	'@keyframes animateCircle1': {
		'0%': {
			top: '-100px',
		},

		'50%': {
			top: '-200px',
		},

		'100%': {
			top: '-100px',
		},
	},

	bottomCircle2: {
		width: '322px',
		height: '322px',
		position: 'absolute',
		left: '-5%',
		//top: '150px',
		animation: '$animateCircle2 12s ease infinite',
	},

	'@keyframes animateCircle2': {
		'0%': {
			top: '150px',
		},

		'50%': {
			top: '50px',
		},

		'100%': {
			top: '150px',
		},
	},

	bottomCircle3: {
		width: '322px',
		height: '322px',
		position: 'absolute',
		right: '-5%',
		top: '80px',
		animation: '$animateCircle3 10s ease infinite',
	},

	'@keyframes animateCircle3': {
		'0%': {
			top: '80px',
		},

		'50%': {
			top: '-20px',
		},

		'100%': {
			top: '80px',
		},
	},

	// >> Responsive scale
	// 1600px
	['@media (max-width: 1600px)']: {
		insideDiv: {
			width: '1044px',
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

		bottomSection: {
			marginTop: '150px',
			width: '100%',
			height: 'auto',
		},
	},

	// 790px
	['@media (max-width: 790px)']: {
		insideDiv: {
			marginTop: '60px',
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
		mainTitle: {
			fontSize: '40px',
			lineHeight: '125%',
		},

		mainDesc: {
			fontSize: '14.5px',
			lineHeight: '135%',
		},

		bottomCircle1: {
			width: '222px',
			height: '222px',
		},

		bottomCircle2: {
			width: '222px',
			height: '222px',
		},

		bottomCircle3: {
			width: '222px',
			height: '222px',
		},
	},

	// 505px
	['@media (max-width: 505px)']: {
		mainTitle: {
			fontSize: '36px',
			lineHeight: '125%',
		},
	},

	// 400px
	['@media (max-width: 400px)']: {
		buttonsDiv: {
			width: '90%',
			height: '90px',
		},

		leftButtonDiv: {
			height: '48%',
			width: '100%',
		},

		rightButtonDiv: {
			height: '48%',
			width: '100%',
			marginTop: '4%',
		},
	},
});

export default useStyles;
