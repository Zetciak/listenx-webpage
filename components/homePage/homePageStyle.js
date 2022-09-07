// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from '../globalVariables';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	backgroundDiv: {
		width: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		'z-index': '2',
		pointerEvents: 'none',
	},

	backgroundDivInside: {
		width: '1920px',
		margin: '0 auto',
		position: 'relative',
	},

	componentsDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
		'z-index': '3',

		'&:before': {
			position: 'absolute',
			content: '""',
			background: 'url(https://i.imgur.com/X2HOZtE.png)',
			backgroundSize: '100%',
			width: '1392px',
			height: '1500vh',
			left: '0',
			right: '0',
			margin: '0 auto',
		},
	},

	circleDiv: {
		width: '1744px',
		height: '1744px',
		position: 'absolute',
	},

	// >> Responsive scale
	// 1920px
	['@media (max-width: 1920px)']: {
		backgroundDivInside: {
			width: '100%',
		},
	},

	// 1600px
	['@media (max-width: 1600px)']: {
		componentsDiv: {
			'&:before': {
				width: '1044px',
			},
		},
	},

	// 1200px
	['@media (max-width: 1200px)']: {
		componentsDiv: {
			'&:before': {
				width: '90%',
			},
		},
	},
});

export default useStyles;
