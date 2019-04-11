new fullpage('#fullpage', {
  anchors: ['page1', 'page2', 'page3', 'page4'],
  scrollingSpeed: 700,
  easing: 'easeInOut',
  lazyLoading: true,

  fadingEffect: true,
		fadingEffectKey: 'YWx2YXJvdHJpZ28uY29tXzAzN1ptRmthVzVuUldabVpXTjBiNXo='
});




///Total JS

{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
}
///morph // // bg

{
	class MorphingBG {
		constructor(el) {
			this.DOM = {};
			this.DOM.el = el;
			this.DOM.paths = Array.from(this.DOM.el.querySelectorAll('path'));
			this.animate();
		}
		animate() {
			this.DOM.paths.forEach((path) => {
				setTimeout(() => {
					anime({
						targets: path,
						duration: anime.random(3000,5000),
						easing: [0.5,0,0.5,1],
						d: path.getAttribute('pathdata:id'),
						loop: true,
						direction: 'alternate'
					});
				}, anime.random(0,1000));
			});
		}
	};

	new MorphingBG(document.querySelector('svg.scene'));
};
//end
