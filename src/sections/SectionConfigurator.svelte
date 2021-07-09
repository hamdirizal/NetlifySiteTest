<script>
import SectionHeader from "/src/components/SectionHeader.svelte";
import Button from "/src/components/Button.svelte";
import IconKitchenOutline from "/src/svgs/IconKitchenOutline.svelte";
import IconPantryOutline from "/src/svgs/IconPantryOutline.svelte";
import IconBathroomOutline from "/src/svgs/IconBathroomOutline.svelte";
import IconClosetsOutline from "/src/svgs/IconClosetsOutline.svelte";
import CheckboxWithIcon from "/src/components/CheckboxWithIcon.svelte";
import CheckboxWithImage from "/src/components/CheckboxWithImage.svelte";
import RadioWithIcon from "/src/components/RadioWithIcon.svelte";
import IconFormSubmissionSuccess from "/src/svgs/IconFormSubmissionSuccess.svelte";
	import {formDataToObject} from "/src/js/utils.js";

let currentStep = 1

let isLoading = false

let budget = null
let productTypes = []
let solutions = []

function changeBudget(e){
	budget = e.detail.value
}

function addRemoveProductTypes(e){
	if(e.detail.checked){
		productTypes.push(e.detail.value)
	}
	else{
		let i = productTypes.indexOf(e.detail.value);
		productTypes.splice(i,1);
	}
	productTypes = productTypes //Make reactive
}

function addRemoveSolutions(e){
	if(e.detail.checked){
		solutions.push(e.detail.value)
	}
	else{
		let i = solutions.indexOf(e.detail.value);
		solutions.splice(i,1);
	}
	solutions = solutions //Make reactive
}

let myform;

function submitProductTypes(e){
	e.preventDefault()
	if(productTypes.length>0){
		currentStep ++;
	}
}
function submitSolutions(e){
	e.preventDefault()
	if(solutions.length>0){
		currentStep ++;
	}
}
function submitBudget(e){
	e.preventDefault()
	if(budget!==null){
		currentStep ++;
	}
}
function backOneStep(e){
	e.preventDefault()
	currentStep--;
}
function restartForm(e){
	e.preventDefault()
	currentStep=1
}

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
			currentStep = 5
		}
		else{
			console.log('errors happen')
		}
	}).catch(e=>{
		console.log(e)
		isLoading = false;
	});

}


