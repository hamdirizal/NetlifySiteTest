<script>
import InteractiveImage from "/src/components/InteractiveImage.svelte";
import SectionHeader from "/src/components/SectionHeader.svelte";

</script>
<section class="SectionInteractiveImage">
	<div class="container">
		<SectionHeader title="Explore How ShelfGenie Custom Solutions Bring Everything Within Reach" alignment="center" />
		<InteractiveImage />
	</div>
</section>

<style lang="sass">
.SectionInteractiveImage
	background: white
	padding-top: 80px
	padding-bottom: 100px
	:global(.SectionHeader)
		max-width: 900px
</style>