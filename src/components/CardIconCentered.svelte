<script>
	import { isObject } from '../js/utils.js'
	export let data = {};

	//Normalise data
	let obj = {
		title: null,
		description: null,
		imageUrl: null,
	}
	data = isObject(data) ? {...obj, ...data} : {...obj}

</script>
<div class="CardIconCentered">
	{#if data.imageUrl && data.imageUrl.length}
	<div class="pic"><img src={data.imageUrl} alt=""></div>
	{/if}
	{#if data.title && data.title.length}
	<h5 class="title">{data.title}</h5>
	{/if}
	{#if data.description && data.description.length}
	<div class="description">{@html data.description}</div>
	{/if}
</div>
<style lang="sass">
	@import "../styles/_variables"
	.CardIconCentered
		text-align: center
		font-size: 15px
		color: $color-text-grey
		.pic
			margin-bottom: 15px
		.title
			margin-bottom: 15px
			font-size: 24px
			color: $color-text-default
</style>