// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am currently leading, architecting, and developing all digital and software engineering projects across the Full Stack, Flutter, and DevOps domains."
				/>
				<section className={career.area}>
					{/* <article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>My Supply Co.</h3>
								<h4>Permanent Full-time</h4>
								<h4>Apr 2019 - Present · 3 yrs 10 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
							</span>
							<p>
							My Supply Co. helps Canadians manage mental and physical health with naturally occurring nootropic and adaptogenic products. They carry products with complex attributes, aiming to solve a large variety of personal care needs — this requires an extremely customized and evolving approach to how the store is built and functions.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article> */}

					<article className={career.companyPositions}>
						{/* <div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Easyryt</h3>
									<h3>Software Development Engineer Intern</h3>
									<h4>May 2023 - August 2023 · 4 Months</h4>
								</span>
								{/* <p>
								As the lead full stack developer I am responsible for all software development, CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was tasked with identifying and analyzing weak points in the customer journey and employee workflows. Each project had to be estimated and prioritized based on its workload and immediate impact to efficiency or revenue. Some of these projects have been so successful internally that we have planned refactoring for commercialization. 
								</p> */}
								<p>
								My key contributions during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										{/* Product attribute and settings automated testing */}
										<span className={career.subList}><span className={career.bullet}></span>Developed an Admin Panel with 10+ key features using React, including user authentication, real-time data synchronization, and interactive dashboards. This implementation improved user engagement and administrative efficiency by 30%. </span>
									</li>
									<li>
										{/* Inventory management reporting and automation  */}
										<span className={career.subList}><span className={career.bullet}></span>Contributed to designing and maintaining REST APIs for backend applications, resulting in a 40% improvement in response times and a 25% increase in scalability. Implemented advanced security measures, reducing vulnerability exposure by 15%.</span>
									</li>
									<li>
										{/* Sales management plugin with AJAX shopping cart integration */}
										<span className={career.subList}><span className={career.bullet}></span>Collaborated with a cross-functional team to address and resolve 20+ technical issues, ensuring smooth integration between frontend and backend systems. Enhanced the overall system reliability and performance by 20%.</span>
									</li>
									<li>
										{/* Bespoke ID verification software and WooCommerce integration */}
										<span className={career.subList}><span className={career.bullet}></span>Acquired hands-on experience with technologies such as React, Node.js, Express.js, and MongoDB. Utilized version control with Git, containerization with Docker, and automated testing to streamline development processes and maintain high code quality.</span>
									</li>
									<li>
										{/* Bespoke ID verification software and WooCommerce integration */}
										<span className={career.subList}><span className={career.bullet}></span>Participated in multiple workshops and webinars on emerging technologies, including DevOps practices and cloud computing. Applied newly acquired skills to optimize project workflows and incorporate innovative solutions.</span>
									</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					
						<div className={career.position}>
							<div className={career.positionContent}>
									<span class={career.positionHeader}>
									<h3>Zigy.in</h3>
										<h3>Software Engineer Intern</h3>
										<h4>Jul 2022 - Sep 2022 · 3 mos</h4>
									</span>
								{/* <p>
									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
								</p> */}
								<p>
									Some key contributions during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										{/* Full functionality interactive shopping cart to replace cart page */}
										<span className={career.subList}><span className={career.bullet}></span>Engaged in full-stack development tasks, including frontend design and backend architecture. Leveraged expertise in React, Node.js, MongoDB, and Flutter to build seamless, end-to-end solutions that met project requirements and client expectations.</span>
									</li>
									<li>
										{/* Complex multi-state animated menus represented in an elegant UI  */}
										<span className={career.subList}><span className={career.bullet}></span>Created and maintained APIs for the E-Commerce app, facilitating smooth communication between the frontend and backend. Authored comprehensive API documentation, improving developer onboarding and reducing integration errors by 40%.</span>
									</li>
									<li>
										{/* Design and development of the site and merchandising strategy optimized for market */}
										<span className={career.subList}><span className={career.bullet}>
											</span>Spearheaded the integration of backend services with a Flutter frontend, coordinating with the development team to streamline processes. Reviewed and optimized integration points, resulting in a 25% enhancement in application performance. </span>
									</li>
									<li>
										{/* Design and development of the site and merchandising strategy optimized for market */}
										<span className={career.subList}><span className={career.bullet}>
											</span>Designed and implemented a robust backend for an E-Commerce application using Node.js and MongoDB. Ensured 100% compliance with industry best practices, achieving a 50% reduction in downtime and a 30% increase in data handling efficiency.</span>
									</li>
									<li>
										{/* Design and development of the site and merchandising strategy optimized for market */}
										<span className={career.subList}><span className={career.bullet}>
											</span>Utilized modern development practices such as version control with Git, automated testing, and containerization with Docker. Implemented these practices to streamline workflows, improve code quality, and accelerate deployment cycles.</span>
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>
{/* 
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Another Creative Ltd.</h3>
								<h4>Contract Part-time</h4>
								<h4>Jun 2016 - Present · 6 yrs 8 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
							</span>
							<p>
							Another Creative is a full stack agency that helps deliver exceptional digital experiences to small and medium businesses. Branding, Marketing, and Web/Software Development.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>West Coast Electronics</h3>
								<h4>Permanent Full-time</h4>
								<h4>Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
							</span>
							<p>I was the Electronics Wizard 🧙‍♂️</p>
							<p>West Coast Electronics was a repair shop that fixed computers, consoles, and cell phones.</p>
						</div>
						<div className={career.companyAlt}></div>
					</article> */}
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'expressjs', 			name: 'ExpressJs', 				type: 'devicon' },
	{ key: 'amazonwebservices', 	name: 'aws', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'docker', 			name: 'Docker', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'postman', 		name: 'Postman', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const stack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'flutter', 			name: 'Flutter', 				type: 'devicon' },
	{ key: 'firebase', 	name: 'Firebase', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]