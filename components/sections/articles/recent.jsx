import Section from '../../structure/section';
import Container from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {
	console.log(mediumArticles)
	// const feed 		= mediumArticles.feed
	// const articles 	= mediumArticles.items
	// console.log(articles)
	return (
		<Section classProp="borderBottom">
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Achievements and Interests "
					preTitle="Informative"
					subTitle="My Few Achievements and Interests 😊"
				/>
				<section className={css.projects}>
					{
						mediumArticles.map(({ title, pubDate, description, tags, link, author, thumbnail }, index) => {
							console.log(thumbnail)
							// const date = new Date(pubDate).toDateString()
							return (
								<>
									<article key={index} className={css.project}>
										<span className='h-100 w-100 '>
											<img className='object-scale-down' src={thumbnail} alt=""  />
										</span>
										{/* <Image
											src={thumbnail}
											alt=""
											width={150}
											height={150}
											objectFit='contain'
											className={css.featuredImage}
										/> */}
										<span className={css.header}>
											<a href={link} rel="noreferrer" target="_blank">{title} <Icon icon={['fad', 'arrow-up-right-from-square']} /></a>
										</span>
										<span className={css.descriptionContainer}>
											<p>{description}</p>
										</span>
										<span className={css.details}>
											<p>By {author}</p>
											{/* <p className={css.pushedAt}>{date}</p> */}
										</span>
										<span className={css.topicsContainer}>
											{
												tags.map((e, index) => {
													return (<span key={index} className={css.topics}><Icon icon={['fab', 'medium']} /> {e}</span>)
												})
											}
										</span>
									</article>
								</>
							)
						})
					}
				</section>
			</Container>
		</Section>
	)
}