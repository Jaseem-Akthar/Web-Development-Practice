function endlessCarousel( query, queryChildren, speed, slidesDefault, slidesDesktop ) {
	var theCarousel = document.querySelector(query);
	var carWidth = document.querySelector(query).offsetWidth;
	var carItems = document.querySelectorAll(queryChildren);
	var numSlides = slidesDefault;
	var carIndex = 0;
	var currentTarget = 0;
	var animSpeed = 2000;

	if (window.innerWidth > 1024) {
		numSlides = slidesDesktop;
	}

	if (numSlides == undefined) {
		numSlides = 3;
	}

	animSpeed = speed;
	carItems.forEach(function(carItem) {
		carItem.width = carWidth/numSlides;
		carItem.style.order = carIndex;
		carItem.style.marginLeft = 0;
		carItem.style.opacity = 0.5;
		scrollCarousel();
	});

	function scrollCarousel() {
		theCarousel.children[currentTarget].style.order = carIndex;

		setTimeout(function(){
		theCarousel.children[currentTarget].style.opacity = 0.5;
		theCarousel.children[currentTarget].style.marginLeft = 0;
		currentTarget++;
		if (currentTarget > document.querySelectorAll(queryChildren).length-1) {
			currentTarget = 0;
		}
		carIndex++;
		theCarousel.children[currentTarget].style.opacity = 0;
		theCarousel.children[currentTarget].style.marginLeft = '-' + carWidth/numSlides + 'px';
		},animSpeed/2);
	}


	setInterval(scrollCarousel, animSpeed);
}

document.addEventListener("DOMContentLoaded", endlessCarousel('.carousel', '.carousel .carousel--item', 2000, 3, 5));
