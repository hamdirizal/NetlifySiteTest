<script>
import { createEventDispatcher } from 'svelte';

export let name = ''
export let value = ''	
export let label = ''	

const dispatch = createEventDispatcher();
function onChanged(e) {
	dispatch('change', {
		value: e.target.value,
		checked: e.target.checked
	});
}

</script>
<div class="RadioWithIcon">
	<label>
		<input type="radio" on:change={onChanged}  name={name} value={value} label={label}>
		<div class="card">
			<div class="ctn">				
				<slot />
				<span>{label}</span>
			</div>
			<i></i>
		</div>
	</label>
</div>

<style lang="sass">
@import '../styles/_variables'

.RadioWithIcon
	position: relative
input[type=radio]
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
	height: 0
	padding-bottom: 100%
	.ctn
		position: absolute
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
		display: block
		font-size: 22px
		font-family: $font-2
		margin-top: 14px
		margin-bottom: 14px
		font-weight: 400
		line-height: 1.2
		padding-left: 10px
		padding-right: 10px
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
	:global(path)
		fill: $brand-blue

input[type=radio]:checked + .card
	background: $brand-green
	color: white
	i
		border: 0 none
		background-image: url(/images/icon-checkmark-green.svg)
		background-repeat: no-repeat
		background-position: center center
	:global(path)
		fill: white

@media (max-width: 768px)
	.card
		span
			font-size: 18px


</style>