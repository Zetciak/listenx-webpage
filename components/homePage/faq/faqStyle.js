// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import roadmapLines from '../../../public/roadmapLines.png';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '4',
	},

	insideDiv: {
		width: '1244px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '180px',
	},

	mainTitle: {
		width: '660px',
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
		width: '630px',
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

	faqDiv: {
		width: '100%',
		position: 'relative',
		marginTop: '80px',
	},

	oneAccordion: {
		minHeight: '100px',
		paddingTop: '22px',
		paddingBottom: '10px',
		position: 'relative',

		'&:before': {
			position: 'absolute',
			content: '""',
			background: '#FFFFFF',
			opacity: '0.1',
			width: '100%',
			height: '1px',
			left: '0px',
			top: '0px',
		},

		'&:first-child': {
			'&:before': {
				opacity: '0',
			},
		},
	},

	accordionTitle: {
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '125%',
		color: '#ffffff',
		transition: 'color .5s',
		marginLeft: '-15px',
	},

	accordionTitleExpanded: {
		color: getVariable['colors']['pageMainColor'],
	},

	accordionDesc: {
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '12.5px',
		lineHeight: '125%',
		letterSpacing: '0.15px',
		color: '#ffffff',
		marginLeft: '-15px',
	},

	expandButton: {
		width: '21px',
		height: '3px',
		background: '#FFFFFF',
		transition: 'background .5s',

		'&:before': {
			position: 'absolute',
			content: '""',
			background: '#FFFFFF',
			width: '3px',
			height: '21px',
			left: '9px',
			top: '-9px',
			opacity: '1',
			transition: 'background .5s',
		},
	},

	expandButtonExpanded: {
		background: '#32DB74',

		'&:before': {
			opacity: '0',
			background: '#32DB74',
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

	// 850px
	['@media (max-width: 850px)']: {
		mainTitle: {
			width: '100%',
		},

		mainDesc: {
			width: '100%',
		},
	},

	// 770px
	['@media (max-width: 770px)']: {
		accordionTitle: {
			fontSize: '22px',
			paddingRight: '50px',
		},
	},
});

export default useStyles;
