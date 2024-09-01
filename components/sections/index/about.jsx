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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that spans Full Stack development, Flutter, DevOps, and blockchain technology, I am a well-rounded digital innovator committed to delivering impactful solutions."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/Personal/2.jpg" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my technical expertise in Full Stack development, Flutter, and DevOps, I bring strong problem-solving, collaboration, and project management skills—sharpened through my experiences in team-based projects and hackathons. When I’m not coding, I’m exploring new technologies like blockchain or sharing my knowledge through content creation. I am confident in my ability to bring innovation and value to every project I undertake."
						/>
						<BadgesBlock 
							title="Architecting Secure and Scalable Systems" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my key passions is planning the infrastructure of a project. From automated pipelines to security protocols, I excel at integrating DevOps practices that ensure robust, secure, and efficient deployments."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Software Development', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Security', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'DevOps', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Scaling', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Optimizing Operations', 		type: 'fad' },
]