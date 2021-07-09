<script>
import SectionTransformations from "/src/sections/SectionTransformations.svelte"
import SectionQuoteBar from "/src/sections/SectionQuoteBar.svelte"
import SectionInspirationGallery from "/src/sections/SectionInspirationGallery.svelte";
import SectionDownloadEbook from "/src/sections/SectionDownloadEbook.svelte";
import SectionSolutionBricks  from "/src/sections/SectionSolutionBricks.svelte";
import SectionTestimonials  from "/src/sections/SectionTestimonials.svelte";
import SectionConfigurator from "/src/sections/SectionConfigurator.svelte";
import SectionLastCta from "/src/sections/SectionLastCta.svelte";
</script>
<SectionTransformations />
<SectionQuoteBar />
<SectionInspirationGallery />
<SectionDownloadEbook />
<SectionSolutionBricks />
<SectionTestimonials />
<SectionConfigurator />
<SectionLastCta />

<style lang="sass">
	:global(.SectionDownloadEbook)
		background: white!important
</style>
