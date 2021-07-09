<script>
	import SectionHeader from "/src/components/SectionHeader.svelte";
	import CardGrid1 from "/src/components/CardGrid1.svelte";
	import KitchenSolutionsGalleryStore from '../stores/KitchenSolutionsGalleryStore';	
</script>
<div class="SectionSolutionsGallery">
	<div class="container">
		<SectionHeader alignment="center" title="Gallery of Kitchen Solutions" />
		<CardGrid1 items={$KitchenSolutionsGalleryStore}/>
	</div>
</div>
<style lang="sass">
.SectionSolutionsGallery
	padding-top: 80px
	padding-bottom: 100px
</style>