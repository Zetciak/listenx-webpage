// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import appStore from '../../../public/appStore.png';
import googlePlay from '../../../public/googlePlay.png';

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
		marginTop: '178px',
	},

	sliders: {
		marginTop: '110px',
		width: '100%',
		maxWidth: '1920px',
		margin: '0 auto',
		position: 'relative',
	},

	marquee: {
		width: '100%',
		position: 'relative',
		transform: 'rotate(-2.3deg)',
		marginBottom: '22px',
		overflow: 'visible !important',
	},

	oneBanner: {
		width: '301px',
		height: '355px',
		borderRadius: '65.25px',
		position: 'relative',
		marginRight: '16.5px',
		backgroundSize: 'cover !important',
		top: '0px',
		transition: `top ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			top: '-15px',
		},
	},

	bottomInfos: {
		marginTop: '255px',
		marginLeft: '17px',
		float: 'left',
		width: '183px',
		height: '61px',
		background: 'rgba(0, 0, 0, 0.25)',
		//backdropFilter: 'blur(15px)',
		borderRadius: '9px',
		position: 'relative',
	},

	bottomButtonDiv: {
		width: '57px',
		height: '57px',
		float: 'left',
		marginTop: '255px',
		marginLeft: '16px',
		position: 'relative',
	},

	titleText: {
		width: '100%',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '13.5px',
		lineHeight: '100%',
		textAlign: 'left',
		color: '#FFFFFF',
		marginTop: '12px',
		marginLeft: '10px',
	},

	authorText: {
		width: '100%',
		fontFamily: 'Krona One',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '13.5px',
		lineHeight: '100%',
		textAlign: 'left',
		color: '#EBEBEB',
		marginTop: '10px',
		marginLeft: '10px',
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
		width: '471px',
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

	buttonsDiv: {
		width: '324px',
		height: '51px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '25.5px',
	},

	googlePlayButtonDiv: {
		width: '48%',
		height: '100%',
		float: 'left',
		position: 'relative',
	},

	googlePlayButton: {
		width: '100%',
		height: '100%',
		background: `url(${googlePlay.src})`,
		backgroundSize: '100% 100%',
		boxShadow: 'none',
		opacity: '1',
		transition: `opacity ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			background: `url(${googlePlay.src})`,
			backgroundSize: '100% 100%',
			boxShadow: 'none',
			opacity: '.8',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	appStoreButtonDiv: {
		width: '48%',
		height: '100%',
		float: 'right',
		position: 'relative',
	},

	appStoreButton: {
		width: '100%',
		height: '100%',
		background: `url(${appStore.src})`,
		backgroundSize: '100% 100%',
		boxShadow: 'none',
		opacity: '1',
		transition: `opacity ${getVariable['numbers']['transitionTime']}`,

		'&:hover': {
			background: `url(${appStore.src})`,
			backgroundSize: '100% 100%',
			boxShadow: 'none',
			opacity: '.8',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	bottomButtonIcon: {
		width: '28px',
		height: 'auto',
		color: '#FFFFFF',
	},

	bottomButton: {
		width: '100%',
		height: '100%',
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
	},

	// >> Responsive scale
	// 1600px
	['@media (max-width: 1600px)']: {
		insideDiv: {
			width: '1044px',
		},

		imageDiv: {
			right: '150px',
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

	// 390px
	['@media (max-width: 390px)']: {
		buttonsDiv: {
			width: '155px',
			height: '70px',
		},

		googlePlayButtonDiv: {
			width: '100%',
			height: '51px',
		},

		appStoreButtonDiv: {
			width: '100%',
			height: '51px',
			marginTop: '10px',
		},
	},
});

export default useStyles;
