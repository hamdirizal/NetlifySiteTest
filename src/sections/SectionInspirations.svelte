<script>
	import SectionHeader from "/src/components/SectionHeader.svelte";
	import CardGrid1 from "/src/components/CardGrid1.svelte";
	
	let cardItems = [
		{
			image: '/uploads/inspiration-kitchen.jpg',
			url: '#/',
			title: 'View latest trends in Kitchen Solutions',
			moreText: 'See more in kitchen'
		},
		{
			image: '/uploads/inspiration-pantry.jpg',
			url: '#/',
			title: 'View latest trends in Pantry Solutions',
			moreText: 'See more in pantry'
		},
		{
			image: '/uploads/inspiration-bathroom.jpg',
			url: '#/',
			title: 'View latest trends in Bathroom Solutions',
			moreText: 'See more in bathroom'
		},
	];
</script>
<section class="SectionInspirations">
	<div class="container">
		<SectionHeader alignment="left" title="Inspiration Gallery" ctaLabel="See More Inspiration" ctaUrl="#/" />
		<CardGrid1 items={cardItems}/>
	</div>
</section>
<style lang="sass">
	@import "../styles/variables"
	.SectionInspirations
		background: white
		padding-top: 80px
		padding-bottom: 100px
</style>