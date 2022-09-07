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
		marginTop: '191px',
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

	buttonDiv: {
		width: '180px',
		height: '42px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '25.5px',
	},

	button: {
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

	linkIcon: {
		width: '19px',
		height: 'auto',
		color: '#FFFFFF',
		marginRight: '6px',
		transform: 'rotate(-45deg)',
	},

	bottomSection: {
		width: '700px',
		height: '833px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '10px',
		transform: 'rotate(3.09deg)',
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
		width: '280px',
		height: '280px',
		position: 'absolute',
		left: '35%',
		//top: '-70px',
		animation: '$animateCircle1 8s ease infinite',
	},

	'@keyframes animateCircle1': {
		'0%': {
			top: '-70px',
		},

		'50%': {
			top: '0px',
		},

		'100%': {
			top: '-70px',
		},
	},

	bottomCircle2: {
		width: '322px',
		height: '322px',
		position: 'absolute',
		left: '12%',
		//top: '280px',
		animation: '$animateCircle2 10s ease infinite',
	},

	'@keyframes animateCircle2': {
		'0%': {
			top: '280px',
		},

		'50%': {
			top: '210px',
		},

		'100%': {
			top: '280px',
		},
	},

	bottomCircle3: {
		width: '322px',
		height: '322px',
		position: 'absolute',
		right: '0%',
		//top: '200px',
		animation: '$animateCircle3 12s ease infinite',
	},

	'@keyframes animateCircle3': {
		'0%': {
			top: '200px',
		},

		'50%': {
			top: '130px',
		},

		'100%': {
			top: '200px',
		},
	},

	// >> Responsive scale
	// 1600px
	['@media (max-width: 1600px)']: {
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

	// 1000px
	['@media (max-width: 1000px)']: {
		bottomSection: {
			marginTop: '150px',
		},
	},

	// 900px
	['@media (max-width: 900px)']: {
		bottomSection: {
			marginTop: '250px',
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
			width: '100%',
			height: 'auto',
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
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

	// 500px
	['@media (max-width: 500px)']: {
		bottomCircle2: {
			display: 'none',
		},
		bottomCircle3: {
			display: 'none',
		},
	},
});

export default useStyles;
