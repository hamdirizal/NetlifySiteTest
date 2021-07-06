<script>
	export let unitWidth = 16;
	export let unitHeight = 9;
	export let coverUrl = null;
	export let vimeoUrl = null;

	let ratio = unitHeight / unitWidth * 100;
	let isPlaying = false;

	function playVideo(){
		isPlaying = true;
	}	
</script>

<div class="VideoWithCover" style="padding-bottom: {ratio+'%'}">
	<div class="player">
		{#if vimeoUrl!==null}
		<iframe src={vimeoUrl} title=""></iframe>
		{/if}
	</div>
	{#if !isPlaying}
	<a href="#/" on:click|preventDefault={playVideo} class="cover">		
		<b>
			{#if coverUrl!==null}
			<img src={coverUrl} alt="">
			{/if}
		</b>
		<i></i>
	</a>  
	{/if}
</div>
	

<style lang="sass">
	@import "../styles/mixins"
	.VideoWithCover
		position: relative
		width: 100%
		padding-bottom: 100%
		height: 0
		overflow: hidden
		border-radius: 4px
		.cover
			z-index: 5
			position: absolute
			+position-offset(0,0,0,0)
			i
				position: absolute
				z-index: 2
				width: 94px
				height: 94px
				top: 50%
				left: 50%
				transform: translate(-50%, -50%)
				border: 4px solid white
				border-radius: 50%
				background: url(/images/icon-play-white.svg) no-repeat center center
				opacity: 0.7
				transition: all .2s
			&:hover i
				opacity: 1

			b
				position: absolute
				background: black
				z-index: 1
				+position-offset(0,0,0,0)
			img
				display: block
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 100%
				object-fit: cover
		.player
			z-index: 1
			position: absolute
			+position-offset(0,0,0,0)
			iframe
				border: 0 none
				width: 100%
				height: 100%
</style>