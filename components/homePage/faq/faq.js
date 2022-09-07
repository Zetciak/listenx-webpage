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
		title: '1 Frequenly Asked Questions',
		desc: '1 We are something new in WEB3 industry. Be part of our community and enjoy productWe are something We are something new in WEB3 industry. Be part of our community and enjoy productWe are something',
	},
	{
		title: '2 Frequenly Asked Questions',
		desc: '2 We are something new in WEB3 industry. Be part of our community and enjoy productWe are something We are something new in WEB3 industry. Be part of our community and enjoy productWe are something',
	},
	{
		title: '3 Frequenly Asked Questions',
		desc: '3 We are something new in WEB3 industry. Be part of our community and enjoy productWe are something We are something new in WEB3 industry. Be part of our community and enjoy productWe are something',
	},
	{
		title: '4 Frequenly Asked Questions',
		desc: '4 We are something new in WEB3 industry. Be part of our community and enjoy productWe are something We are something new in WEB3 industry. Be part of our community and enjoy productWe are something',
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
					We are something new in WEB3 industry. Be part of our
					community and enjoy productWe are something
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
