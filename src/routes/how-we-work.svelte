<script>
import SectionHero from "/src/sections/SectionHero.svelte";
import SectionExperience from "/src/sections/SectionExperience.svelte";
import SectionTransformations from "/src/sections/SectionTransformations.svelte";
import SectionTestimonials from "/src/sections/SectionTestimonials.svelte";
import SectionConfigurator from "/src/sections/SectionConfigurator.svelte";
import SectionLastCta from "/src/sections/SectionLastCta.svelte";
</script>
<SectionHero backgroundImage="/uploads/how-we-work-banner.jpg">
	<span slot="title">Our Process</span>
	<div slot="description">The ShelfGenie experience transforms your home’s pain points, eyesores & trouble areas into organized, accessible, usable spaces. Here’s a closer look at our three-step process & what to look forward to at each step.</div>
</SectionHero>
<SectionExperience />
<SectionTransformations />
<SectionTestimonials />
<SectionConfigurator />
<SectionLastCta />
