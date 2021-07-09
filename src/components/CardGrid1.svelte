<script>
	export let items = null;
</script>

<div class="CardGrid1">
	{#if items !== null && Array.isArray(items) && items.length}
		<ul>
			{#each items as item}
				<li>
					<a href={item.url} class="item">
						<div class="item-pic"><img src={item.image} alt="" /></div>
						<h4 class="item-title">{item.title}</h4>
						{#if item.description && item.description.length}							
						<div class="item-desc">{item.description}</div>
						{/if}
						<div class="item-more"><span>{item.moreText}</span></div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="sass">
	@import "../styles/_variables"
	ul
		list-style: none
		margin: 0 -10px 0
		padding: 0
		display: flex
		flex-wrap: wrap
	li
		width: 33.3%
		padding-left: 10px
		padding-right: 10px
		margin-bottom: 20px

	.item
		text-decoration: none
		display: block
		padding: 20px
		background: white
		min-height: 100%
		border: 1px solid $color-border-lightgrey
		border-radius: 4px
		transition: all .2s
		&:hover
			box-shadow: 0px 10px 20px rgba(0,0,0,0.1)

		img
			width: 100%
			height: 240px
			display: block
			object-fit: cover
	.item-title
		font-size: 24px
		line-height: 1.2
		font-weight: 400
		margin-top: 15px
		margin-bottom: 15px
	.item-desc
		margin-bottom: 15px
		color: $color-text-default
	.item-more
		font-size: 14px
		text-transform: uppercase
		color: $color-text-blue
		font-weight: 700
		letter-spacing: 0.05em
		span
			display: inline-block
		span:after
			content: ''
			display: inline-block
			width: 22px
			height: 13px
			margin-left: 8px
			background: url(/images/icon-arrow-right-green.png) no-repeat left center

</style>
