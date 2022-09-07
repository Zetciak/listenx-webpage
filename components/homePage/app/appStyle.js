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
		marginTop: '200px',
	},

	leftSection: {
		float: 'left',
		width: '50%',
		position: 'relative',
		height: '714px',
	},

	rightSection: {
		float: 'right',
		width: '50%',
		marginTop: '235px',
		position: 'relative',
	},

	imageDiv: {
		width: '882px',
		height: '714px',
		position: 'absolute',
		right: '0px',
	},

	mainTitle: {
		width: '530px',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '36px',
		lineHeight: '125%',
		textAlign: 'right',
		color: '#FFFFFF',
		float: 'right',
	},

	mainGreen: {
		color: getVariable['colors']['pageMainColor'],
	},

	mainDesc: {
		width: '480px',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '13.5px',
		lineHeight: '125%',
		textAlign: 'right',
		letterSpacing: '0.15px',
		color: '#FFFFFF',
		marginTop: '25.5px',
		clear: 'both',
		float: 'right',
	},

	buttonDiv: {
		width: '172px',
		height: '42px',
		position: 'relative',
		clear: 'both',
		float: 'right',
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
		leftSection: {
			width: '100%',
			height: 'auto',
			marginTop: '200px',
		},

		imageDiv: {
			width: '100%',
			height: 'auto',
			position: 'relative',
			right: '0px',
		},

		rightSection: {
			float: 'left',
			width: '100%',
			marginTop: '0px',
		},

		mainTitle: {
			width: '100%',
			textAlign: 'center',
		},

		mainDesc: {
			width: '100%',
			textAlign: 'center',
			paddingBottom: '25.5px',
		},

		buttonDiv: {
			margin: '0 auto',
			float: 'none',
			clear: 'both',
		},
	},
});

export default useStyles;
