<script>
	import SectionHeader from "../components/SectionHeader.svelte"
	import {isObject} from "../js/utils.js"

	export let data = {}

	let obj = {
		title: 'What is a Lazy Susan?',
		content: `<p>Also called a turntable, the Lazy Susan is a rotating, multilevel platform or tray usually placed on tables or counters to easily distribute food.</p> <p>Lazy Susans can also create accessibility in lower and upper corner cabinet spaces. Although they are normally used for corner cabinets, they can also be used in other cabinet styles to provide a rotating storage system.</p>`,
		imageUrl: '/uploads/lazy-susan.jpg',
	}

	data = {...obj, ...data}
</script>
<section class="SectionContentAndImage">
	<div class="container">
		<div class="content">
			{#if data && data.title && data.title.length }
			<SectionHeader title={data.title} />
			{/if}
			{#if data && data.content && data.content.length }
			{@html data.content}
			{/if}
		</div>
		<div class="image">
			{#if data.imageUrl && data.imageUrl.length }
			<div class="pic">
				<img src={data.imageUrl} alt="">
			</div>
			{/if}
		</div>
	</div>
</section>
<style lang="sass">
	.SectionContentAndImage
		margin-top: 80px
		margin-bottom: 80px
		.container
			display: flex
			flex-wrap: wrap
			& > *
				width: 50%
		.content
			padding-right: 80px

		@media (max-width: 768px)
			.container > *
				width: 100%
			.content
				order: 2
				padding-right: 0
			.image
				order: 1
				margin-bottom: 30px

		@media (max-width: 480px)
			margin-top: 40px
			margin-bottom: 40px

</style>