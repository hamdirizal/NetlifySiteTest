<script>
import Button from "/src/components/Button.svelte";
import SectionHeader from "/src/components/SectionHeader.svelte";
export let data = {
	imageUrl: '/uploads/ebook-solutions-magazine.png',
	title: 'Download Solutions Magazine',
	description: 'Our free magazine features curated ideas and inspiration to help you imagine spaces where everything is within reach.',
	buttonLabel: 'Download PDF',
	buttonUrl: '#/',
}
</script>
<section class="SectionDownloadEbook">
	<div class="container">
		<div class="content">
			{#if data && data.title}
			<SectionHeader title={data.title} />
			{/if}
			{#if data && data.description}
			<div class="description">{data.description}</div>
			{/if}
			{#if data && data.buttonLabel && data.buttonUrl}
			<div class="cta">
				<Button size="big" url={data.buttonUrl}>{data.buttonLabel}</Button>
			</div>
			{/if}			
		</div>
		<div class="image">
			{#if data.imageUrl}
				<img src={data.imageUrl} alt="{data.title}">
			{/if}
		</div>
	</div>
</section>
<style lang="sass">
	@import "../styles/_variables"
	.SectionDownloadEbook
		padding-top: 60px
		background: #F8FAFC
		.container
			display: flex
			flex-wrap: wrap
			& > *
				width: 50%
		.content
			order: 2
			padding-top: 60px
			max-width: 540px
		.image
			order: 1
			padding-right: 100px
			padding-left: 40px
			img
				display: block
		.description
			margin-bottom: 30px
		.cta
			margin-top: 30px
			:global(a), :global(button)
				display: inline-block

		@media (max-width: 1200px)
			.content
				padding-top: 0
		@media (max-width: 1020px)
			.content
				width: 100%
				order: 1
				margin-bottom: 40px
			.image
				padding-right: 0
				padding-left: 0
				width: 100%
				order: 2
				max-width: 400px
</style>