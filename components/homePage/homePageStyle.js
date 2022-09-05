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
	},

	backgroundDivInside: {
		width: '1920px',
		margin: '0 auto',
		position: 'relative',
	},

	componentsDiv: {
		position: 'relative',
		'z-index': '3',
	},

	// >> Responsive scale
	// 1920px
	['@media (max-width: 1920px)']: {
		bgDivInside: {
			width: '100%',
		},
	},
});

export default useStyles;
