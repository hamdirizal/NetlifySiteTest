<script>
	import SectionContentAndImage from '/src/sections/SectionContentAndImage.svelte';
	import SectionIndividualSolutionIntroGallery from '/src/sections/SectionIndividualSolutionIntroGallery.svelte'
	import SectionAccordion from '/src/sections/SectionAccordion.svelte'
	import SectionTypes from '/src/sections/SectionTypes.svelte'
	import SectionBreadcrumbs from '/src/sections/SectionBreadcrumbs.svelte'
	import SectionFeaturedSolutions from '/src/sections/SectionFeaturedSolutions.svelte'
	import SectionBlogFeatured from '/src/sections/SectionBlogFeatured.svelte'
	import SectionConfigurator from '/src/sections/SectionConfigurator.svelte'
	import SectionDownloadEbook from '/src/sections/SectionDownloadEbook.svelte'
	import SectionLastCta from '/src/sections/SectionLastCta.svelte'

	let breadcrumbsData = [
		{
			title: 'Solutions',
			url: '/solutions',
		},
		{
			title: 'Kitchen',
			url: '/solutions/kitchen',
		},
		{
			title: 'Lazy Susan',
			url: '',
		},
	];

	let typesData = [
		{
			title: 'D-Shaped',
			description: 'This design has one flat side & one rounded side to allow the pantry door to close flush over the Lazy Susan. These are most commonly found in wall cabinets above refrigerators & pantries.',
			imageUrl: '/uploads/type-dshape.png',
		},
		{
			title: 'Full round',
			description: 'The traditional circular design of the Lazy Susan is usually found in base cabinets or outside the cabinets on a kitchen counter or dinner table.',
			imageUrl: '/uploads/type-round.png',
		},
		{
			title: 'Kidney Shaped',
			description: 'This design includes a soft, rounded triangle cutout to accommodate the doors of a 90-degree corner cabinet.',
			imageUrl: '/uploads/type-kidney.png',
		},
	];

	let accordionData = [
		{
			title: 'Why is it called a Lazy Susan ?',
			description: 'Ready to get started? Select your preferred booking method below, and one of our talented ShelfGenie designers will come to your home and create your custom storage solution.'
		},
		{
			title: 'When was the Lazy Susan invented ?',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{
			title: 'How does the Lazy Susan work ?',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{
			title: 'What materials can be used to make a Lazy Susan ?',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
	];

	let featuredData = {		
		title: 'Featured Solutions',
		items: [
			{
				title: 'Glide - Around',
				description: 'Our Glide-Around design is a combination of a Lazy Susan and corner cabinet drawers, giving you the best of both worlds. This solution rotates 360 degrees, with drawers in the middle that fully extend and additional storage space on the sides.The Glide-Around turns once wasted cabinet space into an efficient storage area that is easily accesed.', 
				images: [
					'/uploads/solution-kitchen.jpg',
					'/uploads/solution-kitchen.jpg',
					'/uploads/solution-kitchen.jpg',
				]
			}
		]
	}

	let moreSolutionsData = {
		title: 'More Kitchen Solutions',
		description: '',
		buttonLabel: '',
		buttonUrl: '',
		items: [
			{
				image: '/uploads/solution-kitchen.jpg',
				url: '#/',
				title: 'View latest trends in Kitchen Solutions',
				moreText: 'Read More',
				description: 'Cras aliquam tellus hendrerit lorem efficitur pellentesque. Mauris id felis sed tellus posu ere placerat sed vel ex.',
			},
			{
				image: '/uploads/solution-pantry.jpg',
				url: '#/',
				title: 'View latest trends in Pantry Solutions',
				moreText: 'Read More',
				description: 'Cras aliquam tellus hendrerit lorem efficitur pellentesque. Mauris id felis sed tellus posu ere placerat sed vel ex. ',
			},
			{
				image: '/uploads/solution-bathroom.jpg',
				url: '#/',
				title: 'View latest trends in Bathroom Solutions',
				moreText: 'Read More',
				description: 'Cras aliquam tellus hendrerit lorem efficitur pellentesque. Mauris id felis sed tellus posu ere placerat sed vel ex. ',
			},
		],
	};
</script>

<SectionBreadcrumbs data={breadcrumbsData} />
<SectionIndividualSolutionIntroGallery />
<SectionContentAndImage />
<SectionAccordion data={accordionData}/>
<SectionTypes data={typesData}/>
<SectionFeaturedSolutions data={featuredData} />
<SectionBlogFeatured data={moreSolutionsData} />
<SectionConfigurator />
<SectionDownloadEbook />
<SectionLastCta />

<style lang="sass">

	:global(.SectionAccordion)
		padding-top: 0!important
</style>