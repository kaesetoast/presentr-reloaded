'use strict';

/**
 * !THIS MODULE DOES SOME AWESOME SHIT!
 */
export default class FlipDemo {

	/**
	 * Kicks things off
	 */
	constructor(_cube) {
		this._cube = _cube;
		this._setupEventListeners();
	}

	_setupEventListeners() {
		this._onClickEnlarge = this._enlarge.bind(this);
		this._cube.addEventListener('click', this._onClickEnlarge);
	}

	_enlarge(_event) {
		_event.preventDefault();
		let originalDimensions = this._cube.getBoundingClientRect();
		this._cube.style.position = 'fixed';
		this._cube.style.width = '100%';
		this._cube.style.height = '100%';
		this._cube.style.top = 0;
		this._cube.style.left = 0;
		this._cube.style.transform = 'none';
		this._cube.style.transition = 'none';
		let newDimensions = this._cube.getBoundingClientRect();
		let transformWidth = (originalDimensions.width / newDimensions.width);
		let transformHeight = (originalDimensions.height / newDimensions.height);

		let originalCenterX = originalDimensions.left + (originalDimensions.width / 2);
		let originalCenterY = originalDimensions.top + (originalDimensions.height / 2);
		let newCenterX = newDimensions.left + (newDimensions.width / 2);
		let newCenterY = newDimensions.top + (newDimensions.height / 2);
		this._transformationString = `translate(${originalCenterX - newCenterX}px, ${originalCenterY - newCenterY}px) scale(${transformWidth}, ${transformHeight})`;
		this._cube.style.transform = this._transformationString;

		setTimeout(() => {
			this._cube.style.transition = '';
			this._cube.style.transform = '';
			this._onClickShrink = this._shrink.bind(this);
			this._cube.removeEventListener('click', this._onClickEnlarge);
			this._cube.addEventListener('click', this._onClickShrink);
		}, 100);
	}

	_shrink(_event) {
		_event.preventDefault();
		this._cube.addEventListener('transitionend', () => {
			this._cube.style.position = '';
			this._cube.style.width = '';
			this._cube.style.height = '';
			this._cube.style.top = '';
			this._cube.style.left = '';
			this._cube.style.transform = '';
			this._cube.style.transition = '';
		});
		setTimeout(() => {
			this._cube.style.transform = this._transformationString;
		}, 100);
	}
}
