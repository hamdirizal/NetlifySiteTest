<section class="SectionBenefitsBar">
	<ul class="container">
		<li>
			<div class="item">
				<div class="pic"><img src="/uploads/icon-benefits-guarantee.png" alt=""></div>
				<h3 class="title">Lifetime Guarantee</h3>
				<div class="desc">Parts & installation</div>
			</div>
		</li>
		<li>
			<div class="item">
				<div class="pic"><img src="/uploads/icon-benefits-free-design.png" alt=""></div>
				<h3 class="title">Free 3D Design</h3>
				<div class="desc">Custom shelving solutions</div>
			</div>
		</li>
		<li>
			<div class="item">
				<div class="pic"><img src="/uploads/icon-benefits-payment-options.png" alt=""></div>
				<h3 class="title">Payment Options</h3>
				<div class="desc">For all project sizes</div>
			</div>
		</li>
	</ul><!-- .container -->
</section><!-- .SectionBenefitsBar -->

<style lang="sass">
@import "../styles/variables"
.SectionBenefitsBar
	background-color: $brand-blue 
	background-image: url(/images/wood-pattern-blue.png)
	color: white
	.container
		display: flex
		padding-top: 40px
		padding-bottom: 40px
		flex-wrap: wrap
		& > li
			position: relative
			flex-grow: 1
			display: flex
			justify-content: center
			align-items: center
			width: 33.33%
			&:after
				content: ''
				display: block
				position: absolute
				border-right: 1px solid white
				top: 0
				right: 0
				bottom: 0
				opacity: 0.3

		& > li:last-child:after
			display: none
	.item
		position: relative
		padding-left: 90px

	.title
		font-size: 20px
		margin-bottom: 8px
		color: white
		font-weight: normal

	.pic
		position: absolute
		left: 10px
		top: 50%
		transform: translateY(-50%)
	
	@media (max-width: 960px)
		.container > li
			width: 100%
			justify-content: flex-start
			margin-bottom: 30px
			&:after
				display: none
			&:last-child
				margin-bottom: 0
		.pic
			left: 0
</style>
