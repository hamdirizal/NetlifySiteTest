<script>
	import SiteHeader1 from "/src/sections/SiteHeader1.svelte";
	import SiteHeader2 from "/src/sections/SiteHeader2.svelte";
	import SiteFooter1 from "/src/sections/SiteFooter1.svelte";
	import SiteFooter2 from "/src/sections/SiteFooter2.svelte";
</script>

<svelte:head>
	<title>The New ShelfGenie</title>
	<style lang="sass">
		@import '../styles/main'
	</style>
</svelte:head>

<SiteHeader1 />
<SiteHeader2 />
<slot></slot>
<SiteFooter1 />
<SiteFooter2 />


