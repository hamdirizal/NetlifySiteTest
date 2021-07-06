<!-- <script context="module">
	export const load = async ({page, fetch, session, context})=>{
		console.log(page)
		console.log(fetch)
		console.log(session)
		console.log(context)
		return {
			test:123
		}
	}
</script> -->
<!-- <script context="module">
	export const load = async () => {
	  const res = await fetch("https://pokeapi.co/api/v2/pokemon/5");
	  const data = await res.json();
	  return {
	    props: {
	      data
	    }
	  }
	};
</script> -->
<script>
import SectionConfigurator from "/src/sections/SectionConfigurator.svelte";
</script>
<SectionConfigurator />

