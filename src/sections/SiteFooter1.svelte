<footer class="SiteFooter1">
	<div class="container">
		<div class="row-1">
			<div class="col">
				<a href="/" class="logo"><img src="/images/shelfgenie-neighborly-us-white.svg" alt=""></a>
				<div class="address">96 Enterprise Street. Kunda Park, <br>QLD 4556. Australia</div>
				<ul class="contact">
					<li>
						<i><img src="/images/icon-social-email.svg" alt=""></i>
						<a href="mailto:sales@trubuilt.com.au">sales@trubuilt.com.au</a>
					</li>
					<li>
						<i><img src="/images/icon-social-phone.svg" alt=""></i>
						<a href="tel:+61754768690">+61 75476 8690</a>
					</li>
				</ul>
			</div>
			<div class="col">
				<h4>Solutions</h4>
				<ul>
					<li><a href="/kitchen-solutions">Kitchen</a></li>
					<li><a href="#/">Pantry</a></li>
					<li><a href="#/">Bath</a></li>
					<li><a href="#/">Closet</a></li>
				</ul>
			</div> <!-- .col -->
			<div class="col">
				<h4>Inspirations</h4>
				<ul>
					<li><a href="#/">Client Transformations</a></li>
					<li><a href="#/">Our Projects</a></li>
					<li><a href="#/">Blog</a></li>
					<li><a href="#/">Solutions Magazine</a></li>
				</ul>
			</div> <!-- .col -->
			<div class="col">
				<h4>About Us</h4>
				<ul>
					<li><a href="#/">Locations</a></li>
					<li><a href="#/">How It Works</a></li>
					<li><a href="#/">Contact</a></li>
					<li><a href="#/">FAQ</a></li>
				</ul>
			</div> <!-- .col -->
			<div class="col">
				<h4>Corporate</h4>
				<ul>
					<li><a href="#/">Franchise Opportunities</a></li>
					<li><a href="#/">Careers</a></li>
				</ul>
			</div> <!-- .col -->
		</div>
		<!-- .row-1 -->
		<div class="row-2">
			<ul class="social">
				<li><a href="#/"><img src="/images/icon-social-facebook.svg" alt=""></a></li>
				<li><a href="#/"><img src="/images/icon-social-twitter.svg" alt=""></a></li>
				<li><a href="#/"><img src="/images/icon-social-pinterest.svg" alt=""></a></li>
				<li><a href="#/"><img src="/images/icon-social-youtube.svg" alt=""></a></li>
				<li><a href="#/"><img src="/images/icon-social-instagram.svg" alt=""></a></li>
			</ul>
		</div>
		<!-- .row-2 -->
		<div class="row-3">
			<div class="terms">© 2021 ShelfGenie Franchise Systems, LLC. All written and visual content on this site (including the organization and layout of the site is owned by ShelfGenie and protected by U.S. & Canada copyright, international treaties and other applicable copyright laws, & may not be copied without the express permission of ShelfGenie, which reserves all rights. Re-use of any of this site’s written or visual content for any purpose without ShelfGenie’s permission is strictly prohibited. ShelfGenie owns or has an exclusive license to use the trademarks and service marks.</div>
		</div>
		<!-- .row-3 -->
	</div>
	<!-- .container -->
</footer>
<style lang="sass">
	@import "../styles/_variables"
	.SiteFooter1
		background: $color-text-blue
		color: $color-text-lightgrey
		padding-top: 60px
		padding-bottom: 60px
		font-size: 14px		

		a, a:visited
			color: inherit
			text-decoration: none
		a:hover
			color: white
		
		.address
			margin-bottom: 30px

		.contact
			li
				display: flex
				align-items: center
					
				i
					display: flex
					justify-content: center
					align-items: center
					width: 30px
					height: 30px
					background: rgba(255,255,255,0.1)
					border-radius: 50%
					margin-right: 10px



		.row-1
			margin-bottom: 50px
			display: flex
			justify-content: space-between

			.col
				flex-grow: 1
				padding-right: 30px
			.col:last-child
				padding-right: 0
			.col:first-child
				flex-grow: 1.5
				padding-right: 80px
				margin-top: -10px
			h4
				color: white
				font-family: $font-1
				margin-bottom: 30px
			ul
				list-style: none
				margin: 0
			li
				margin-bottom: 12px

		

		.row-2
			display: flex
			justify-content: center
			position: relative
			margin-bottom: 40px
			&:before
				content: ''
				z-index: 0
				border-top: 1px solid rgba(255,255,255, 0.2)
				position: absolute
				top: 18px
				left: 0 
				right: 0


		.logo
			max-width: 180px
			display: block
			margin-bottom: 20px
			img
				display: block
				width: 100%
				height: auto

		.terms
			font-size: 13px
			text-align: center
			line-height: 1.8

		ul.social
			background: $color-text-blue
			list-style: none
			margin: 0 
			padding: 0
			display: flex
			position: relative
			z-index: 2
			padding-left: 10px
			padding-right: 10px
			& > li
				margin: 0 4px
			a, a:visited
				text-decoration: none
				text-align: center
				line-height: 1
				display: block
				width: 36px
				height: 36px
				color: white
				display: flex
				justify-content: center
				align-items: center
				background: rgba(255,255,255,0.1)
				border-radius: 50%
				transition: all .2s
			a:hover
				background: rgba(255,255,255,0.4)
</style>