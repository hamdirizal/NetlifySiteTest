<script>
	import SectionHeader from "/src/components/SectionHeader.svelte";
	export let data = {}

</script>
<section class="SectionFeaturedSolutions">
	<div class="container">
		{#if data && data.title && data.title.length}
		<SectionHeader title={data.title} />
		{/if}
		{#if data && data.items && Array.isArray(data.items) && data.items.length}
			<ul class="group">
			{#each data.items as item}
				<li>
					{#if item.title}
					<h5 class="item-title">{item.title}</h5>
					{/if}
					{#if item.description}
					<div class="item-description">{item.description}</div>
					{/if}
					{#if item.images && Array.isArray(item.images) && item.images.length}
					<div class="images">
						<ul>
							{#each item.images as image}
							<li>
								<div class="pic"><img src={image} alt=""></div>
							</li>
							{/each}
						</ul>
					</div>
					{/if}
				</li>
			{/each}
			</ul>
		{/if}
	</div>
</section>
<style lang="sass">
	@import "../styles/_variables"
	.SectionFeaturedSolutions
		padding: 80px 0 100px
		font-size: 16px
		overflow: hidden
	ul.group
		list-style: none
		margin: 0 
		padding: 0
		&>li
			margin-bottom: 50px
		&>li:last-child
			margin-bottom: 0

	.item-title
		font-size: 24px
		margin-bottom: 20px
	.item-description
		margin-bottom: 20px
	.images
		margin-top: 40px
		margin-left: -15px
		margin-right: -15px
		padding: 0
		ul
			list-style: none
			display: flex
			flex-wrap: wrap

		li
			width: 33.33%
			padding-left: 15px
			padding-right: 15px
			margin-bottom: 30px
		.pic
			border-radius: 4px
			overflow: hidden
			position: relative
			padding-bottom: 70%
			height: 0
		img
			display: block
			width: 100%
			height: 100%
			position: absolute
			object-fit: cover

	@media (max-width: 960px)
		.images
			margin-left: -10px
			margin-right: -10px
			li
				padding-left: 10px
				padding-right: 10px

	@media (max-width: 480px)
		.images
			li
				width: 50%
</style>