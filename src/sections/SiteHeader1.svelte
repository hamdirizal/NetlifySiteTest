<script>
import HeaderSearchBox from "/src/components/HeaderSearchBox.svelte";
import LocationSearchDropdown from "/src/components/LocationSearchDropdown.svelte";
</script>
<header class="Header1">
	<div class="container">
		<LocationSearchDropdown />
		<div class="right">
			<ul class="smallnav">
				<li><a href="#/">Help Center</a></li>
				<li><a href="#/">FAQ</a></li>
				<li><a href="#/">Franchise Opportunities</a></li>
			</ul>
			<HeaderSearchBox />
		</div><!--.right-->
	</div><!--.container-->
</header><!--.Header1-->

<style lang="sass">
@import "../styles/_variables"
@import "../styles/_mixins"

.Header1
	background: $brand-blue
	color: white
	font-size: 14px
	line-height: 1
	z-index: 91
	position: relative

	a, a:visited
		color: white
		text-decoration: none

	.container
		display: flex
		justify-content: space-between
	
	.left
		display: flex

	.right
		display: flex
		align-items: center

	ul.smallnav
		margin: 0
		padding: 0
		list-style: none
		display: flex
		align-items: center

		a
			color: inherit
		a:hover
			color: $brand-green

		li
			margin-right: 24px
			padding-right: 24px
			position: relative		

			&:after
				content: ''
				display: block
				position: absolute
				right: 0
				top: 0
				bottom: 0
				border-right: 1px solid white
		li:last-child
			margin-right: 12px
</style>