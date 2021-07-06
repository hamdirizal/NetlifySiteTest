<script>
import { onMount } from 'svelte';

// Acceptable props
export let beforeImage = null
export let afterImage = null

let myBox;
let myImage
let myKnob;
let myBefore;
let ratio = 100;
let x = 0;
let separatorBorderWidth = 4

const handleKnobDrag = function(){

	if(!myKnob || !myImage || !myBox || !myBefore) return;
	let dx = 0

	function handleMouseMove(e){
		x = e.clientX - myKnob.parentNode.getBoundingClientRect().x - dx
		x = Math.max(x, 0)
		x = Math.min(x, myKnob.parentNode.clientWidth - myKnob.clientWidth)

		myKnob.style.left = (x * ratio) + '%'; //Using % instead of px to handle different screen sizes
		myBefore.style.width = ((myKnob.clientWidth * 0.5 + separatorBorderWidth * 0.5 + x ) * ratio) + '%'; //Width using %
	}

	function handleMouseDown(e){
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		dx = e.clientX - myKnob.getBoundingClientRect().x
	}
	
	function handleMouseUp(){
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
	}

	myKnob.addEventListener('mousedown', handleMouseDown);
	window.addEventListener('mouseup', handleMouseUp);

	//Return function will be called on component destroyed
	return function(){
		myKnob.removeEventListener('mousedown', handleMouseDown);
	}

}


const handleScreenResize = function(){
	if(!myKnob || !myImage || !myBox || !myBefore) return;

	let throttle = null;

	let resizeImage = function(){
		if(!myKnob || !myImage || !myBox || !myBefore) return;
		ratio = 100 / myBox.clientWidth;
		myImage.style.width = myBox.clientWidth + "px"
		myBefore.style.width = (myKnob.clientWidth * 0.5 + separatorBorderWidth * 0.5 + myKnob.offsetLeft) * ratio + '%'
	}

	let onWindowResized = function(){
		if(throttle) clearTimeout(throttle);
		throttle = setTimeout(function(){
			resizeImage();
		}, 200)
	}

	window.addEventListener('resize',onWindowResized);
	resizeImage();

	return function(){
		window.removeEventListener('resize',onWindowResized)
	}

}

onMount(handleScreenResize);
onMount(handleKnobDrag);


</script>

<div class="BeforeAfter" bind:this={myBox}>
	<div class="after">
		{#if afterImage}
		<img src={afterImage} alt="">
		{/if}
	</div>
	<div class="before" bind:this={myBefore} >
		{#if beforeImage}
		<img bind:this={myImage} src={beforeImage} alt="">
		{/if}
	</div>
	<div class="overlay"></div>
	<div class="knob" bind:this={myKnob}	></div>
</div>

<style lang="sass">
	@import "../styles/_variables"
	@import "../styles/_mixins"

	.BeforeAfter
		position: absolute
		width: 100%
		height: 100%
		user-select: none
		.before, .after
			position: absolute
			top: 0
			left: 0
			bottom: 0
			right: 0
			z-index: 1
			overflow: hidden
		.before
			width: 50%
			border-right: 4px solid white
		.after
			z-index: 0
		.overlay
			position: absolute
			+position-offset(0,0,0,0)
			z-index: 2
		.knob
			width: 48px
			height: 48px
			background: url(/images/icon-drag-left-right.svg) no-repeat center center
			background-color: white
			position: absolute
			z-index: 3
			border-radius: 50%
			top: 50%
			left: 50%
			transform: translateY(-50%)
			cursor: move
		img
			display: block
			object-fit: cover
			width: 100%
			height: 100%

</style>