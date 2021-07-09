<script>
import Button from "./Button.svelte";
import IconPlus from "/src/svgs/IconPlus.svelte";
export let data = {
	image: '/uploads/interactive-image-kitchen.jpg',
	nodes: [
		{
			isActive: false,
			x: 10,
			y: 10,
			image: '/uploads/s1.jpg',
			title: 'Glide around (Lower)',
			description: 'With our GlideAround™ solution, you can spin your shelves around to quickly (and easily) find what you’re looking for in your cabinet.',
			linkUrl: '#/',
			linkLabel: 'Learn More',
		},
		{
			x: 50,
			y: 50,
			image: '/uploads/s2.jpg',
			title: 'Glide around (Lower)',
			description: 'With our GlideAround™ solution, you can spin your shelves around to quickly (and easily) find what you’re looking for in your cabinet.',
			linkUrl: '#/',
			linkLabel: 'Learn More',
		},
		{
			x: 40,
			y: 70,
			image: '/uploads/s2.jpg',
			title: 'Glide around (Lower)',
			description: 'With our GlideAround™ solution, you can spin your shelves around to quickly (and easily) find what you’re looking for in your cabinet.',
			linkUrl: '#/',
			linkLabel: 'Learn More',
		},
		{
			x: 80,
			y: 30,
			image: '/uploads/s2.jpg',
			title: 'Glide around (Lower)',
			description: 'With our GlideAround™ solution, you can spin your shelves around to quickly (and easily) find what you’re looking for in your cabinet.',
			linkUrl: '#/',
			linkLabel: 'Learn More',
		},
		{
			x: 75,
			y: 75,
			image: null,
			title: 'Glide around (Lower)',
			description: 'With our GlideAround™ solution, you can spin your shelves around to quickly (and easily) find what you’re looking for in your cabinet.',
			linkUrl: '#/',
			linkLabel: 'Learn More',
		},
	]
}

let activeItemIndex = null;

function selectNode(index){
	activeItemIndex = index
}
function deselectAllNodes(){
	if(activeItemIndex>=0){
		activeItemIndex = null
	}
}
</script>
<div class="InteractiveImage">
	{#if data && data.image && data.image.length}
	<img src={data.image} alt="">
	{:else}
	<div style="height:400px"></div>
	{/if}
	
	{#if data && data.nodes && Array.isArray(data.nodes) && data.nodes.length}
	<ul on:click={deselectAllNodes}>
		{#each data.nodes as node, index}
			<li 
			class="node" 
			on:click|stopPropagation={()=>{}} 
			class:is-active={activeItemIndex===index} 
			class:is-right={node.x>50}
			class:is-bottom={node.y>50}
			style="left:{node.x}%;top:{node.y}%;">
				<button class="dot" on:click|preventDefault={()=>{selectNode(index)}}><IconPlus /></button>
				<div class="panel">
					<div class="inner">
						<div class="pic">
							{#if node.image}
							<img src={node.image} alt="">
							{/if}
						</div>
						<div class="text">
							<h6 class="title">{node.title}</h6>
							<div class="desc">{node.description}</div>
							<div class="cta"><Button url={node.linkUrl} theme=3 >{node.linkLabel}</Button></div>
						</div>
					</div>
					<button class="close" on:click|preventDefault={deselectAllNodes}>&times;</button>
				</div>
			</li>
		{/each}
	</ul>		
	{/if}

	{#if activeItemIndex !==null}
	<div class="popup">
		<div class="inner">
			<div class="pic">
				{#if data.nodes[activeItemIndex].image}
				<img src={data.nodes[activeItemIndex].image} alt="">
				{/if}
			</div>
			<div class="text">
				<h6 class="title">{data.nodes[activeItemIndex].title}</h6>
				<div class="desc">{data.nodes[activeItemIndex].description}</div>
				<div class="cta"><Button url={data.nodes[activeItemIndex].linkUrl} theme=3 >{data.nodes[activeItemIndex].linkLabel}</Button></div>
			</div>
		</div>
		<button class="close" on:click|preventDefault={deselectAllNodes}>&times;</button>
	</div>
	{/if}
</div>
<style lang="sass">
@import "../styles/_variables"
@import "../styles/_mixins"
.InteractiveImage
	background: #333
	border-radius: 4px
	position: relative
	& > img
		display: block
		width: 100%
		height: auto
		z-index: 1
		border-radius: 4px
	& > ul
		position: absolute
		z-index: 5
		list-style: none
		margin: 0
		padding: 0
		+position-offset(0,0,0,0)	
	.popup
		display: none
		width: 90vw
		max-width: 520px
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%,-50%)
		background: white
		border-radius: 4px
		box-shadow: 0 4px 40px rgba(0,0,0,0.4)
		padding: 16px
		z-index: 9
	.node
		width: 0
		height: 0
		position: absolute	
	.dot
		position: absolute
		width: 34px
		height: 34px
		left: -17px
		top: -17px
		border-radius: 50%
		background: $brand-green
		cursor: pointer
		border: 0 none
		+appearance-none
		display: flex
		align-items: center
		justify-content: center
		transition: background .2s
		:global(svg)
			width: 18px
			height: 18px
		&:hover
			background-color: $brand-green-hover		
	.inner
		position: relative
		display: flex
		flex-wrap: wrap
		justify-content: space-between
	.pic
		width: 33%
		background: #eef
		img
			display: block
			width: 100%
			height: 100%
			object-fit: cover
	.text
		width: 63%
		font-size: 14px
		padding-top: 10px
	.title
		font-size: 24px
		margin-bottom: 10px
	.close
		position: absolute
		z-index: 6
		line-height: 1
		top: 3px
		right: 10px
		+appearance-none
		border: 0 none
		cursor: pointer
		background: transparent
		font-size: 30px
		color: #999
		&:hover
			color: black
	.cta
		margin-top: 10px
		:global(a)
			display: inline-block
			padding-left: 30px
			padding-right: 30px	
	.node.is-active
		z-index: 3			
	.panel
		display: none
		position: absolute
		background: white
		border-radius: 4px
		box-shadow: 0 4px 15px rgba(0,0,0,0.2)
		width: 460px
		padding: 16px
		left: 30px
		top: -50px
		&:after
			content: ''
			display: block
			position: absolute
			left: -10px
			top: 35px
			width: 10px
			height: 30px
			width: 0
			height: 0
			border-style: solid
			border-width: 15px 10px 15px 0
			border-color: transparent #ffffff transparent transparent
	.node.is-active .panel
		display: block
	.node.is-active .dot
		background: white
		:global(path)
			fill: $brand-green
		&:hover
			:global(path)
				fill: $brand-green
	.node.is-right .panel
		left: auto
		right: 30px
		&:after
			left: auto
			right: -10px
			border-width: 15px 0 15px 10px
			border-color: transparent transparent transparent #ffffff
	.node.is-bottom .panel
		top: auto
		bottom: -50px
		&:after
			top: auto
			bottom: 35px

	@media (max-width: 1140px)
		.panel
			width: 44vw
	@media (max-width: 960px)
		.panel
			display: none!important
		.popup
			display: block

	@media (max-width: 720px)
		.popup
			max-width: 90%





</style>