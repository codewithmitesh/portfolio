import FeaturedProject from '../../blocks/projects/featured'
import { useState } from 'react';
import { useRouter } from 'next/router';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function FeaturedProjects() {
	const [showAll, setShowAll] = useState(false);
	const router = useRouter();

	const handleViewMore = () => {
		setShowAll(true);
		router.push('/projects'); // Redirect to the projects page
	};
	return (
		<Section classProp={css.hasBg}>
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="Full Stack and Flutter"
					subTitle="Solving Problems, driven by the engineering."
				/>
				{/* {
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				} */}
				{content.slice(0, showAll ? content.length : 2).map((data, index) => {
					return <FeaturedProject content={data} index={index} key={index} />;
				})}
				{/* {!showAll && (
					<button   onClick={handleViewMore}
					 className="m-1 p-1 py-1 bg-transparent text-pink font-semibold shadow-md hover:bg-gray-900 hover:text-white text-center focus:outline-none focus:ring-2  
					 rounded-lg "
					 >
						View More
					</button>
				)} */}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}