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
		height: '108px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '0px',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',

		'&:after': {
			position: 'absolute',
			content: '""',
			background: '#ffffff',
			opacity: '.1',
			width: '100%',
			height: '1px',
			bottom: '0px',
		},
	},

	leftSection: {
		marginTop: '39px',
		width: '110px',
		height: '36px',
		position: 'relative',
	},

	centerSection: {
		marginTop: '48px',
		position: 'relative',
	},

	oneCenterElement: {
		display: 'inline-block',
		marginRight: '31px',

		'& p': {
			fontFamily: 'Krona One',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '12px',
			lineHeight: '100%',
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

	rightSection: {
		marginTop: '36px',
		position: 'relative',
	},

	button: {
		width: '154px',
		height: '42px',
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
		width: '17px',
		height: 'auto',
		color: '#FFFFFF',
		marginRight: '6px',
		transform: 'rotate(0deg)',
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

	// 1126px
	['@media (max-width: 1126px)']: {
		centerSection: {
			display: 'none',
		},

		rightSection: {
			display: 'none',
		},

		leftSection: {
			margin: '0 auto',
			marginTop: '39px',
		},
	},
});

export default useStyles;
