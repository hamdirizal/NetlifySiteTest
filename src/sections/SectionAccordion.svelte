<script>
	export let data = [];
	//Normalize the data
	if(data && Array.isArray(data)){
		let obj = 	{
			title: '',
			description: ''
		}
		for(let i=0; i<data.length; i++){
			data[i] = {...obj, ...data[i]}
		}
		data = data
	}

	let activeIndex = null;
	function selectItem(index){
		activeIndex = (activeIndex===index) ? null : index;
	}
</script>
<section class="SectionAccordion">
	<div class="container">
		{#if data && Array.isArray(data) && data.length}
		<ul>
			{#each data as item, index}
			<li class:is-active={index===activeIndex}>
				<h5 class="title" on:click|preventDefault={()=>{selectItem(index)}}><i></i><span>{item.title}</span></h5>
				<div class="content">{@html item.description}</div>
			</li>
			{/each}
		</ul>
		{/if}
	</div>
</section>
<style lang="sass">
	@import "../styles/_variables"
	.SectionAccordion
		padding-top: 80px
		padding-bottom: 100px
	ul
		list-style: none
		margin: 0
	li
		position: relative
		margin-bottom: 30px
		border: 1px solid $color-border-lightgrey
		border-radius: 4px
		padding: 20px 24px
		&:last-child
			margin-bottom: 0
	.title
		cursor: pointer
		font-size: 24px
		color: $color-text-darkgrey
		line-height: 1
		position: relative
		padding-left: 50px
		i
			box-sizing: border-box
			display: block
			width: 36px
			height: 36px
			border-radius: 50%
			border: 3px solid #C2CEDC
			position: absolute
			top: -6px
			left: 0
			&:before, &:after
				content: ''
				display: block
				position: absolute
				left: 50%
				top: 50%
				transform: translate(-50%, -50%)
				width: 20px
				height: 3px
				background: #C2CEDC
			&:after
				width: 3px
				height: 20px
	.content
		display: none
		margin-top: 14px
		font-size: 14px
		margin-left: 50px
		padding-right: 40px

	li.is-active
		z-index: 2
		box-shadow: 0px 8px 14px rgba(0,0,0,0.1)

	li.is-active .content
		display: block
	li.is-active .title
		color: $brand-green
	li.is-active .title i
		border-color: $brand-green
		&:before, &:after
			background: $brand-green
		&:after
			display: none

	@media (max-width: 768px)
		li
			padding-left: 10px
			margin-bottom: 10px
		.title
			font-size: 20px
		.content
			padding-right: 0

</style>