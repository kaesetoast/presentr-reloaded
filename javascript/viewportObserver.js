'use strict';

export default class ViewportObserver {

	constructor() {
		this._stage = document.querySelector('.pr-stage');
		this._setRatio();
		window.addEventListener('resize', this._setRatio.bind(this));
	}

	_setRatio() {
		let width,
			height,
			aspectRatio = 4/3;

		if (window.innerWidth > window.innerHeight) {
			width = window.innerHeight * aspectRatio;
			height = window.innerHeight;
		} else {
			height = window.innerWidth * aspectRatio;
			width = window.innerWidth;
		}
		this._stage.style.width = `${width}px`;
		this._stage.style.height = `${height}px`;
	}
}
