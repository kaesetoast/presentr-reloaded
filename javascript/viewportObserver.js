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
		// this._stage.style.width = `${parseInt(width)}px`;
		this._stage.style.width = `1024px`;
		// this._stage.style.height = `${parseInt(height)}px`;
		this._stage.style.height = `768px`;

		let orientation = 768;

		// document.body.style.fontSize = (height * 0.002) + 'em';
		this._stage.style.zoom = ((window.innerHeight / orientation));
	}
}
