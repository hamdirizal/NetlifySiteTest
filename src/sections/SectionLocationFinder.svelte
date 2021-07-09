<script>
import Button from "/src/components/Button.svelte";
import SectionHeader from "/src/components/SectionHeader.svelte";

</script>
<section class="SectionLocationFinder">
	<div class="container">
		<div class="left">
			<div class="imagebox">
				<div class="inner">
					<div class="person-pic"> 
						<img src="/uploads/customer-support-1.jpg" alt="">
					</div>
					<div class="person-name">Thimmappa Anekonda</div>
					<div class="person-title">Owner and Designer</div>
				</div>
			</div>
		</div>
		<div class="right">
			<SectionHeader alignment="left" title="Your Neighborhood Team" />
			<div class="detailsbox">
				<div class="office-title">Main ShelfGenie Headquarter</div>
				<form  class="searchbox" action="">
					<h5>Find my ShelfGenie partner</h5>
					<h6>Enter your home ZIP or Postal Code</h6>
					<div class="inputbox"><input type="text" placeholder="ZIP or Postal Code"></div>
					<div class="message">No franchise covers your area right now. Please call (888) 903-8839 to learn more.</div>
					<div class="message">Location(s) near you</div>
					<ul class='results'>
						<li><a href="#/">Columbus - Saunders 43004</a></li>
						<li><a href="#/">Lorem - Ipsum 43004</a></li>
						<li><a href="#/">Dolor - Sit Amet 43004</a></li>
					</ul>
				</form>
				<div class="info">
					<h4>Address</h4>
					<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.</div>
				</div>
				<div class="info">
					<h4>Phone</h4>
					<div>000-0000000</div>
				</div>
				<ul class="social">
					<li><a href="#/"><img src="/images/icon-social-facebook-color.svg" alt=""></a></li>
					<li><a href="#/"><img src="/images/icon-social-yelp-color.svg" alt=""></a></li>
				</ul>
				<div class="cta"><Button theme="2" url="#/">Learn More</Button> </div>
			</div>
			
		</div>
	</div>
</section>
<style lang="sass">
@import "../styles/_variables"

.SectionLocationFinder
	background: #F8F9FB
	padding: 40px 0 60px

	.container
		display: flex
		justify-content: space-between

		& > *
			width: 50%
	
	.left
		position: relative
		padding-right: 6%

	.right
		padding-top: 40px
		
	.imagebox
		line-height: 1.2
		position: relative
		text-align: center
		&:before
			content: ''
			position: absolute
			z-index: 0
			width: 100%
			padding-bottom: 112.348%
			background: green
			right: 12%
			bottom: -10%
			background: url(/images/polaroid-paper.png) no-repeat left bottom
			background-size: contain
		.inner
			padding: 24px
			background: white
			box-shadow: 0 8px 20px rgba(0,0,0,0.1)
			position: relative
			z-index: 4

	.person-name
		color: $brand-blue
		font-size: 18px
		margin-top: 20px
		margin-bottom: 8px
	
	.person-title
		font-size: 16px
	
	.person-pic
		position: relative
		padding-bottom: 100%
		background: #ebecec
		img
			position: absolute
			top: 0
			left: 0
			display: block
			width: 100%
			height: 100%
			object-fit: cover

	.detailsbox
		padding-right: 55%
		position: relative
		line-height: 1.2


	.office-title
		font-size: 18px
		color: $brand-blue
		margin-bottom: 30px

	.info
		margin-bottom: 20px
		color: $color-text-grey
		h4
			font-family: $font-1
			font-size: 14px
			color: $color-text-darkgrey
			text-transform: uppercase
			font-weight: bold
			margin-bottom: 10px

	.cta 
		margin-top: 40px
		:global(a)
			display: inline-block
			padding-left: 30px
			padding-right: 30px

	.social
		list-style: none
		display: flex
		flex-wrap: wrap
		margin-top: 20px
		li
			margin-right: 12px
			a, a:visited
				background: white
				box-shadow: 0 10px 15px rgba(0,0,0,0.1)
				display: flex
				width: 50px
				height: 50px
				border-radius: 50%
				display: flex
				justify-content: center
				align-items: center

	.searchbox
		color: $color-text-grey
		width: 50%
		position: absolute
		right: 0
		top: -20px
		padding: 20px
		border-radius: 4px
		background: white
		box-shadow: 0 4px 12px rgba(0,0,0,0.1)

		&:before
			content: ''
			position: absolute
			left: -10px
			top: 20px
			width: 0
			height: 0
			border-style: solid
			border-width: 10px 10px 10px 0
			border-color: transparent white transparent transparent

		.message
			font-size: 14px
			margin-top: 10px
			margin-bottom: 10px

		.results
			list-style: none
			margin: 0
			margin-top: 20px
			padding: 0
			font-weight: bold
			font-size: 14px

			li
				padding-bottom: 10px
				margin-bottom: 10px
				border-bottom: 1px dotted #ccc

			a, a:visited
				color: $brand-blue
				text-decoration: none

		h5
			font-size: 18px
			font-family: $font-1
			color: $color-text-darkgrey
			margin-bottom: 10px
		h6
			font-size: 14px
			font-family: $font-1
			margin-bottom: 15px
		.inputbox
			position: relative
		input[type=text]
			border: 1px solid $color-text-lightgrey
			border-radius: 4px
			font-size: 15px
			font-family: $font-1
			display: block
			width: 100%
			padding: 10px 20px
			outline: none
			&:focus
				border-color: $brand-green


</style>