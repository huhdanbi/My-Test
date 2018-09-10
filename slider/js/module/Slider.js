const Slider = (function(util){

	const device = util.deviceCheck();
	const defaultOpts = {
		ctx : '#slider',
		elem : '#slider',
		elemList : '.list_slider',
		nextBtn : '.btn_next',
		prevBtn : '.btn_prev',
		listPage : '.list_page',
	};


	function Slider(userOpts){
		//if change option, opts update
		const self = this;
		self.opts = utils.assign(defaultOpts, userOpts);
		const opts = self.opts;
		self.ctx = util.$(opts.ctx);
		self.elem = util.$(opts.elem);
		self.elemList = util.$(opts.elemList, self.ctx);
		self.prevBtn = util.$(opts.prevBtn, self.ctx);
		self.nextBtn = util.$(opts.nextBtn, self.ctx);
		self.listPage = util.$(opts.listPage, self.ctx);

		self.data = null;
		self.startPointer = 0;
		self.touchStart = 0;
		self.touchMove = 0;
		self.touchEnd = 0;
		self.imgLen = 0;

		function render( device ){
			self.elemListWidth(device);
			self.getAjaxData(device);
			util.ajax(data , function( data ){
				self.renderData(data);
			});
		}

		render(device);

		self.elemList.addEventListener('touchstart',function(e){
			self.getTouchStart(e);
		});
		self.elemList.addEventListener('touchend', function(e){
			self.getTouchEnd(e);
			if((self.touchStart - self.touchMove) < self.elemList.offsetWidth/4 && (self.touchStart - self.touchMove) > -self.elemList.offsetWidth/4 && self.elemList.clientWidth * self.imgLen ){
				self.elemList.style.transform = `translateX(-${self.startPointer * self.elemList.offsetWidth}px)`;
			}else{
				if(self.touchEnd < 0 ){
					util.trigger(self.nextBtn, 'click');
				}else if(self.touchEnd > 0 ){
					util.trigger(self.prevBtn, 'click');
				}
			}
		});
		self.elemList.addEventListener('touchmove',function(e){
			self.getTouchMove(e);
			const moveNum = self.startPointer * self.elemList.offsetWidth + (self.touchStart - self.touchMove);
			if( moveNum < (self.elemList.offsetWidth * (self.imgLen-1)) ){
				self.elemList.style.transform = `translateX(-${moveNum}px)`;
			}
		});


		self.nextBtn.addEventListener('click', function(){
			if(self.startPointer >= (self.imgLen-1)) {
				return false;
			}else{
				self.elemList.style.transform = `translateX(-${ self.moveToPointer(1) }px)`;
				self.applicator(self.startPointer);
			}
		});
		self.prevBtn.addEventListener('click', function(){
			if(self.startPointer <= 0) {
				return false;
			}else{
				self.elemList.style.transform = `translateX(-${ self.moveToPointer(-1) }px)`;
				self.applicator(self.startPointer);
			}

		});
		self.listPage.addEventListener('click', function(e){
			const target = e.target;
			const targetParent = target.parentNode;
			self.startPointer = util.index( targetParent );

			if( target.nodeName === 'A' ) {
				self.elemList.style.transform = `translateX(-${ self.moveToPointer() }px)`;
				self.applicator(self.startPointer);
			}
		});

		window.addEventListener('resize', function(){
			const device = util.deviceCheck();
			self.elemList.style.transform = `translateX(-${ self.moveToPointer() }px)`;

			render(device);
		});

	}

	Slider.prototype.getAjaxData = function( device ){
		return data = (device === 'desktop') || ( document.body.clientWidth > 768 ) ? './data/desktopData.json' : './data/mobileData.json';
	};
	Slider.prototype.renderData = function( data ){
		const desktopData = JSON.parse(data);
		let list = '';
		let page = '';
		this.elemList.innerHTML = '';
		this.listPage.innerHTML = '';
		this.imgLen = desktopData.length;

		for( const keys in desktopData ){
			const data = desktopData[keys];
			list += `<li><a href="${data.link}" class="wrap_thumb" target="_blank"><img src="${data.image}" alt="" class="thumb_img" draggable="false"></a></li>`;
		}

		for(let i = 0; i < this.imgLen; i+=1 ){
			page += `<li${i===this.startPointer ? ' class="on"' : ''}><a href="#none" class="link_page">${i+1}</li>`;
		}

		this.elemList.innerHTML = list;
		this.listPage.innerHTML = page;
		this.elemListWidth(device);
	};

	Slider.prototype.elemListWidth = function( device ){
		if(device === 'desktop' && ( document.body.clientWidth > 500 )) {
			this.elemList.style.width = (this.elem.offsetWidth * this.imgLen) + 'px';
		}else{
			this.elemList.style.width = null;
		}
	};

	Slider.prototype.getTouchStart = function(e){
		return this.touchStart = Math.floor(e.touches[0].clientX);
	};
	Slider.prototype.getTouchEnd = function(e){
		return this.touchEnd = Math.floor(e.changedTouches[0].clientX - this.touchStart);
	};
	Slider.prototype.getTouchMove = function(e){
		this.touchMove = Math.floor(e.touches[0].pageX);
	};

	Slider.prototype.applicator = function( idx ){
		const listPageItem = util.$$(this.opts.listPage + ' li' , this.ctx);

		listPageItem.forEach(function(el){
			el.classList.remove('on')
		});
		listPageItem[idx].classList.add('on');

	};
	Slider.prototype.moveToPointer = function( num ){
		let result = null;
		if( num ){
			result = (num == 1) ? this.elem.offsetWidth * ( this.startPointer +=1 ) : this.elem.offsetWidth * (this.startPointer -=1 ) ;
		}else{
			result = this.elem.offsetWidth * this.startPointer;
		}
		return result;
	};

	return Slider;
})(utils);


