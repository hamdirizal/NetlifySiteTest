<section class="SectionQuoteBar">
	<div class="container">
		<div class="box">
			<div class="content">We are loving the new storage! It’s amazing how much more room there is. I really didn’t think it would add so much more room, but it did! I have tons of stuff since I love to cook and it all is now so organized that I want to leave the cupboards open all the time to show off! The drawers glide in and out so smoothly and quietly. You guys were the best to work with and we can’t thank you enough for the great job you did!”</div>
			<div class="by">Ed & Becky W., Salem</div>
		</div><!-- .ctn -->
	</div><!-- .container -->
</section>
<style lang="sass">
@import "../styles/variables"
.SectionQuoteBar
	background-color: $brand-blue
	background-image: url(/images/quotebar-bg.jpg)
	background-repeat: no-repeat
	background-size: cover
	color: white
	padding-top: 90px
	padding-bottom: 100px
	position: relative
	
	& > .container
		max-width: 840px
		z-index: 5

	.box
		text-align: center

	.content
		line-height: 1.9
		position: relative
		padding-bottom: 40px
		margin-bottom: 30px
		&:after
			content: ''
			display: block
			position: absolute
			width: 100px
			bottom: 0
			left: 50%
			transform: translateX(-50%)
			border-bottom: 4px solid $brand-green

	.by
		font-weight: bold
		text-transform: uppercase
		letter-spacing: 0.05em


</style>