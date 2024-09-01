// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a Full Stack Developer and DevOps Engineer, I build efficient, scalable digital solutions using a wide range of modern technologies."
				/>
				
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Tech-Driven Expertise"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a robust foundation in Full Stack development, Flutter, and DevOps, I bring a comprehensive approach to every project. I am committed to continuous learning, staying at the forefront of emerging technologies, and applying best practices to deliver high-quality results."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Technologies I Excel In" 
							copy="From designing responsive user interfaces to architecting secure back-end systems, I thrive on solving complex challenges. My expertise spans the entire tech stack, ensuring that every aspect of a project is optimized for performance and reliability."
							list={tech}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Software and Tools I Trust " 
							copy="Throughout my journey, I've gained proficiency in a variety of software and tools essential for building top-tier applications. This knowledge enables me to create robust, user-centric solutions that stand out in the digital landscape."
							list={software} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
						{/* /img/dataism-24.svg */}
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Click Up', 			type: 'fas' },
	{ key: 'aftereffects',	name: 'Linux', 		type: 'devicon' },
	{ key: 'premierepro',	name: 'Premiere Pro', 		type: 'devicon' },
	{ key: 'python',		name: 'AWS', 			type: 'fad' },
	{ key: 'bitcoin'		,name: 'Metamask', 			type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'typescript',    name: 'Typescript', 			type: 'devicon' },
	{ key: 'docker', 		name: 'Docker', 				type: 'devicon' },
	{ key: 'aws', 			name: 'aws', 			type: 'devicon' },
	{ key: 'terraform', 	name: 'Terraform', 		type: 'devicon' },
	{ key: 'github', 		name: 'CICD', 		type: 'devicon' },
	
	{ key: 'flutter', 		name: 'Flutter', 		type: 'devicon' },
	{ key: "google",		name: "Kubernetes", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'blockchain', 		name: 'Blockchain', 		type: 'devicon' },
]