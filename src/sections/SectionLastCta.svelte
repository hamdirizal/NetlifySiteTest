<script>
	import CallBookPanel from "/src/components/CallBookPanel.svelte";
</script>

<section class="SectionLastCta">
	<div class="container">
		<div class="left">
			<h1 class="title">Schedule a free, no obligation at-home consultation.</h1>
			<div class="desc">Ready to get started? Select your preferred booking method below, and one of our talented ShelfGenie designers will come to your home and create your custom storage solution.</div>
		</div><!-- .left -->
		<div class="right">
			<CallBookPanel />
		</div><!-- .right -->
	</div><!-- .container -->
</section>
<style lang="sass">
	@import "../styles/variables"
	.SectionLastCta
		background: url(/uploads/schedule-banner.jpg) no-repeat
		background-color: $color-bg-grey
		background-size: cover
		padding-top: 1px
		padding-bottom: 1px
		position: relative
		color: $color-text-default

		.container
			display: flex
			justify-content: space-between
		
		.left
			max-width: 540px
			position: relative
			padding-top: 160px
			padding-bottom: 160px
		.right
			color: inherit
			max-width: 490px
			padding-top: 40px
			padding-bottom: 40px
		.title
			max-width: 460px
			margin-bottom: 20px
			color: $color-text-darkblue
			span
				color: #373e4e
</style>