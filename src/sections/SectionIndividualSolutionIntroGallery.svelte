<script>
	import GalleryGrid from "../components/GalleryGrid.svelte";
	import SectionHeader from "../components/SectionHeader.svelte";
</script>

<section class="SectionIndividualSolutionIntroGallery">
	<div class="container">

		<SectionHeader title="Lazy Susan" description="Everything you need to know about the classic tabletop platform that puts everything within reach." />
		<GalleryGrid />
	</div>
</section>
<style lang="sass">
	@import "../styles/_variables"

	.SectionIndividualSolutionIntroGallery
		padding-top: 60px
		padding-bottom: 60px
		background: #F8FAFC

</style>
