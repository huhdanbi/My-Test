import utils from '../utils/utils'


export default ( opts ) => {
	const elem = utils.$(opts.elem);

	function mouseDown(e){

		console.log('mouseDown',e.target)
	}

	function mouseUp(){
		console.log('mouseUp')
	}

	function mouseMove(){
		console.log('mouseMove')
	}

	elem.addEventListener('mousedown', mouseDown, false);
	elem.addEventListener('mouseup', mouseUp, false);
	elem.addEventListener('mousemove', mouseMove, false);
}