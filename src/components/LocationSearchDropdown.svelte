<script>
	let openedClassName = ''

	function openDropdown(){
		openedClassName = 'is-opened'
	}

	function closeDropdown(){
		openedClassName = '';
	}
	
</script>
<svelte:body on:click={closeDropdown} />
<div class="LocationSearchDropdown {openedClassName}" on:click|stopPropagation={()=>{}}>
	<div class="locationbox">
		<a href="#/" class="handle" on:click|preventDefault={openDropdown}><i></i> Find my ShelfGenie partner</a>
		<div class="dropdown">
			<h4>Change Location</h4>
			<div>Search for your location</div>
			<div class="inputbox"><input type="text" placeholder="ZIP/ Postal Code"></div>
			<div class="message">No franchise covers your area right now. Please call <a href="tel:8889038839">(888) 903-8839</a> to learn more.</div>
			<div class="message">Location(s) near you</div>
			<ul class="results">
				<li><a href="#/">Columbus - Saunders 43004</a></li>
				<li><a href="#/">Lorem - Ipsum 43004</a></li>
				<li><a href="#/">Dolor - Sit Amet 43004</a></li>
			</ul>
		</div>
	</div>
	<div class="phonebox"><a href="tel:8889038839"><i></i>(888) 903-8839</a></div>
	
</div>

<style lang="sass">
@import "../styles/_variables"
@import "../styles/_mixins"

.LocationSearchDropdown
	display: flex

	a, a:visited
		color: white
		text-decoration: none
		&:hover
			color: $color-link-lightgreen

	.locationbox
		margin-right: 20px
		padding-right: 24px
		position: relative
		display: flex

	.handle
		display: flex
		align-items: center
		padding-top: 20px
		padding-bottom: 20px
		i
			display: block
			width: 20px
			height: 20px
			background: url(/images/icon-marker-white.svg) no-repeat center center
		&:after
			content: ''
			display: block
			position: absolute
			right: 0
			top: 23px
			bottom: 23px
			border-right: 1px solid white
	
	.dropdown
		display: none
		line-height: 1.2
		width: 300px
		position: absolute
		top: 61px
		left: 0
		color: $color-text-default
		background: white
		box-shadow: 0 4px 20px rgba(0,0,0,0.3)
		padding: 24px
		&:after
			content: ''
			display: block
			position: absolute
			top: -10px
			left: 20px
			width: 0
			height: 0
			border-style: solid
			border-width: 0 10px 10px 10px
			border-color: transparent transparent white transparent
	.message
		color: $color-text-default
		margin-bottom: 12px
		a, a:visited
			color: $brand-blue
	h4
		font-size: 18px
		font-family: $font-1
		margin-bottom: 8px
		font-weight: bold
	.inputbox
		position: relative
		margin-top: 10px
		margin-bottom: 14px
		input[type=text]
			width: 100%
			font-family: $font-1
			border: 1px solid #becdd8
			font-size: 15px
			padding: 8px 12px
			color: black
			outline: none
			&:focus
				border-color: $brand-green
			&::placeholder
				color: #ccc

	.results
		color: $color-text-darkblue
		font-size: 15px
		font-weight: bold
		list-style: none
		li
			border-bottom: 1px dotted #ccc
			&:last-child
				border-bottom: 0 none
		a, a:visited
			color: inherit
			display: block
			padding-top: 10px
			padding-bottom: 10px
			&:hover
				color: $brand-green

	.phonebox
		a
			display: flex
			align-items: center
			padding-top: 20px
			padding-bottom: 20px
		i
			display: block
			width: 20px
			height: 20px
			background: url(/images/icon-phone-white.svg) no-repeat center center

	&.is-opened .dropdown
		display: block
</style>
