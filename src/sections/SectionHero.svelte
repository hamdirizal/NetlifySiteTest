<script>
	export let backgroundImage = '';
</script>
<section class="SectionHero" style="background-image: url({backgroundImage});">
	<div class="container">
		<div class="box">
			<h1 class="title"><slot name="title" /></h1>
			<div class="description"><slot name="description" /></div>
			<div class="cta"><slot name="cta" /></div>
		</div>
	</div>
</section>
<style lang="sass">
	@import "../styles/_variables"
	
	.SectionHero
		background: url() no-repeat center center
		background-size: cover
		padding-top: 160px
		padding-bottom: 180px
		.box
			max-width: 600px
		.title
			margin-bottom: 30px
			font-size: $font-size-title-1
			color: $color-text-darkgrey
		.description
			margin-bottom: 40px
			max-width: 480px
		.cta
			& > :global(*)
				display: flex
				&>:global(a)
					margin-right: 20px
				&>:global(a:last-child)
					margin-right: 0


</style>