<script>
import Button from "/src/components/Button.svelte";
import MainMenu from "/src/components/MainMenu.svelte";

</script>
<header class="SiteHeader2">
	<div class="container">
		<div class="left">
			<a class="logo" href="/">
				<img src="/images/shelfgenie-neighborly-us.svg" alt="ShelfGenie">
			</a>
		</div><!-- .left -->
		<div class="right">
			<MainMenu />
			<div class="cta"> <Button url="#/">Book a Free Consultation</Button> </div>
		</div><!-- .right -->
	</div><!--.container-->
</header><!--.SiteHeader2--> 

<style lang="sass">
	@import "../styles/variables"
	.SiteHeader2
		font-size: 15px
		z-index: 90
		position: sticky
		box-shadow: 0 4px 16px rgba(0,0,0,0.05)
		background: white
		top: 0
		left: 0
		right: 0
		.container
			display: flex
			justify-content: space-between
		.logo
			display: block
			width: 180px
			padding-top: 10px
			padding-bottom: 10px
			img
				display: block
				max-width: 100%
				height: auto
		.nav
			margin-right: 30px
			ul
				list-style: none
				margin: 0
				padding: 0
				display: flex
		.right
			display: flex
			align-items: center
</style>