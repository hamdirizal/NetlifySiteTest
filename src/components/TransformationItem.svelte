<script>
	import Button from "/src/components/Button.svelte";
	import BeforeAfter from "/src/components/BeforeAfter.svelte";

	const obj = {
		categoryTitle: '',
		beforeImage: null,
		afterImage: null,
		clientImage: null,
		clientTitle: '',
		clientName: '',
		specs: [
			{title: 'Solutions installed', value: '1'},
		],
		messageTitle: '',
		messageBody: '',
		url: '#/',
	};

	export let content = {};
	content = { ...obj, ...content };
	

</script>
<div class="TransformationItem">
	<div class="slide"><BeforeAfter beforeImage={content.beforeImage} afterImage={content.afterImage} /></div>
	<div class="info">
		<div class="client">
			<div class="client-pic">
				{#if content.clientImage && content.clientImage.length}
				<img src={content.clientImage} alt={content.clientName} />
				{/if}
			</div>
			<h4 class="client-title">{content.clientTitle}</h4>
			<div class="client-name">{content.clientName}</div>
		</div>
		<!-- .client -->
		{#if content.specs && Array.isArray(content.specs) && content.specs.length }
		<div class="specs">
			<ul>
				{#each content.specs as spec}
					<li>
						{#if spec.title && spec.title.length}
							<span>{spec.title}</span>
						{/if}
						{#if spec.value}
							<strong>{spec.value}</strong>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		{/if}
		<!-- .specs -->
		<div class="message">
			<h4 class="message-title">{content.messageTitle}</h4>
			<div class="message-body">
				{content.messageBody}
			</div>
		</div>
		<Button theme="3" url="{content.url}" size="big">Learn More</Button>
	</div>
	<!-- .info -->
</div>

<style lang="sass">
	@import "../styles/_variables"

	.TransformationItem
		display: flex
		justify-content: space-between
		.slide
			flex-grow: 1
			position: relative
			min-height: 400px
		.info
			padding-left: 24px
			width: 400px
			flex-grow: 0
			flex-shrink: 0
			color: $color-text-grey
		.client
			position: relative
			padding-left: 100px
			min-height: 110px			
			padding-bottom: 24px
			margin-bottom: 20px
			border-bottom: 1px solid $color-border-lightgrey
		.client-pic
			width: 84px
			height: 84px
			overflow: hidden
			background: #eee
			position: absolute
			top: 0
			left: 0
			border-radius: 50%
			:global(img)
				display: block
				width: 100%
				height: 100%
				object-fit: cover
		.client-title
			padding-top: 4px
			font-size: 24px
			font-family: $font-2
			color: $color-text-blue
			font-weight: 400
			line-height: 1
		.client-name
			font-size: 14px
			font-weight: bold
			text-transform: uppercase
			letter-spacing: 0.05em
			color: $brand-blue
			margin-top: 8px
		.specs
			padding-bottom: 20px
			margin-bottom: 20px
			border-bottom: 1px solid $color-border-lightgrey
			:global(ul)
				list-style: none
			:global(li)
				display: flex
				justify-content: space-between
				margin-bottom: 10px
				padding-left: 24px
				background: url(/images/icon-checkmark-green.svg) no-repeat left center
			:global(li:last-child)
				margin-bottom: 0
			:global(li > strong)
				width: 120px
				flex-shrink: 0
		.message
			margin-bottom: 24px
		.message-title
			font-size: 24px
			font-weight: 400
			margin-bottom: 16px
		.message-body
			line-height: 1.6



</style>
