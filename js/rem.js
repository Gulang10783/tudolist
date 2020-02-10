	(function(){ screenWidth = window.innerWidth / 3.75
	document.querySelector('html').style.fontSize = screenWidth + 'px'
	window.onresize = function() {
		console.log(window.innerWidth)
		var screenWidth = window.innerWidth / 3.75
		document.querySelector('html').style.fontSize = screenWidth + 'px'
	}})()
