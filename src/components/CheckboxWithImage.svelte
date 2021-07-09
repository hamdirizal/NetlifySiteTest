<script>
import { createEventDispatcher } from 'svelte';

export let name = ''
export let value = ''	
export let label = ''
export let imageUrl = ''

const dispatch = createEventDispatcher();
function onChanged(e) {
	dispatch('change', {
		value: e.target.value,
		checked: e.target.checked
	});
}



</script>
<div class="CheckboxWithImage">
	<label>
		<input type="checkbox" on:change={onChanged}  name={name} value={value} label={label}>
		<div class="card">
			<div class="ctn">
				{#if imageUrl && imageUrl.length}
					<b><img src={imageUrl} alt={label}></b>
				{/if}
				<span>{label}</span>
			</div>
			<i></i>
		</div>
	</label>
</div>

<style lang="sass">
@import '../styles/_variables'
@import '../styles/_mixins'

.CheckboxWithImage
	position: relative
input[type=checkbox]
	visibility: hidden
	position: absolute
	top: 0
	left: 0

.card
	position: relative
	background: white
	color: $brand-blue
	transition: all .2s
	border-radius: 4px
	overflow: hidden
	.ctn
		position: relative
		width: 100%
		height: 100%
		display: flex
		flex-direction: column
		flex-wrap: wrap
		align-items: center
		justify-content: center
		text-align: center
	span
		width: 100%
		display: flex
		align-items: center
		justify-content: center
		font-size: 20px
		font-family: $font-2
		font-weight: 400
		line-height: 1.2
		padding-left: 10px
		padding-right: 10px
		margin-top: 18px
		margin-bottom: 18px
		min-height: 2.4em
		overflow: hidden
	i
		width: 20px
		height: 20px
		background: white
		border: 2px solid #aaa
		border-radius: 50%
		display: block
		position: absolute
		right: 10px
		top: 10px
	b
		display: block
		position: relative
		padding-bottom: 70%
		width: 100%
		background: black
	img
		display: block
		width: 100%
		height: 100%
		position: absolute
		top: 0
		left: 0
		object-fit: cover
		opacity: 0.6

	:global(path)
		fill: $brand-blue

input[type=checkbox]:checked + .card
	background: $brand-green
	color: white
	i
		border: 0 none
		background-image: url(/images/icon-checkmark-green.svg)
		background-repeat: no-repeat
		background-position: center center
	b:after
		content: ''
		position: absolute
		+position-offset(0,0,0,0)
		border: 4px solid $brand-green
		border-bottom: 0 none
	:global(path)
		fill: white

@media (max-width: 768px)
	.card
		span
			font-size: 16px

</style>