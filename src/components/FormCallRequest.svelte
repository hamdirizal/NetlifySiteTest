<script>
	import Button from "./Button.svelte";
	import {formDataToObject} from "/src/js/utils.js";
	
	let isLoading = false
	let errorMessage = null
	let success = false
	
	
	function submitForm(e){
		e.preventDefault()
		isLoading = true;
		let requestObj = formDataToObject(new FormData(e.target));
		
		requestObj.name = requestObj.firstname + ' ' + requestObj.lastname;
		requestObj.status = 'Active';
		requestObj.gender = 'Male';
	
		fetch('https://gorest.co.in/public-api/users',{
			method: 'POST', // or 'PUT'
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer be9f281cd205725eb37ac1290da72cf79b6bad4394e2b17a6a64a18a3fcd1c78',
			},
			body: JSON.stringify(requestObj)
		}).then(res=>{
			return res.json()
		}).then(data=>{
			isLoading = false;
			if(data && data.code>=200 && data.code<=209){
				success = true
				errorMessage=null
			}
			else{			
				if(Array.isArray(data.data)){
					errorMessage = ''
					data.data.forEach(item => {
						errorMessage += '<p>'+item.field + ' '+ item.message + '</p>'
					});
				}
				else{
					errorMessage = 'Error!'
				}
			}
		}).catch(e=>{
			errorMessage = 'Error! ' + e
			isLoading = false;
		});
	
	}	
	</script>
	
	<div class="FormBookOnline">
		<div class="form-wrapper" class:is-loading={isLoading===true}>
			{#if success===true}
			<div class="thankyou"><h3>Thank you for your submission.</h3>We will process it shortly.</div>
			{/if}
			{#if success!==true}
			<form method="post" action="" on:submit|preventDefault={submitForm}>
				<div class="group is-half">
					<label>First Name</label>
					<input type="text" name="firstname" placeholder="First Name">
				</div>
				<div class="group is-half">
					<label>Last Name</label>
					<input type="text" name="lastname" placeholder="Last Name">
				</div>
				<div class="group">
					<label>ZIP or Postal Code</label>
					<input type="text" name="zip" placeholder="ZIP or Postal Code">
				</div>
				<div class="group">
					<label>Phone Number</label>
					<input type="tel" name="phone" placeholder="Phone Number">
				</div>
				<div class="group">
					<label>Email Address</label>
					<input type="email" name="email" placeholder="Email Address">
				</div>
				{#if errorMessage && errorMessage.length}
				<div class="group" style="color: red">
					{@html errorMessage}
				</div>
				{/if}
				<div class="group form-button">
					<Button type="submit" isButton={true}>Request a Call</Button>
				</div>
			</form>
			{/if}
		</div>
	</div>
	
<style lang="sass">
@import "../styles/_variables"
@import "../styles/_mixins"
$side-padding: 12px

.FormBookOnline
	.form-wrapper
		margin-left: -$side-padding
		margin-right: -$side-padding
		position: relative
		&.is-loading:before
			content: ''
			position: absolute
			+position-offset(0,0,0,0)
			display: block
			background: rgba(255,255,255,0.7)
		
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
	.form-button :global(button)
		width: 100%
		padding-top: 20px
		padding-bottom: 20px
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

	.thankyou
		padding-top: 80px
		padding-bottom: 80px
		text-align: center
		min-height: 100px
		color: green

	@media (max-width: 960px)
		.group
			&.is-half
				width: 100%
</style>