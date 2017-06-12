const img = document.querySelector('#myImg');

img.addEventListener('click', () => {
  console.log('clicked');
	img.webkitRequestFullscreen()
		// const requestFullScreen= img.webkitRequestFullscreen || img.msRequestFullscreen
		// requestFullScreen.bind(img)
		// requestFullScreen()
});
