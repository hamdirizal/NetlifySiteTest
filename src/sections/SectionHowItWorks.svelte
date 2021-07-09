<script>
	import VideoWithCover from "/src/components/VideoWithCover.svelte";
	import Button from "/src/components/Button.svelte";
	import SectionHeader from "/src/components/SectionHeader.svelte";
</script>
<section class="SectionHowItWorks">
	<div class="container">
		<SectionHeader alignment="center" title="How It Works" />
		<div class="row-1">
			<div class="col">
				<ul class="list">
					<li>
						<span class="pic"><i><img src="/images/icon-hiw-consultation.svg" alt=""></i></span>
						<h5 class="title">Free design consultation and custom solution</h5>
					</li>
					<li>
						<span class="pic"><i><img src="/images/icon-hiw-design.svg" alt=""></i></span>
						<h5 class="title">Order your custom made design</h5>
					</li>
					<li>
						<span class="pic"><i><img src="/images/icon-hiw-installation.svg" alt=""></i></span>
						<h5 class="title">Professional installation</h5>
					</li>
				</ul>
			</div>
			<div class="col">
				<VideoWithCover 
				coverUrl="/uploads/how-it-works-video-cover.jpg"
				vimeoUrl="https://player.vimeo.com/video/329162004" />
			</div>
		</div> <!-- .row-1 -->
		<div class="row-2">
			<Button theme="3" url="#/" size="big">Learn More</Button>
			<Button url="#/" size="big">Book a Consultation</Button>
		</div><!-- .row-2	 -->
	</div><!-- .container -->
</section>
<style lang="sass">
	@import "../styles/variables"
	.SectionHowItWorks
		background: white
		padding-top: 80px
		padding-bottom: 100px

		.row-1
			display: flex
			justify-content: space-between
			align-items: center

			.col:nth-child(1)
				padding-right: 40px
				width: 50%

			.col:nth-child(2)
				padding-left: 40px
				width: 50%

		.row-2
			display: flex
			justify-content: center
			margin-top: 50px

			& > :global(a)
				margin-left: 10px
				margin-right: 10px
		
		.list
			list-style: none
			margin: 0
			padding: 0
			& > li
				position: relative
				display: flex
				align-items: center

				&:not(:last-child)
					margin-bottom: 24px

			.pic
				flex-grow: 0
				flex-shrink: 0
				width: 100px

				i
					display: block
					background: $color-text-blue
					width: 78px
					height: 78px
					color: white
					border-radius: 50%
					display: flex
					align-items: center
					justify-content: center

			.title
				font-size: 24px
				color: #182230
				line-height: 1.3


</style>