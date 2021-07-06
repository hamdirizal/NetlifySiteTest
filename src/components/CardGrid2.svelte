<script>
	/*const obj = {
		image: null,
		title: '',
		description: '',
		name: '',
		stars: 5,
	};*/

	export let items = [];
</script>

<div class="CardGrid2">
	{#if items !== null && items.length}
		<ul>
			{#each items as item}
				<li>
					<div class="item">
						{#if item.image!==null && item.image.length}
						<div class="item-pic"><img src={item.image} alt="" /></div>
						{/if}
						<div class="item-text">
							{#if item.stars && item.stars > 0}
							<div class="item-stars is-{item.stars}"></div>
							{/if}
							<h4 class="item-title">{item.title}</h4>
							<div class="item-description">{item.description}</div>
							<div class="item-by"><span>{item.name}</span></div>
						</div>
					</div>
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
		padding: 0
		background: white
		min-height: 100%
		border: 1px solid $color-border-lightgrey
		border-radius: 4px
		transition: all .2s

		img
			width: 100%
			height: 240px
			display: block
			object-fit: cover
	
	.item-text
		padding: 24px

	.item-title
		font-size: 18px
		line-height: 1.2
		font-weight: 700
		margin-top: 0
		margin-bottom: 10px
	.item-description
		margin-bottom: 8px
	.item-by
		font-size: 14px
		text-transform: uppercase
		color: $color-text-blue
		font-weight: 700
		letter-spacing: 0.05em

	.item-stars
		height: 14px
		margin-bottom: 8px
		background: url(/images/icon-stars-0.svg) no-repeat left top
		&.is-1
			background-image: url(/images/icon-stars-1.svg)
		&.is-2
			background-image: url(/images/icon-stars-2.svg)
		&.is-3
			background-image: url(/images/icon-stars-3.svg)
		&.is-4
			background-image: url(/images/icon-stars-4.svg)
		&.is-5
			background-image: url(/images/icon-stars-5.svg)

</style>

