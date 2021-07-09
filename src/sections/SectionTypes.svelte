<script>
import CardIconCentered from "/src/components/CardIconCentered.svelte";
import SectionHeader from "/src/components/SectionHeader.svelte";

export let data = [];

//Normalize the data
if(data && Array.isArray(data)){
	let obj = 	{
		imageUrl: '',
		title: '',
		description: '',
	}
	for(let i=0; i<data.length; i++){
		data[i] = {...obj, ...data[i]}
	}
	data = data
}

</script>
<section class="SectionTypes">
	<div class="container">
		<SectionHeader title="Types of Lazy Susan" alignment="center"/>
		{#if data && Array.isArray(data)}
		<div class="list">
			<ul>
				{#each data as item}
				<li><CardIconCentered data={item} /></li>
				{/each}
			</ul>
		</div>
		{/if}
	</div>
</section>
<style lang="sass">
	@use 'sass:math'
	$gap: 60px
	$gap-tablet: 40px
	.SectionTypes
		background: #F8FAFC
		padding-top: 80px
		padding-bottom: 100px
		overflow: hidden
		.list
			margin-left: math.div(-$gap,2)
			margin-right: math.div(-$gap,2)
		ul
			display: flex
			flex-wrap: wrap
			list-style: none
			margin: 0
		li
			width: 33%
			padding-left: math.div($gap,2)
			padding-right: math.div($gap,2)

		@media (max-width: 960px)
			.list
				margin-left: math.div(-$gap-tablet,2)
				margin-right: math.div(-$gap-tablet,2)
			li
				padding-left: math.div($gap-tablet,2)
				padding-right: math.div($gap-tablet,2)
		@media (max-width: 767px)
			li
				width: 100%
				margin-bottom: 50px
				&:last-child
					margin-bottom: 0

</style>