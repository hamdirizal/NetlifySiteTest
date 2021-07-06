<div class="MainMenu">
	<ul>
		<li class="has-sub is-mega">
			<a href="/kitchen-solutions">Solutions</a>
			<div>
				<ul>
					<li class="title"><a href="/kitchen-solutions">Kitchen</a></li>
					<li><a href="#/">Cookware</a></li>
					<li><a href="#/">Bakeware & Storage Containers</a></li>
					<li><a href="#/">Flat Items</a></li>
					<li><a href="#/">Under the Sink</a></li>
					<li><a href="#/">Trash/ Recycling</a></li>
					<li><a href="#/">Spices</a></li>
					<li><a href="#/">Overhead storage</a></li>
				</ul>
				<ul>
					<li class="title"><a href="#/">Pantry</a></li>
					<li><a href="#/">Short Items</a></li>
					<li><a href="#/">Medium Items</a></li>
					<li><a href="#/">Tall Items</a></li>
					<li><a href="#/">Walk-in-Pantry</a></li>
					<li><a href="#/">Cabinet Pantry</a></li>
					<li><a href="#/">Closet Pantry</a></li>
				</ul>
				<ul>
					<li class="title"><a href="#/">Bathroom</a></li>
					<li><a href="#/">Under the Sink</a></li>
					<li><a href="#/">Tall Cabinets</a></li>
					<li><a href="#/">Odss and Ends</a></li>
				</ul>
				<ul>
					<li class="title"><a href="#/">New: Closets ShelfGenie</a></li>
					<li><a href="#/">Sub-Solutions Pages</a></li>
					<li class="space"></li>
					<li class="title"><a href="#/">Creative Spaces</a></li>
					<li class="title"><a href="#/">Computer Supplies</a></li>
					<li class="title"><a href="#/">Office & Craft Supplies</a></li>
					<li class="title"><a href="#/">Collections</a></li>
					<li class="title"><a href="#/">Liquor & Wine</a></li>
				</ul>
			</div>
		</li>
		<li><a href="#/">Inspiration</a></li>
		<li><a href="/how-we-work">How We Work</a></li>
		<li class="has-sub">
			<a href="#/">About Us</a>
			<div>
				<ul>
					<li><a href="#/">Our Story</a></li>
					<li><a href="#/">FAQ</a></li>
					<li><a href="#/">Book Online</a></li>
					<li><a href="#/">Neighborly</a></li>
				</ul>
			</div>
		</li>
		<li><a href="#/">Resources</a></li>
	</ul>
</div>

<style lang="sass">
@import "../styles/variables"
$hover-bg-color: #edf6fd
.MainMenu
	height: 100%
	ul
		list-style: none
		margin: 0
		padding: 0
	& > ul
		display: flex
		height: 100%
		& > li
			position: relative
			padding-right: 0
			transition: all .2s
			&:hover
				background: $hover-bg-color			
			& > a, & > a:visited
				display: flex
				color: $color-text-default
				text-decoration: none
				height: 100%			
				align-items: center	
				padding-left: 14px
				padding-right: 14px
				position: relative
				line-height: 1.1
		& > li:hover > a, & > li:hover > a:visited	
			&:before
				content: ''
				position: absolute
				bottom: 0
				left: 0
				right: 0
				height: 3px
				background: $brand-green

		& > li.has-sub
			& > a:after
				content: ''
				display: inline-block
				width: 8px
				height: 8px
				background: url(/images/icon-triangle-grey-down.svg) no-repeat center 0px
				margin-left: 6px
		& > li > div
			display: none
			width: 240px
			background: white
			position: absolute
			box-shadow: 0 10px 15px rgba(0,0,0,0.2)
			border-radius: 0 0 4px 4px
			li
				border-bottom: 1px dotted #ccc
			li:last-child
				border-bottom: 0 none
			a, a:visited
				color: $brand-blue
				font-size: 14px
				display: block
				font-weight: bold
				padding: 14px 20px
				text-decoration: none
				transition: all .2s
			a:hover
				background: $hover-bg-color
		& > li.has-sub:hover > div
			display: block

		& > li.is-mega
			position: static

		& > li.is-mega > div
			width: 100%
			left: 0
			display: none
			padding: 30px 60px
			border-radius: 0 0 4px 4px
			& > *
				flex-grow: 1
			li
				border-bottom: 0 none
				a, a:visited
					color: #8998a9
					font-weight: normal
					padding: 8px 0
					display: inline-block
				a:hover
					background: transparent
					color: $brand-green
			li.space
				height: 20px
			li.title
				a, a:visited
					color: $brand-blue
					font-weight: bold
				a:hover
					color: $brand-green
		& > li.is-mega:hover > div
			display: flex

</style>