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
		marginTop: '100px',

		display: 'flex',
		flexFlow: 'row wrap',
		alignContent: 'space-between',
		justifyContent: 'space-between',
	},

	oneLogo: {
		position: 'relative',
		display: 'inline-block',
		width: '25%',
		height: 'auto',
		opacity: '.5',
		transition: `opacity ${getVariable['numbers']['transitionTime']}`,
		marginBottom: '15px',

		'&:hover': {
			opacity: '1',
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

	// 900px
	['@media (max-width: 900px)']: {
		oneLogo: {
			width: '50%',
			marginBottom: '30px',
		},
	},

	// 600px
	['@media (max-width: 900px)']: {
		oneLogo: {
			width: '100%',
			marginBottom: '50px',
		},
	},
});

export default useStyles;
