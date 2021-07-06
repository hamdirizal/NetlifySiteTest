<script>
	import SectionHeader from '/src/components/SectionHeader.svelte';
	import CardGrid2 from "/src/components/CardGrid2.svelte";
	
	let testimonials = [
		{
			image: '/uploads/testimonial-1.jpg',
			title: 'It’s amazing how much more room there is!',
			description: '“We love our new home. Thank you for making our dream a reality. We would recommend your company to anyone....”',
			name: 'Ed & Becky W',
			stars: 4,
		},
		{
			image: '/uploads/testimonial-2.jpg',
			title: 'Thanks for our wonderful new house',
			description: '“We love our new home. Thank you for making our dream a reality. We would recommend your company to anyone....”',
			name: 'Paula D.',
			stars: 4,
		},
		{
			image: '/uploads/testimonial-3.jpg',
			title: 'It is exactly what I wanted',
			description: '“We love our new home. Thank you for making our dream a reality. We would recommend your company to anyone....”',
			name: 'Melissa L.',
			stars: 4,
		},
	];
</script>
<section class="SectionTestimonials">
	<div class="container">
		<SectionHeader alignment="center" title="What Our Customers Say" />
		<CardGrid2 items={testimonials}/>
	</div>
</section>
<style lang="sass">
	@import "../styles/_variables"
	section
		padding-top: 80px
		padding-bottom: 100px
</style>