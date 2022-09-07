// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from './globalVariables';

// >> Styling
const useGlobalStyles = makeStyles({
	container: {
		width: '100%',
		//minHeight: '1500vh',
		position: 'relative',
		overflow: 'hidden',
		background: getVariable['colors']['backgroundColor'],
		backgroundSize: '100%',
	},
});

export default useGlobalStyles;
