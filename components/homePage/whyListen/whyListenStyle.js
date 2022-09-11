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
		background: 'rgba(255, 255, 255, 0.05)',
		padding: '146px 0',
		marginTop: '120px',
	},

	insideDiv: {
		width: '1392px',
		margin: '0 auto',
		position: 'relative',
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
		width: '500px',
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

	youtubeDiv: {
		width: '840px',
		height: '450px',
		margin: '0 auto',
		position: 'relative',
		background: 'linear-gradient(90deg, #32C671 -6.52%, #31C06F 137.5%)',
		padding: '16px',
		borderRadius: '25.5px',
		marginTop: '67.5px',
	},

	youtube: {
		width: '100%',
		height: '100%',
		borderRadius: '9.5px',
		border: 'none',
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

	// 1000px
	['@media (max-width: 1000px)']: {
		youtubeDiv: {
			width: '100%',
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
	},
});

export default useStyles;
