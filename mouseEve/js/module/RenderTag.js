import utils from '../utils/utils';

export default ( opts ,ctx) => {
	const elem = utils.$(opts.elem, ctx);
	let txt = '';

	utils.ajax(opts.data , function( data ){
		data.map((e) => {
			txt += `<li><a href="#none" class="link_thumb" style="background:url(${e.image}) left top no-repeat" ></a></li>`;
		});
		elem.innerHTML = txt;
		elem.style.width = elem.offsetWidth * elem.children.length + 'px';
	}, true);

};