<script context="module">
	export const load = async ({fetch}) => {
		const res = await fetch("blog/2021-07-07-this-is-my-second-blog-title.json");
		const data = await res.json();
		return {
			props: {
				data,
			}
		}
	};
</script>
<script>export let data</script>
<h1>This is my test page</h1>
<div>
	<pre>{JSON.stringify(data)}</pre>
</div>

