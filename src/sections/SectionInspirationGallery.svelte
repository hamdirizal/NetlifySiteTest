<script>
	import IconSearch2 from "../svgs/IconSearch2.svelte";
	import GalleryGrid from "../components/GalleryGrid.svelte";
	import SectionHeader from "../components/SectionHeader.svelte";
	import Tabs from "../components/Tabs.svelte";
	import Button from "../components/Button.svelte";

	export let galleryItems = [
		{
			title: 'Glide Around (Lower)',
			url: '#/',
			imageUrl: '/uploads/solution-lazy-susan-1.jpg'
		},
		{
			title: 'Glide Around (Lower)',
			url: '#/',
			imageUrl: '/uploads/solution-lazy-susan-1.jpg'
		},
		{
			title: 'Glide Around (Lower)',
			url: '#/',
			imageUrl: '/uploads/solution-lazy-susan-1.jpg'
		},
		{
			title: 'Glide Around (Lower)',
			url: '#/',
			imageUrl: '/uploads/solution-lazy-susan-1.jpg'
		},
		{
			title: 'Glide Around (Lower)',
			url: '#/',
			imageUrl: '/uploads/solution-lazy-susan-1.jpg'
		},
		{
			title: 'Glide Around (Lower)',
			url: '#/',
			imageUrl: '/uploads/solution-lazy-susan-1.jpg'
		},
	];

	function tabClicked(e){
		console.log(e)
		console.log(e.detail)
	}
</script>

<section class="SectionIndividualSolutionIntroGallery">
	<div class="container">
		<SectionHeader title="Inspiration Gallery" alignment="center"/>
		<div class="searchbox">
			<form action="#/">
				<input type="text" placeholder="Search">
				<button type="submit" class="submit-button">
					<IconSearch2 />
				</button>
			</form>
		</div>
		<Tabs on:click={tabClicked} />
		<GalleryGrid items={galleryItems} />
		<div class="more">
			<Button url="#/" >Load more</Button>
		</div>
	</div>
</section>
<style lang="sass">
	@import "../styles/_variables"

	.SectionIndividualSolutionIntroGallery
		padding-top: 60px
		padding-bottom: 60px
		background: #F8FAFC

	.searchbox
		max-width: 1100px
		margin-left: auto
		margin-right: auto
		margin-bottom: 34px
		position: relative

	input[type=text]
		position: relative
		z-index: 0
		display: block
		width: 100%
		font-family: $font-1
		border-radius: 4px
		outline: none
		font-size: 16px
		padding: 17px
		padding-left: 60px
		border: 0 none
		box-shadow: 0 5px 10px rgba(0,0,0,0.05)
		transition: all .2s
		&::placeholder
			color: $color-text-lightgrey
		&:focus
			box-shadow: 0 10px 20px rgba(0,0,0,0.15)

	.submit-button
		border: 0 none
		position: absolute
		outline: none
		top: 0 
		left: 0
		z-index: 3
		background: transparent
		cursor: pointer
		width: 58px
		height: 58px
		:global(svg)
			width: 24px
			height: 24px
		:global(path)
			fill: #8d97a4
		&:hover
			:global(path)
				fill: $color-text-grey

	.more
		text-align: center
		margin-top: 30px
		:global(a)
			display: inline-block
			padding-left: 40px
			padding-right: 40px

</style>
