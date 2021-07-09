<script>
	import SectionHeader from "../components/SectionHeader.svelte"

	export let imageUrl = ''
	export let title = ''
</script>
<section class="SectionImageAndContent">
	<div class="container">
		<div class="image">
			{#if imageUrl && imageUrl.length }
			<div class="pic">
				<img src={imageUrl} alt="">
			</div>
			{/if}
		</div>
		<div class="content">
			<SectionHeader title={title} />
			<slot />
		</div>		
	</div>
</section>
<style lang="sass">
	.SectionImageAndContent
		margin-top: 80px
		margin-bottom: 80px
		.container
			display: flex
			flex-wrap: wrap
			& > *
				width: 50%
		.image
			padding-right: 80px

		@media (max-width: 768px)
			.container > *
				width: 100%
			.content
			.image
				padding-right: 0
				margin-bottom: 30px

		@media (max-width: 480px)
			margin-top: 40px
			margin-bottom: 40px

</style>