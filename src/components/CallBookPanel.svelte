<script>
	import FormBookOnline from "./FormBookOnline.svelte"
	import FormCallRequest from "./FormCallRequest.svelte"

	let activeTabNum = 1;
	function tabClicked(val){
		activeTabNum = val;
	}	
</script>
<div class="call-book-panel">
	<ul class="tabs">
		<li class="{activeTabNum === 1 ? 'is-active' : ''}"><a on:click={()=>{tabClicked(1)}} >Book Online</a></li>
		<li class="{activeTabNum === 2 ? 'is-active' : ''}"><a on:click={()=>{tabClicked(2)}} >Request a Call</a></li>
	</ul>
	<ul class="tabcontents">
		<li class="{activeTabNum === 1 ? 'is-active' : ''}">
			<FormBookOnline />
		</li>
		<li class="{activeTabNum === 2 ? 'is-active' : ''}">
			<FormCallRequest />
		</li>
	</ul>
</div><!--.call-book-panel-->

<style lang="sass">
@import "../styles/variables"

.call-book-panel		
	border-radius: 4px
	overflow: hidden
	box-shadow: 0 10px 20px rgba(0,0,0,0.2)
	ul.tabs
		list-style: none
		margin: 0
		padding: 0
		display: flex      
		font-size: 24px
		font-family: $font-2
		line-height: 1

		li
			flex-grow: 1

		a, a:visited
			text-align: center
			display: block
			text-decoration: none
			background: white
			padding: 16px 24px
			color: #bbc3d1
			border-top: 4px solid #bbc3d1
			background-color: #fdfdfd
			transition: all .2s
			line-height: 1
			cursor: pointer
			box-shadow: inset 0 -5px 10px rgba(0,0,0,0.1)

		& > li.is-active
			a, a:hover
				cursor: default
				border-top: 4px solid #234889
				color: #234889
				background-color: white
				box-shadow: none

	ul.tabcontents
		list-style: none
		padding: 0
		margin: 0
		background: white
		& > li
			display: none
			padding: 20px 40px 40px
		& > li.is-active
			display: block

	@media (max-width: 767px)
		ul.tabs
			font-size: 18px
</style>