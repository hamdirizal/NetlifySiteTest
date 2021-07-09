<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				stack: error.stack
			}
		};
	}
</script>

<script>
	export let title;
	export let stack;
</script>
<section class="Section404">
	<div class="container">
		<h1>
			<strong>404</strong>
			<span>Page not found</span>
		</h1>
		<p>The page you're looking for doesn't exist or another error occured.</p>
		<p><a href="/">Click here to choose a new direction.</a></p>		
	</div>
	{#if title && stack}
	<div class="error">
		<pre>{title}</pre>
		<pre>{stack}</pre>
	</div>
	{/if}
</section>
<style lang='sass'>
	@import "../styles/_variables"
	.Section404
		padding-top: 80px
		padding-bottom: 120px
		background: #F8FAFC
		.container
			max-width: 640px
		h1 
			line-height: 1
			color: $color-text-darkgrey
			strong
				display: block
				font-weight: normal
				font-size: 100px
			span
				display: block

		a, a:visited
			color: $brand-green

		.error
			padding: 10px 20px
			margin-top: 20px
			font-size: 13px
			margin-left: 20px
			margin-right: 20px
			border: 2px solid red
			pre
				white-space: break-spaces
</style>




