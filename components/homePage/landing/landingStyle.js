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
		width: '1448px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '0px',
	},
});

export default useStyles;
