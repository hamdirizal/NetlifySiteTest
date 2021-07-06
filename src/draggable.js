export function draggable( node ){
	let dx = 0
	let dy = 0
	let handleWidth = 50
	let handleHeight = 50

	node.style.width = handleWidth + 'px'
	node.style.height = handleHeight + 'px'
	
	function handleMouseMove(e){
		let x = e.clientX - node.parentNode.getBoundingClientRect().x - dx
		let y = e.clientY - node.parentNode.getBoundingClientRect().y - dy

		x = Math.max(x, 0)
		x = Math.min(x, node.parentNode.clientWidth - handleWidth)

		node.style.left = (x) + 'px'

		node.dispatchEvent(new CustomEvent('move', { detail: { x, y } }));
	}

	function handleMouseDown(e){
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		dx = e.clientX - node.getBoundingClientRect().x
		dy = e.clientY - node.getBoundingClientRect().y
	}
	
	function handleMouseUp(){
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
	}

	node.addEventListener('mousedown', handleMouseDown);
	window.addEventListener('mouseup', handleMouseUp);


	return {
		destroy() {
			node.removeEventListener('mousedown', handleMouseDown);
		}
	};
}