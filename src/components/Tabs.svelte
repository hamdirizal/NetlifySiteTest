<script>
	import { createEventDispatcher } from 'svelte';
	export let data = [
		'All',
		'Kitchen',
		'Pantry',
		'Bathroom',
		'Workspace',
		'Closets',
	];
	
	let currentItem = 0

	const dispatch = createEventDispatcher();

	function switchTab(index){
		currentItem = index;
		dispatch('click', {
			index: index
		});
	}
</script>
<div class="Tabs">
	{#if data && Array.isArray(data) && data.length}
	<ul>
		{#each data as item, index}
			{#if item && item.length}
			<li class:is-active={index===currentItem}><a on:click|preventDefault={()=>{switchTab(index)}} href="#/">{item}</a></li>
			{/if}
		{/each}
	</ul>
	{/if}
</div>
<style lang="sass">
	@import "../styles/_variables"
	.Tabs
		margin-bottom: 40px
		ul
			list-style: none
			font-size: 17px
			color: #2F3548
			display: flex
			max-width: 880px
			margin-left: auto
			margin-right: auto
			border-top: 1px solid #e1e8ee
			border-bottom: 1px solid #e1e8ee
			justify-content: space-between
			& > li				
				a, a:visited
					font-weight: bold
					display: block
					line-height: 1
					text-transform: uppercase
					letter-spacing: 0.02em
					padding: 20px 8px 16px
					color: inherit
					text-decoration: none
					transition: all .2s
					border-bottom: 4px solid transparent
				a:hover
					color: $brand-blue
			& > li.is-active 
				a, a:visited
					border-color: $brand-green
					color: $color-text-blue
</style>