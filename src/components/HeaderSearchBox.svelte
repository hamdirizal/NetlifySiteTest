<script>
let openedClassName = ''

let searchInputElement;
function openSearch(){
	openedClassName = 'is-opened';
	if(searchInputElement){
		searchInputElement.focus()
	}
}

function closeSearch(){
	openedClassName = '';
}
</script>

<svelte:body on:click={closeSearch} />
<div class="HeaderSearchBox searchbox {openedClassName}" on:click|stopPropagation={()=>{}}>
	<form action="">
		<div class="inputbox">
			<input type="text" placeholder="Search.." bind:this={searchInputElement}>
		</div>
		<button type="submit"></button>
	</form>
	<a href="#/" on:click|preventDefault|stopPropagation={openSearch}  class="toggle"></a>
</div>
<style lang="sass">
@import "../styles/_variables"
@import "../styles/_mixins"

.HeaderSearchBox
	position: relative
	.toggle
		position: absolute
		z-index: 5
		+position-offset(-8px,-8px,-8px,-8px)

	.inputbox
		position: relative
		z-index: 1
		height: 36px
		width: 32px
		transition: all .2s
		opacity: 0

	input[type=text]
		display: block
		width: 100%
		height: 100%
		position: relative
		border: 0 none
		background: #436cb5
		border-radius: 5px
		outline: none
		color: white
		padding-left: 8px
		font-family: $font-1
		font-size: 15px
		&::placeholder
			color: #8cb5ff
	button
		position: absolute
		width: 20px
		height: 100%
		cursor: pointer
		right: 6px
		top: 0
		z-index: 2
		background: url(/images/icon-magnifier-white.svg) no-repeat center center
		border: 0 none
		-webkit-appearance: none
		appearance: none
	
	&.is-opened .inputbox
		opacity: 1
		width: 200px
	&.is-opened .toggle
		display: none
</style>