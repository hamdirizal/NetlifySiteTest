<script>
	import SectionHeader from "/src/components/SectionHeader.svelte";
</script>
<section class="SectionSolutionBricks">
	<div class="container">
		<SectionHeader alignment="left" 
		title="Inspiration Gallery" ctaLabel="Explore Our Solutions" 
		description="Click on a section below to explore how ShelfGenie can enhance your home."
		ctaUrl="#/" />
		
		<div class="grid">
			<ul>
				<li><a href="#/">
					<i><img src="/uploads/solution-kitchen.jpg" alt=""></i>
					<span>Kitchen</span>
				</a></li>
				<li><a href="#/">
					<i><img src="/uploads/solution-pantry.jpg" alt=""></i>
					<span>Pantry</span>
				</a></li>
				<li><a href="#/">
					<i><img src="/uploads/solution-bathroom.jpg" alt=""></i>
					<span>Bathroom</span>
				</a></li>
				<li>
					<ul>
						<li><a href="#/">
							<i><img src="/uploads/solution-closets.jpg" alt=""></i>
							<span>Closets</span>
						</a></li>
						<li><a href="#/">
							<i><img src="/uploads/solution-specialty.jpg" alt=""></i>
							<span>Specialty</span>
						</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div><!-- .container -->
</section>
<style lang="sass">
	@import "../styles/variables"
	.SectionSolutionBricks
		background: #F5F8FC
		padding-top: 80px
		padding-bottom: 100px

		.grid
			ul
				list-style: none
				margin: 0
				margin-left: -8px
				margin-right: -8px
				padding: 0
				display: flex
				flex-wrap: wrap
				li          
					width: 50%
					padding-left: 8px
					padding-right: 8px
					margin-bottom: 16px
				a
					display: block
					height: 340px
					overflow: hidden
					border-radius: 4px
					position: relative
					&:after
						content: ''
						display: block
						position: absolute
						top: 30px
						left: 0
						right: 0
						bottom: 0
						background: rgb(0,0,0)
						background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)
						z-index: 2
					span
						z-index: 5
						position: absolute
						bottom: 24px
						left: 0
						right: 0
						color: white
						text-align: center
						font-size: 34px
						font-family: $font-2
						line-height: 1.35

					i
						display: block
						position: absolute
						top: 0
						bottom: 0
						right: 0 
						left: 0
						z-index: 1
					img
						display: block
						width: 100%
						height: 100%
						position: absolute
						top: 0
						left: 0
						object-fit: cover

</style>