<script>
	import CallBookPanel from "/src/components/CallBookPanel.svelte";
</script>

<section class="SectionHomeHero">
	<div class="container">
		<div class="left">
			<h1 class="title">Custom Glide-out Shelves <span>for new or existing cabinets</span></h1>
			<div class="desc">We transform everyday fustrations into joy by giving you up to 50% more storage and better access to your cabinets. Our solutions, services and dedicated team of professionals are simply unmatched in the business.</div>
		</div><!-- .left -->
		<div class="right">
			<CallBookPanel />
		</div><!-- .right -->
	</div><!-- .container -->
</section>

<style lang="sass">
@import "../styles/variables"
.SectionHomeHero
	background: url(/uploads/hero-banner.jpg) no-repeat
	background-color: $color-bg-grey
	background-size: cover
	padding-top: 1px
	padding-bottom: 1px
	position: relative
	color: $color-text-default

	.container
		display: flex
		justify-content: space-between
		flex-wrap: wrap
		&>*
			width: 50%

	.left
		max-width: 540px
		position: relative
		padding-top: 160px
		padding-bottom: 160px
		padding-right: 60px
	.right
		color: inherit
		max-width: 490px
		padding-top: 40px
		padding-bottom: 40px
		flex-grow: 1
	.title
		max-width: 460px
		margin-bottom: 20px
		color: $color-text-blue
		span
			color: #373e4e

	@media (max-width: 960px)
		:global(.tabcontents li)
			padding-left: 24px!important
			padding-right: 24px!important
	@media (max-width: 767px)
		.title
			font-size: 40px
		.left
			width: 100%
			padding-top: 60px
			padding-bottom: 40px
			padding-right: 0
		.right
			padding-left: 0
			padding-top: 0
			width: 100%
</style>