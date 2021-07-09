<script>
	export let data=[];
	//Normalize the data
	if(data && Array.isArray(data)){
		let obj = 	{
			title: 'Lorem Ipsum',
			url: ''
		}
		for(let i=0; i<data.length; i++){
			data[i] = {...obj, ...data[i]}
		}
		data = data
	}
</script>
<div class="SectionBreadcrumbs">
	<div class="container">
		{#if data && Array.isArray(data) && data.length}
		<ul>
			{#each data as item}
			<li>
				{#if item.url && item.url.length}
				<a href="{item.url}">{item.title}</a>
				{:else}
				<span>{item.title}</span>
				{/if}
			</li>
			{/each}
		</ul>
		{/if}
	</div>
</div>


<style lang="sass">
@import "../styles/_variables"
.SectionBreadcrumbs
	background: #f0f2f7
	padding-top: 20px
	padding-bottom: 20px
	letter-spacing: 0.05em
	text-transform: uppercase
	font-weight: bold
	color: $brand-blue
	ul
		list-style: none
		display: flex
		margin: 0
		padding: 0
		font-size: 15px
	li
		margin-right: 15px
		&:after
			content: '/'
			color: inherit
			display: inline-block
			margin-left: 10px
			font-size: 12px
		&:last-child:after
			display: none

	a, a:visited
		text-decoration: none
		color: inherit
	a:hover
		color: $brand-green

	span
		color: $color-text-grey

	@media (max-width: 480px)
		ul
			display: block
			font-size: 13px
		li
			display: inline-block
			margin-right: 6px
			padding-right: 0
			&:after
				margin-left: 3px



</style>