</script>
<section class="SectionConfigurator" class:is-loading={isLoading===true}>
	<div class="container">
		<SectionHeader title="Configure Your Solution" alignment="center" description="Price calculator will show you an estimate average price for your renovation project. "/>
		{#if currentStep <= 4}
		<ul class="steps">
			<li class:is-active={currentStep >= 1}>Step 1</li>
			<li class:is-active={currentStep >= 2}>Step 2</li>
			<li class:is-active={currentStep >= 3}>Step 3</li>
			<li class:is-active={currentStep >= 4}>Step 4</li>
		</ul>
		{/if}
		<form action="" on:submit|preventDefault={ submitForm } bind:this={myform}>		
			<ul class="contents">
				<li class="step-1-content" class:is-active={currentStep===1}>
					<h3 class="title">What type of solution do you need ?</h3>
					<div class="grid">
						<ul>
							<li>
								<CheckboxWithIcon on:change={addRemoveProductTypes} name="product_types" value="kitchen" label="Kitchen">
									<IconKitchenOutline />
								</CheckboxWithIcon>
							</li>
							<li>
								<CheckboxWithIcon on:change={addRemoveProductTypes} name="product_types" value="pantry" label="Pantry">
									<IconPantryOutline />
								</CheckboxWithIcon>
							</li>
							<li>
								<CheckboxWithIcon on:change={addRemoveProductTypes} name="product_types" value="bathroom" label="Bathroom">
									<IconBathroomOutline />
								</CheckboxWithIcon>
							</li>
							<li>
								<CheckboxWithIcon on:change={addRemoveProductTypes} name="product_types" value="closets" label="Closets">
									<IconClosetsOutline />
								</CheckboxWithIcon>
							</li>
						</ul>
					</div>
					<div class="action">
						<Button on:click={submitProductTypes} disabled={!productTypes.length>0} size="big" theme="4" isButton={true} url="#/">Next</Button>
					</div>
				</li>
				<li class="step-2-content" class:is-active={currentStep===2}>
					<h3 class="title">Select all of the solutions that you’d like to apply to your kitchen.</h3>
					<div class="grid">
						<ul>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="slope-cookbook" label="Slope Cookbook Solution" imageUrl="/uploads/s1.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="lazy-susan" label="Lazy Susan" imageUrl="/uploads/s2.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="undersink-riser" label="Undersink Riser" imageUrl="/uploads/s3.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="trash-recycling-triple-height" label="Trash & Recycling (Triple-Height)" imageUrl="/uploads/s4.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="glidearound-lower" label="Glidearound (Lower)" imageUrl="/uploads/s5.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="premium-custom-spice-cabinet" label="Premium Custom Spice Cabinet" imageUrl="/uploads/s6.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="custom-insert" label="Custom Insert" imageUrl="/uploads/s7.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="drawer-in-a-drawer" label="Drawer-in-a-Drawer" imageUrl="/uploads/s8.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="wine-rack" label="Wine Rack" imageUrl="/uploads/s9.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="3-piece-blind-corner-cabinet" label="3-Piece Blind Corner Cabinet" imageUrl="/uploads/s10.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="reverse-slope-storage" label="Reverse Slope Storage" imageUrl="/uploads/s11.jpg" />
							</li>
							<li>
								<CheckboxWithImage on:change={addRemoveSolutions} name="solutions" 
								value="glide-out-design-for-pantry" label="Glide-Out Design for Pantry" imageUrl="/uploads/s12.jpg" />
							</li>
						</ul>
					</div>
					<div class="action">
						<Button on:click={backOneStep} theme="5" size="big" isButton={true} url="#/">Back</Button>
						<Button on:click={submitSolutions} disabled={!solutions.length>0} size="big" theme="4" isButton={true} url="#/">Next</Button>
					</div>
				</li>
				<li class="step-3-content" class:is-active={currentStep===3}>
					<h3 class="title">What is your budget?</h3>
					<div class="grid">
						<ul>
							<li>
								<RadioWithIcon on:change={changeBudget} name="budget" value="5000" label="$5000-$10000" />
							</li>
							<li>
								<RadioWithIcon on:change={changeBudget} name="budget" value="10000" label="$10000-$15000" />
							</li>
							<li>
								<RadioWithIcon on:change={changeBudget} name="budget" value="15000" label="$15000+" />
							</li>
							<li>
								<RadioWithIcon on:change={changeBudget} name="budget" value="0" label="I don’t know" />
							</li>
						</ul>
					</div>
					<div class="action">
						<Button on:click={backOneStep} theme="5" size="big" isButton={true} url="#/">Back</Button>
						<Button on:click={submitBudget} disabled={budget==null} size="big" theme="4" isButton={true} url="#/">Next</Button>
					</div>
				</li>
				<li class="step-4-content" class:is-active={currentStep===4}>
					<h3 class="title">Enter your name and email address to recive an estimate</h3>
					<div class="optin">
						<div class="formrow is-half">
							<label>First Name</label>
							<div class="inputbox"><input name="firstname" type="text" required placeholder="First Name (required)"></div>
						</div>
						<div class="formrow is-half">
							<label>Last Name</label>
							<div class="inputbox"><input name="lastname" type="text" required placeholder="Last Name (required)"></div>
						</div>
						<div class="formrow">
							<label>Email Address</label>
							<div class="inputbox"><input name="email" type="email" placeholder="Email Address (required)"></div>
						</div>
					</div>
					<div class="action">
						<Button on:click={backOneStep} theme="5" size="big" isButton={true} url="#/">Back</Button>
						<Button isButton={true} type="submit" size="big" url="#/">Send</Button>
					</div>
				</li>
				<li class="step-5-content" class:is-active={currentStep===5}>
					<IconFormSubmissionSuccess />
					<h4>Thank you! your quote has been sent to your email</h4>
					<h5>Want to do another quote?</h5>
					<div class="again"><Button on:click={restartForm} url="#/" isButton={true} size="big">Reload</Button></div>
				</li>
			</ul>
		</form>
	</div>
</section>
<style lang="sass">
@import "../styles/_variables"
@import "../styles/_mixins"
.SectionConfigurator
	background: $brand-blue
	background-image: url(/images/configurator-bg.jpg)
	background-repeat: no-repeat
	background-size: cover
	color: white
	padding: 80px 0
	position: relative

	&.is-loading:after
		content: ''
		display: block
		position: absolute
		+position-offset(0,0,0,0)
		z-index: 10
		background: rgba(46,83,149,0.5)


	:global(.SectionHeader .title)
		color: white

	ul.steps
		max-width: 890px
		margin-left: auto
		margin-right: auto
		margin-top: 60px
		margin-bottom: 60px
		list-style: none
		padding: 0
		display: flex
		li
			text-align: center
			padding-left: 6px
			padding-right: 6px
			padding-bottom: 16px
			position: relative
			font-size: 14px
			text-transform: uppercase
			color: #778fb7
			font-weight: bold
			flex-grow: 1
			line-height: 1
			&:after
				content: ''
				background: #778fb7
				height: 4px
				position: absolute
				left: 6px
				right: 6px
				bottom: 0
				border-radius: 2px
		li.is-active
			color: $brand-green
			&:after
				background-color: $brand-green

	ul.contents
		list-style: none
		margin: 0 auto
		padding: 0
		color: white
		max-width: 890px

		& > li
			display: none
			margin-left: auto
			margin-right: auto
			&.is-active
				display: block

		.title
			color: white
			font-size: 22px
			font-family: $font-1
			text-align: center
			margin-bottom: 50px
	
	.action
		display: flex
		justify-content: center
		margin-top: 30px
		& > :global(a), & > :global(button)
			margin-left: 10px
			margin-right: 10px
			margin-bottom: 10px
			width: 200px

	.grid
		margin-left: -15px
		margin-right: -15px
		ul
			display: flex
			list-style: none
			margin: 0
			padding: 0
			flex-wrap: wrap
		li
			padding-left: 15px
			padding-right: 15px
			margin-bottom: 30px
			width: 25%

	.step-4-content
		max-width: 760px

	.optin
		display: flex
		margin-left: -15px
		margin-right: -15px
		flex-wrap: wrap


		.formrow
			display: block
			width: 100%
			padding-left: 15px
			padding-right: 15px
			margin-bottom: 30px
			&.is-half
				width: 50%
				
		label
			font-size: 15px
			font-weight: bold
			display: block
			margin-bottom: 5px

		input[type=text], input[type=email], input[type=tel]
			width: 100%
			display: block
			border: 0 none
			font-size: 16px
			font-family: $font-1
			padding: 14px 20px
			border-radius: 4px
			outline: none
			color: black
			&::placeholder
				color: #ccc

	.step-5-content
		text-align: center
		max-width: 780px
		margin-left: auto
		margin-right: auto
		:global(svg)
			margin-top: 40px
			margin-bottom: 20px
		h4
			font-size: 45px
			color: white
			margin-bottom: 80px
		h5
			font-family: $font-1
			font-size: 14px
			font-weight: bold
			text-transform: uppercase
			color: white
			margin-bottom: 30px
			letter-spacing: 0.05em
		.again
			text-align: center
			:global(a),:global(button)
				display: inline-block
				width: 200px

	@media (max-width: 960px)
		.grid 
			margin-left: -5px
			margin-right: -5px
			li
				padding-left: 5px
				padding-right: 5px
				margin-bottom: 10px

	@media (max-width: 640px)
		padding: 40px 0
		.grid
			li
				width: 50%
		.optin
			.formrow
				&.is-half
					width: 100%

	@media (max-width: 480px)
		.action
			flex-wrap: wrap
			& > :global(a), & > :global(button)
				margin-left: 0
				margin-right: 0
				margin-bottom: 10px
				width: 100%

</style>