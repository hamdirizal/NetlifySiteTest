<script>
import VideoWithCover from '/src/components/VideoWithCover.svelte';
import SectionHeader from '/src/components/SectionHeader.svelte';
import Button from '/src/components/Button.svelte';

let steps = [
	{
		title: "Free Consultation and Custom Solution",
		url: "#/",
		vimeoUrl: "https://player.vimeo.com/video/329162004",
		coverUrl: "/uploads/how-it-works-video-cover.jpg",
		items: [
			{title: 'Free consultation and walkthrough of areas where you want more organization, storage space, or accessibility. '},
			{title: 'A ShelfGenie Designer visits your home, in-person or virtual visit, to generate a 3D rendering of your custom solution in real time. '},
			{title: 'Keep your custom design plan and and adjust it at any time.'},
		],
	},
	{
		title: "Order Your Custom-Made Designs",
		url: "#/",
		vimeoUrl: "https://player.vimeo.com/video/329162004",
		coverUrl: "/uploads/how-it-works-video-cover-2.jpg",
		items: [
			{title: 'Choose the solutions you want from your custom design.'},
			{title: 'ShelfGenie-certified Installer will schedule a field measurement.'},
			{title: 'U.S.-based manufacturing team begins hand-crafting your shelves out of the high-quality, durable materials and finishes you select.'},
		],
	},
	{
		title: "Professional Installation",
		url: "#/",
		vimeoUrl: "https://player.vimeo.com/video/329162004",
		coverUrl: "/uploads/how-it-works-video-cover-3.jpg",
		items: [
			{title: 'ShelfGenie Installer returns to your home to install your custom-made shelving. '},
			{title: 'Your newly organized space will be ready for you to enjoy by dinnertime.'},
			{title: 'Built to last and proudly backed by a warranty, your custom ShelfGenie solutions are made to deliver accessibility, utility, and organization for you and your household.'},
		],
	},
];
</script>
<section class="SectionExperience">
	<div class="container">
	<SectionHeader title="Your ShelfGenie Experience" alignment="center" description="ShelfGenie is more than a product -- it’s an experience. Our three-step process will guide you to the best solutions for your individual needs and lifestyle. " />

	{#each steps as step, index}
		<div class="row">
			<div class="left">
				<div class="index">{index+1}</div>
				<div class="step">Step {index+1}</div>
				<h4 class="title">{step.title}</h4>
				{#if step.items}
					<ul>
					{#each step.items as item }
						<li>{item.title}</li>	
					{/each}
					</ul>
				{/if}
				<div class="cta"><Button url={steps.url} size="big">Book Your Consultation</Button></div>
			</div>
			<div class="right">
				<VideoWithCover coverUrl={step.coverUrl} vimeoUrl={step.vimeoUrl} />
			</div>
		</div>
	{/each}
	</div>
</section>

<style lang="sass">
	@import "../styles/_variables"
	.SectionExperience
		padding-top: 80px
		padding-bottom: 100px
		.row
			display: flex
			justify-content: space-between
			margin-top: 100px
			margin-bottom: 100px
			position: relative
		.left
			padding-right: 40px
			width: 50%
			position: relative
			margin-bottom: 40px
			ul
				position: relative
				z-index: 2
				font-size: 18px
				list-style: none
				margin: 0
				padding: 0
				li
					margin-bottom: 20px
					background: url(/images/icon-checkmark-green.svg) no-repeat left 8px
					background-size: 16px
					padding-left: 24px
		.right
			padding-left: 40px
			width: 50%
		.title
			font-size: 28px
			line-height: 1.1
			color: #1D2228
			margin-bottom: 20px
			z-index: 1
			position: relative
		.step
			font-size: 16px
			text-transform: uppercase
			font-weight: bold
			letter-spacing: 0.05em
			color: $color-text-blue
			z-index: 1
			position: relative
		.index
			z-index: 0
			font-family: $font-2
			font-size: 130px
			position: absolute
			top: -90px
			left: -20px
			color: #e9edf3
			line-height: 1
		.cta :global(a)
			display: inline-block


</style>