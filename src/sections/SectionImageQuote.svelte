<section class="SectionImageQuote">
	<div class="container">
		<div class="box">
			<div class="content">“The best home improvement we’ve done. These shelves make our lives easier every day.”</div>
			<div class="by">Ingrid M., Seattle</div>
		</div><!-- .box -->
	</div><!-- .container -->
</section>

<style lang="sass">
	@import "../styles/variables"
	.SectionImageQuote
		background-image: url(/uploads/senior-woman-and-man-cooking.jpg)
		background-color: $color-bg-grey
		background-size: cover
		background-position: center top
		.container
			margin-left: 50%
			padding-top: 260px
			padding-bottom: 310px
		.box
			max-width: 500px
			color: $color-text-blue
			position: relative
			&:before
				content: ''
				display: block
				width: 98px
				height: 74px
				background: url(/images/icon-quote-66-lightgrey.svg) no-repeat left top
				position: absolute
				left: -20px
				top: -30px
		.content
			font-size: 34px
			font-family: $font-2
			line-height: 1.2
			margin-bottom: 20px
		.by
			font-size: 14px
			text-transform: uppercase
			font-weight: 700
			letter-spacing: 0.03em
</style>