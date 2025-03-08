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
									<h3>Bentley Systems</h3>
									<h3>Associate Software Engineer</h3>
									<h4>July 2024 - Current</h4>
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
										<span className={career.subList}><span className={career.bullet}></span>Redesigned & Implemented the Internal Diagnostic Reports API Service (V3) end-to-end in C#, ensuring reverse compatibility and improving performance. Also, developed unit and integration tests, enhancing test coverage and reliability.</span>
									</li>
									<li>
										{/* Inventory management reporting and automation  */}
										<span className={career.subList}><span className={career.bullet}></span>Integrated Open Telemetry for API services, enhancing logs, metrics, and traces to improve observability by 50%. Also, configured Azure Application Insights for powerful analytics and visualization.</span>
									</li>
									<li>
										{/* Sales management plugin with AJAX shopping cart integration */}
										<span className={career.subList}><span className={career.bullet}></span>Resolved & Optimized UI issues in React, upgrading to the latest iTwinUI version for better performance and user experience.</span>
									</li>
									<li>
										{/* Bespoke ID verification software and WooCommerce integration */}
										<span className={career.subList}><span className={career.bullet}></span>Developed & Deployed Version 3 of a New Diagnostic Reports API on Azure API Management (APIM), managing end-to-end development, testing, and CI/CD pipelines for automated build, deployment, and release.</span>
									</li>
								</ul>
								<Badges list={ASE} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					
						<div className={career.position}>
							<div className={career.positionContent}>
									<span class={career.positionHeader}>
									<h3>Bentley Systems</h3>
										<h3>Software Engineer Intern</h3>
										<h4>Jan 2024 - Jul 2024 · 6 mos</h4>
									</span>
								<p>
									Some key contributions during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										{/* Full functionality interactive shopping cart to replace cart page */}
										<span className={career.subList}><span className={career.bullet}></span>Designed & Implemented an end-to-end CI/CD pipeline for a C# .NET project using Azure DevOps, reducing manual intervention by 60% and accelerating deployment efficiency.</span>
									</li>
									<li>
										{/* Complex multi-state animated menus represented in an elegant UI  */}
										<span className={career.subList}><span className={career.bullet}></span>Integrated & Managed Mend and Veracode security scans, identifying and resolving vulnerabilities in API services and UI projects, enhancing application security by 10%.</span>
									</li>
									<li>
										{/* Design and development of the site and merchandising strategy optimized for market */}
										<span className={career.subList}><span className={career.bullet}>
											</span>Enhanced API services to efficiently handle Seq logs, optimizing the logging structure for better troubleshooting and faster debugging.</span>
									</li>
									<li>
										{/* Design and development of the site and merchandising strategy optimized for market */}
										<span className={career.subList}><span className={career.bullet}>
											</span>Increased test coverage to 80% by writing unit and integration tests in C# .NET, ensuring higher code reliability and stability. Also, integrated Azure API Management (APIM) to enhance API security and monitoring.</span>
									</li>
								</ul>
								<Badges list={INTERN} block="stack" fullContainer="fullContainer"/>
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

const ASE	= [
	{ key: 'typescript', 	name: 'Typescript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'csharp', 		name: 'C#', 			type: 'devicon' },
	{ key: 'dotnetcore', 			name: 'dotnet', 				type: 'devicon' },
	{ key: 'devops', 		name: 'DevOps', 				type: 'devicon' },
	{ key: 'azure', 			name: 'azure', 				type: 'devicon' },
	{ key: 'docker', 			name: 'Docker', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'postman-plain', 		name: 'Postman', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const INTERN	= [
	{ key: 'typescript', 	name: 'Typescript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'csharp', 		name: 'C#', 			type: 'devicon' },
	{ key: 'dotnetcore', 			name: 'dotnet', 				type: 'devicon' },
	{ key: 'devops', 		name: 'DevOps', 				type: 'devicon' },
	{ key: 'azure', 			name: 'azure', 				type: 'devicon' },
	{ key: 'docker', 			name: 'Docker', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'postman-plain', 		name: 'Postman', 				type: 'devicon' },
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