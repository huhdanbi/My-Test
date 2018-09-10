import HasMouseEve from './HasMouseEve';
import RenderTag from './RenderTag';
import utils from '../utils/utils';

const defaultOpts = {
	ctx : '#Box',
	elem : '.list_box',
	data : './data/data.json'
};

function MouseEve ( userOpts ) {
	this.opts = utils.assign(defaultOpts, userOpts);
	this.ctx = utils.$(this.opts.ctx);

	RenderTag(this.opts, this.ctx );
	HasMouseEve(this.opts, this.ctx );
}

export default MouseEve;