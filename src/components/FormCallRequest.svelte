<script>
	import Button from "./Button.svelte";
</script>

<div class="FormCallRequest">
	<div class="form-wrapper">
		<form method="get" action="#/">
			<div class="group is-half">
				<label>First Name</label>
				<input type="text" placeholder="First Name">
			</div>
			<div class="group is-half">
				<label>Last Name</label>
				<input type="text" placeholder="Last Name">
			</div>
			<div class="group">
				<label>Zip/ Postal Code</label>
				<input type="text" placeholder="Zip/ Postal Code">
			</div>
			<div class="group">
				<label>Phone Number</label>
				<input type="tel" placeholder="Phone Number">
			</div>
			<div class="group">
				<label>Email Address</label>
				<input type="email" placeholder="Email Address">
			</div>
			<div class="group">
				<Button isButton={true}>Request a Call</Button>
			</div>
		</form>
	</div>
</div>

<style lang="sass">
	@import "../styles/_variables"
	$side-padding: 12px

	.FormCallRequest
		.form-wrapper
			margin-left: -$side-padding
			margin-right: -$side-padding
		form
			display: flex
			flex-wrap: wrap
		.group
			margin-bottom: 20px
			display: block
			width: 100%
			padding-left: $side-padding
			padding-right: $side-padding
			&:last-child
				margin-bottom: 0
			&.is-half
				width: 50%
		input[type=text],input[type=email],input[type=tel]
			display: block
			width: 100%
			border: 1px solid $color-border-lightgrey
			font-family: $font-1
			font-size: 16px
			border-radius: 4px
			padding: 15px 10px
			margin-top: 3px
			outline: none
			color: black
			&::placeholder
				color: #aaa
			&:focus
				border-color: $brand-green
		label
			font-weight: bold
			font-size: 15px
			color: $color-text-blue
</style>