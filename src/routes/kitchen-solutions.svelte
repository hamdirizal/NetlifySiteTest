<script>
	import Button from "/src/components/Button.svelte";
	import SectionHero from "/src/sections/SectionHero.svelte";
</script>

<SectionHero backgroundImage="/uploads/how-we-work-banner.jpg">
	<span slot="title">Kitchen Solutions</span>
	<div slot="description">Convert your cabinets into more practical and usable space with Glide-Out shelving from ShelfGenie.</div>
	<div slot="cta">
		<Button theme="3" size="big">Solution Configurator</Button>
		<Button size="big">Book a Free Consultation</Button>
	</div>
</SectionHero>