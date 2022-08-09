window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

		document.querySelectorAll('.point_scroll').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.navigation').clientHeight <= scrollDistance) {
				document.querySelectorAll('.navigation a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.navigation li')[i].querySelector('a').classList.add('active');
			}
		});

});