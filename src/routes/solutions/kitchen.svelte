<script>
	import SectionHowItWorks from "/src/sections/SectionHowItWorks.svelte";
	import Button from "/src/components/Button.svelte";
	import SectionHero from "/src/sections/SectionHero.svelte";
	import SectionInteractiveImage from "/src/sections/SectionInteractiveImage.svelte";
	import SectionSolutionsGallery from "/src/sections/SectionSolutionsGallery.svelte";
	import SectionTransformations from "/src/sections/SectionTransformations.svelte";
	import SectionInspirations from "/src/sections/SectionInspirations.svelte";
	import SectionTestimonials from "/src/sections/SectionTestimonials.svelte";
	import SectionConfigurator from "/src/sections/SectionConfigurator.svelte";
	import SectionBlogFeatured from "/src/sections/SectionBlogFeatured.svelte";
	import SectionLastCta from "/src/sections/SectionLastCta.svelte";
</script>

<SectionHero backgroundImage="/uploads/how-we-work-banner.jpg">
	<span slot="title">Kitchen Solutions</span>
	<div slot="description">Convert your cabinets into more practical and usable space with Glide-Out shelving from ShelfGenie.</div>
	<div slot="cta">
		<Button theme="3" size="big">Solution Configurator</Button>
		<Button size="big">Book a Free Consultation</Button>
	</div>
</SectionHero>

<SectionInteractiveImage />
<SectionSolutionsGallery />
<SectionTransformations />
<SectionHowItWorks />
<SectionInspirations />
<SectionTestimonials />
<SectionConfigurator />
<SectionBlogFeatured />
<SectionLastCta />