<script>
import TransformationTabs from "../components/TransformationTabs.svelte";
import SectionHeader from "../components/SectionHeader.svelte";
import Button from "/src/components/Button.svelte";
</script>

<section class="SectionTransformations">
	<div class="container">
		<SectionHeader alignment="center" title="Client Transformations" />
		<TransformationTabs />
		<div class="cta"><Button size="big" url="#/">View All Transformations</Button></div>
	</div>
</section>

<style lang="sass">
	@import "../styles/variables"
	
	.SectionTransformations
		background: #F8FAFC
		padding-top: 60px
		padding-bottom: 100px

		.cta
			margin-top: 40px
			display: flex
			justify-content: center
</style>
