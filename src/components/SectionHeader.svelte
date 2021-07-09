<script>
	import Button from "./Button.svelte";

	export let alignment = 'left';
	export let title = '';
	export let ctaLabel = '';
	export let ctaUrl = '';
	export let description = '';
	
</script>
<div class="SectionHeader is-{alignment}">
	<div class="box">
		<h2 class="title">{title}</h2>
		{#if description && description.length}
		<div class="description">{description}</div>
		{/if}
	</div>
	{#if ctaUrl && ctaLabel && ctaUrl.length && ctaLabel.length}		
	<div class="cta">
		<Button size="big" url={ctaUrl}>{ctaLabel}</Button>
	</div>
	{/if}
</div>
<style lang="sass">
@import "../styles/_variables"
.SectionHeader
	margin-left: auto
	margin-right: auto
	display: flex
	justify-content: space-between
	margin-bottom: 40px
	align-items: center		

	.description
		margin-top: 20px
		max-width: 700px

	.title
		margin-bottom: 0
		position: relative
		font-size: $font-size-title-2
		color: $color-text-darkblue
		position: relative
		line-height: 1.24
		padding-bottom: 24px
		margin-bottom: 0
		&:after
			content: ''
			display: block
			position: absolute
			width: 50px
			border-top: 4px solid $brand-green
			bottom: 0
			left: 0
	
	&.is-left
		justify-content: space-between

	&.is-center
		justify-content: center
		.title
			text-align: center
			&:after
				left: 50%
				transform: translateX(-50%)
		.description
			text-align: center
			max-width: 800px
		.cta
			display: none

	@media (max-width: 960px)
		.title
			font-size: 40px

	@media (max-width: 640px)
		.title
			font-size: 36px
</style>