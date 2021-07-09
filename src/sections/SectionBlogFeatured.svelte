<script>
	import SectionHeader from "/src/components/SectionHeader.svelte";
	import CardGrid1 from "/src/components/CardGrid1.svelte";

	export let data = {
		title: 'Ideas From Our Blog',
		description: '',
		buttonLabel: 'SEE MORE BLOG ARTICLES',
		buttonUrl: '#/',
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
<section class="SectionBlogFeatured">
	<div class="container">
		{#if data}			
		<SectionHeader alignment="left" title={data.title} ctaLabel={data.buttonLabel} ctaUrl={data.buttonUrl} />
		{/if}
		{#if data && data.items && Array.isArray(data.items)}
		<CardGrid1 items={data.items}/>
		{/if}
	</div>
</section>
<style lang="sass">
	.SectionBlogFeatured
		padding-top: 80px
		padding-bottom: 80px
</style>