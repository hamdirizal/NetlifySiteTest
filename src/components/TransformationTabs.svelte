<script>
import TransformationItem from "./TransformationItem.svelte";

let currentItem = 0;

let contents = [
	{
		categoryTitle: 'Kitchen',
		beforeImage: '/uploads/solution-pantry.jpg',
		afterImage: '/uploads/solution-kitchen.jpg',
		clientImage: '/uploads/client-1.jpg',
		clientTitle: 'Convenience & Customization',
		clientName: 'Marie B., Boise',
		messageBody: '“Your products and solutions have made my kitchen more convenient and certainly have saved my poor knees. Wish this could have been done years ago.”',
		messageTitle: 'Wish this could have been done years ago...',
		specs: [
			{title: 'Solutions installed', value: 4},
			{title: 'Usable storage increase', value: '65%'},
			{title: 'Time frame', value: '8-10 Weeks'},
		],
	},
	{
		categoryTitle: 'Pantry',
		beforeImage: '/uploads/solution-pantry.jpg',
		afterImage: '/uploads/solution-kitchen.jpg',
		clientImage: '/uploads/client-2.jpg',
		clientTitle: 'Convenience & Customization',
		clientName: 'Marie B., Boise',
		messageBody: '',
		specs: null,
	},
	{
		categoryTitle: 'Bathroom',
		beforeImage: '/uploads/solution-pantry.jpg',
		afterImage: '/uploads/solution-kitchen.jpg',
		clientImage: '/uploads/client-3.jpg',
		clientTitle: 'Convenience & Customization',
		clientName: 'Marie B., Boise',
		messageBody: '',
	},
	{
		categoryTitle: 'Workspace',
		beforeImage: '/uploads/solution-pantry.jpg',
		afterImage: '/uploads/solution-kitchen.jpg',
		clientImage: '/uploads/client-4.jpg',
		clientTitle: 'Convenience & Customization',
		clientName: 'Marie B., Boise',
		messageBody: '',
	},
	{
		categoryTitle: 'Closets',
		beforeImage: '/uploads/solution-pantry.jpg',
		afterImage: '/uploads/solution-kitchen.jpg',
		clientImage: '/uploads/client-5.jpg',
		clientTitle: 'Convenience & Customization',
		clientName: 'Marie B., Boise',
		messageBody: '',
	},
];

function switchTab(index){
	currentItem = index;
	console.log(index)
}

</script>
<div class="TransformationTabs">
	{#if contents && contents.length}
		<ul class="tabs">
			{#each contents as content, index}
				<li class={currentItem==index ? 'is-active':''}>
					<a on:click|preventDefault={()=>{switchTab(index)}} href="#/">{content.categoryTitle}</a>
				</li>
			{/each}
		</ul>
	{/if}
	
	<div class="tabcontents">
		{#if contents && contents.length}
		<ul>
			{#each contents as content, index}
			<li class={currentItem==index?'is-active':''}>
				<TransformationItem content={content} />
			</li>
			{/each}
		</ul>
		{/if}
	</div>
</div>

<style lang="sass">
	@import "../styles/variables"

	.TransformationTabs
		.tabs
			list-style: none
			font-size: 18px
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

		.tabcontents
			margin: 40px 0 0
			padding: 0 40px
			& > ul
				background: white
				list-style: none
				margin: 0
				position: relative
				& > li
					padding: 24px
					border-radius: 4px
					box-shadow: 0 20px 40px rgba(0,0,20, 0.1)
					display: block
					position: absolute
					width: 100%
					height: 100%
					opacity: 0
					visibility: hidden
					overflow: hidden
					z-index: 0
				& > li.is-active
					position: relative
					height: auto
					width: auto
					overflow: auto
					z-index: 3
					opacity: 1
					visibility: visible





</style>
