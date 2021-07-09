<script>
	import IconSearch from "../svgs/IconSearch.svelte"
	export let items = [
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
</script>
<div class="GalleryGrid">
	{#if items && Array.isArray(items)}		
	<ul>
		{#each items as item}			
		<li>
			<div class="inner">
				<a href="#/" on:click|preventDefault={()=>{}}>
					{#if item.imageUrl}
					<img src={item.imageUrl} alt={item.title} />
					{/if}
					<span>
						<IconSearch />
						<i>View Image</i>
					</span>
				</a>
			</div>
		</li>
		{/each}
	</ul>
	{/if}
</div>

<style lang="sass">
	@import "../styles/_variables"
	@import "../styles/_mixins"
	.GalleryGrid
		margin-left: -15px
		margin-right: -15px
		ul
			list-style: none
			margin: 0
			padding: 0
			display: flex
			flex-wrap: wrap
		li
			margin-bottom: 30px
			padding-left: 15px
			padding-right: 15px
			width: 33%

		.inner
			position: relative
			min-height: 100%
		
		a, a:visited
			display: block
			position: relative
			background: black
			height: 0
			padding-bottom: 130%
			overflow: hidden
			border-radius: 4px
		
		img
			display: block
			position: absolute
			z-index: 0
			object-fit: cover
			width: 100%
			height: 100%
		span
			letter-spacing: 0.05em
			font-size: 14px
			text-transform: uppercase
			font-weight: bold
			opacity: 0
			z-index: 1
			display: flex
			flex-direction: column
			align-items: center
			justify-content: center
			position: absolute
			+position-offset(0,0,0,0)
			color: white
			transition: opacity .2s
			background: rgb(27,55,103)
			background: linear-gradient(0deg, rgba(27,55,103,1) 8%, rgba(27,55,103,0.3) 100%)

		i
			margin-top: 8px
			font-style: normal

		a:hover span
			opacity: 1

		@media (max-width:1024px)			
			margin-left: -10px
			margin-right: -10px
			li				
				padding-left: 10px
				padding-right: 10px
				margin-bottom: 20px

		@media (max-width:480px)				
			margin-left: -5px
			margin-right: -5px
			li				
				padding-left: 5px
				padding-right: 5px
				margin-bottom: 10px	
				width: 50%
			a, a:visited
				padding-bottom: 100%
			span
				font-size: 12px
			:global(svg)
				width: 24px
				height: 24px
			
</style>