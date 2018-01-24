'use strict';

import ViewportObserver from './viewportObserver.js';
import PresentationController from './presentationController.js';
import FlipDemo from './flipDemo.js';

new ViewportObserver();
new PresentationController();
Array.from(document.querySelectorAll('.demo-flip-item')).forEach(_cube => {
	new FlipDemo(_cube);
});