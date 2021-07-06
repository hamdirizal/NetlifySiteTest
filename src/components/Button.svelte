<script>
import { createEventDispatcher } from 'svelte';
export let url = '';
export let size = 'normal'; //small, normal, big
export let isButton = false;
export let disabled = false;
export let type = 'button';
export let theme = 1;

const dispatch = createEventDispatcher();
function onClick(e) {
dispatch('click', {
	target: e.target
});
}
</script>

{#if isButton}
<button on:click={onClick} type={type} disabled={disabled} class="is-{size} theme-{theme}"><slot /></button>
{:else}
<a on:click={onClick} disabled={disabled} href="{url}" class="is-{size} theme-{theme}"><slot /></a>
{/if}

<style lang="sass">
@import "../styles/_variables"
a, button
	font-weight: 700
	text-align: center
	display: block
	font-family: $font-1
	font-size: 16px
	text-transform: uppercase
	line-height: 1
	padding: 16px 18px
	border-radius: 4px
	text-decoration: none
	cursor: pointer
	transition: all .2s
	-webkit-appearance: none
	appearance: none

	&[disabled=true]
		opacity: 0.5
		cursor: default
		cursor: not-allowed

	&.is-big
		padding: 22px 30px

.theme-1, .theme-1:visited
	background: $brand-green
	color: white
	border: 0 none
	&:hover:not([disabled=true])
		background-color: $brand-green-hover

.theme-2, .theme-2:visited
	background: $brand-blue
	color: white
	border: 0 none
	&:hover:not([disabled=true])
		background-color: $brand-blue-hover

.theme-3, .theme-3:visited
	background: #e8ecef
	color: $brand-blue
	border: 0 none
	&:hover:not([disabled=true])
		color: #081938
		background-color: #d8e3ea


.theme-4, .theme-4:visited
	background: white
	color: $brand-blue
	border: 0 none
	&:hover:not([disabled=true])
		background-color: #eee


.theme-5, .theme-5:visited
	background: transparent
	color: white
	border: 1px solid white
	&:hover:not([disabled=true])
		border-color: $brand-green
		color: $brand-green
</style>