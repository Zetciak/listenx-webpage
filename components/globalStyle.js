// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from './globalVariables';

// >> Styling
const useGlobalStyles = makeStyles({
	container: {
		width: '100%',
		minHeight: '100vh',
		position: 'relative',
		overflow: 'hidden',
		background: getVariable['colors']['backgroundColor'],
	},
});

export default useGlobalStyles;
