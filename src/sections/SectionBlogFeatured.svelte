<script>
	import SectionHeader from "/src/components/SectionHeader.svelte";
	import CardGrid1 from "/src/components/CardGrid1.svelte";
	
	let cardItems = [
		{
			image: '/uploads/solution-kitchen.jpg',
			url: '#/',
			title: 'View latest trends in Kitchen Solutions',
			moreText: 'Read More',
			description: 'Cras aliquam tellus hendrerit lorem efficitur pellentesque. Mauris id felis sed tellus posu ere placerat sed vel ex. ',
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
	];
</script>
<section class="SectionBlogFeatured">
	<div class="container">
		<SectionHeader alignment="left" title="Ideas From Our Blog" ctaLabel="See More Inspiration" ctaUrl="#/" />
		<!-- .row-1 -->
		<CardGrid1 items={cardItems}/>
		<div class="row-2">
		</div> 
		<!-- .row-2 -->
	</div>
</section>
<style lang="sass">
	.SectionBlogFeatured
		padding-top: 80px
		padding-bottom: 80px
</style>