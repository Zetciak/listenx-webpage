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
		paddingBottom: '50px',
	},

	insideDiv: {
		width: '1392px',
		height: '108px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '77px',
	},

	topSection: {
		width: '100%',
		position: 'relative',
	},

	topLeftSection: {
		float: 'left',
		position: 'relative',
	},

	topRightSection: {
		float: 'right',
		position: 'relative',
	},

	logoDiv: {
		width: '120px',
		height: '36px',
		float: 'left',
		marginTop: '22px',
	},

	topLeftMenu: {
		float: 'left',
		marginLeft: '60px',
		marginTop: '33px',
	},

	oneMenuElement: {
		display: 'inline-block',
		marginRight: '22px',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '100%',
			letterSpacing: '0.15px',
			color: 'rgba(255, 255, 255, 0.75)',
			transition: `color ${getVariable['numbers']['transitionTime']}`,
		},

		'&:hover': {
			cursor: 'pointer',
			'& p': {
				color: 'rgba(255, 255, 255, 1)',
			},
		},

		'&:last-child': {
			marginRight: '0px',
		},
	},

	topRightButton: {
		width: '36px',
		height: '36px',
		position: 'relative',
		float: 'left',
		marginRight: '10px',
		marginTop: '30px',
		background: getVariable['colors']['pageMainColor'],
		boxShadow: 'none',
		borderRadius: '100%',
		transition: `background ${getVariable['numbers']['transitionTime']}`,
		border: '1px solid #ffffff',

		'&:hover': {
			background: getVariable['colors']['pageMainColorHover'],
			boxShadow: 'none',
		},

		'& span': {
			color: '#FFFFFF',
		},

		'&:last-child': {
			marginRight: '0px',
		},
	},

	topRightButtonImage: {
		width: '100%',
		height: '100%',
	},

	centerLine: {
		width: '100%',
		height: '1px',
		background: '#FFFFFF',
		opacity: '0.2',
		marginTop: '22px',
		float: 'left',
		position: 'relative',
	},

	bottomSection: {
		width: '100%',
		position: 'relative',
		marginTop: '22px',
		float: 'left',
	},

	leftBottomText: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '100%',
		letterSpacing: '0.15px',
		color: '#ffffff',
		float: 'left',
	},

	leftBottomGreen: {
		color: getVariable['colors']['pageMainColor'],
	},

	bottomRightElements: {
		float: 'right',
	},

	oneBottomRight: {
		marginRight: '24px',
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '100%',
		letterSpacing: '0.15px',
		color: 'rgba(255, 255, 255, 0.75)',
		transition: `color ${getVariable['numbers']['transitionTime']}`,
		float: 'left',

		'&:hover': {
			cursor: 'pointer',

			color: 'rgba(255, 255, 255, 1)',
		},

		'&:last-child': {
			marginRight: '0px',
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

	// 1050px
	['@media (max-width: 1050px)']: {
		topLeftMenu: {
			display: 'none',
		},
	},

	// 680px
	['@media (max-width: 680px)']: {
		leftBottomText: {
			width: '100%',
			textAlign: 'center',
		},

		bottomRightElements: {
			width: '333px',
			margin: '0 auto',
			marginTop: '35px',
			float: 'none',
			clear: 'both',
		},
	},

	// 400px
	['@media (max-width: 400px)']: {
		bottomRightElements: {
			width: '100%',
			marginTop: '25px',
		},

		oneBottomRight: {
			width: '100%',
			textAlign: 'center',
			marginTop: '10px',
		},
	},
});

export default useStyles;
