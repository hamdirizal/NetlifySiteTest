<footer class="SiteFooter2">
	<div class="container">
		<div class="copyright">© 2021 ShelfGenie. All rights reserved.</div>
		<ul>
			<li><a href="#/">Sitemap</a></li>
			<li><a href="#/">Privacy policy</a></li>
			<li><a href="#/">Terms  of use</a></li>
			<li><a href="#/">Warranty</a></li>
		</ul>    
	</div>
</footer>
<style lang="sass">
	@import "../styles/_variables"
	.SiteFooter2
		background: $color-text-darkblue
		color: $color-text-lightgrey		
		padding-top: 24px
		padding-bottom: 24px
		font-size: 13px

		.container
			display: flex
			justify-content: space-between

		a, a:visited
			color: inherit
			text-decoration: none

		a:hover
			color: white

		ul
			line-height: 1
			list-style: none
			margin: 0
			padding: 0
			display: flex
			justify-content: space-between
			align-items: center
			li
				position: relative
				padding-right: 20px
				margin-right: 20px
				&:after
					display: block
					content: ''
					border-right: 1px solid $color-border-lightgrey
					top: 0
					bottom: 0
					right: 0
					position: absolute
			li:last-child
				padding-right: 0
				margin-right: 0
				&:after
					display: none
		

</style>