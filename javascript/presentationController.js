'use strict';

export default class PresentationController {

	constructor() {
		this._slides = Array.from(document.querySelectorAll('.pr-slide'));
		this._currentSlideIndex = window.location.hash ? parseInt(window.location.hash.replace('#', '')) : 0;
		this._activate(this._currentSlideIndex);
		this._setupEventListeners();
	}

	_setupEventListeners() {
		window.addEventListener('keydown', this._handleKeyDown.bind(this));
	}

	_activate(_slideIndex) {
		this._currentSlideIndex = _slideIndex;
		this._slides.forEach(slide => slide.classList.remove('is-active', 'is-next', 'is-next-next', 'is-prev', 'is-prev-prev'));
		this._slides[_slideIndex].classList.add('is-active');
		window.location.hash = _slideIndex;

		if (_slideIndex > 0) {
			this._slides[_slideIndex - 1].classList.add('is-prev');
		}

		if (_slideIndex > 1) {
			this._slides[_slideIndex - 2].classList.add('is-prev-prev');
		}

		if (_slideIndex < this._slides.length - 1) {
			this._slides[_slideIndex + 1].classList.add('is-next');
		}

		if (_slideIndex < this._slides.length - 2) {
			this._slides[_slideIndex + 2].classList.add('is-next-next');
		}
	}

	next() {
		let nextIndex = this._currentSlideIndex + 1;
		if (this._slides.length > nextIndex) {
			this._activate(nextIndex);
		}
	}

	prev() {
		let nextIndex = this._currentSlideIndex - 1;
		if (nextIndex >= 0) {
			this._activate(nextIndex);
		}
	}

	_handleKeyDown(_event) {
		if (_event.key === 'ArrowRight' || _event.key === 'PageDown') {
			this.next();
		} else if (_event.key === 'ArrowLeft' || _event.key === 'PageUp') {
			this.prev();
		}
	}
}
