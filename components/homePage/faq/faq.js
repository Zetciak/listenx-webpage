// >> Modules
import getVariable from '../../globalVariables';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Button,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { useState } from 'react';

// >> Styles
import useStyles from './faqStyle';
import useGlobalStyles from '../../globalStyle';

const StyledAccordion = withStyles({
	root: {
		'&:before': {
			display: 'none',
		},

		background: 'none',
		border: 'none',
		boxShadow: 'none',
		transition: 'all .3s',

		'&$expanded': {
			marginTop: '0px',
		},
	},

	expanded: {},
})(Accordion);

// >> Variables
const data = [
	{
		title: 'What is ListenFi?',
		desc: 'ListenFi is a mobile app that enables ordinary people to earn tokens by listening to music. We strive to make lives easier, adding tokens to the daily budget. So skip other music apps and come to ListenFi.',
	},
	{
		title: 'How much can you earn while using $LFI?',
		desc: 'You get paid for using to music on ListenFi. So we decided to introduce the hourly model. Each hour of listening to music is $4 in $LFI!. You can listen to max. 5 hours of music each day, so the maximum daily income is around $20.',
	},
	{
		title: 'What are the key features of ListenFi?',
		desc: 'Listen to music from the ListenFi mobile app and get paid in $LFI tokens. Explore algorithm mechanisms that help you discover new artists from the music world. Create playlists and use the song-queuing feature.',
	},
	{
		title: 'How do you plan to reach the network effect?',
		desc: 'Do you know how the influencer marketing looks like? If you have a good product, nobody will refuse to advertise it to the community. ListenFi is a universal product, so the range of influencers is really broad. In addition, anyone listens to music, so adding some extra user-earning features is an easy thing to sell.',
	},
];

// >> Script
function Faq() {
	// >> Variables
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="faq">
			<div className={styles.insideDiv} data-aos="zoom-in-up">
				<Typography className={styles.mainTitle} data-aos="zoom-in-up">
					Frequenly <span className={styles.mainGreen}>Asked</span>{' '}
					Questions
				</Typography>
				<Typography className={styles.mainDesc} data-aos="zoom-in-up">
					You have questions. We have answers.
				</Typography>

				<div className={styles.faqDiv}>
					{data.map((accordion, id) => {
						const { title, desc } = accordion;
						return (
							<div
								key={id}
								className={styles.oneAccordion}
								data-aos="fade-up"
							>
								<StyledAccordion
									expanded={expanded === id}
									key={id}
									onChange={handleChange(id)}
									square
								>
									<AccordionSummary
										expandIcon={
											<div
												className={
													expanded === id
														? `${styles.expandButton} ${styles.expandButtonExpanded}`
														: `${styles.expandButton}`
												}
											></div>
										}
									>
										<Typography
											className={
												expanded === id
													? `${styles.accordionTitleExpanded} ${styles.accordionTitle}`
													: `${styles.accordionTitle}`
											}
										>
											{title}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography
											className={styles.accordionDesc}
										>
											{desc}
										</Typography>
									</AccordionDetails>
								</StyledAccordion>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Faq;
