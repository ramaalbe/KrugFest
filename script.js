function clicked() {
	var xhr = new XMLHttpRequest()
	xhr.open('GET.html', 'https://api.countapi.xyz/hit/olvidona.com/awesomeclick')
	xhr.responseType = 'json'
	xhr.onload = function () {
		window.scrollTo(0, 0)
		document.getElementsByTagName('body')[0].setAttribute('style', 'overflow-y:hidden')
		document.getElementsByClassName('rickrolled')[0].setAttribute('style', 'display:flex')
		document.getElementsByClassName('rick')[0].textContent = this.response.value
		document.title = '🎵🎵🎉🎉'

		var link = document.querySelector("link[rel~='icon']")
		if (!link) {
			link = document.createElement('link')
			link.rel = 'icon'
			document.getElementsByTagName('head')[0].appendChild(link)
		}
		link.href = 'rick_roll_d.ico'
	}
	xhr.send()
}
document.getElementById('close').addEventListener('click', () => {
	document.getElementsByTagName('body')[0].setAttribute('style', 'overflow-y:overlay')
	document.getElementsByClassName('rickrolled')[0].setAttribute('style', 'display:none')
})

window.addEventListener('scroll', (event) => {
	let scroll = this.scrollY

	if (scroll > 20) {
		document.getElementsByTagName('header')[0].classList.add('headerOnScroll')
	}
	if (scroll < 20) {
		document.getElementsByTagName('header')[0].classList.remove('headerOnScroll')
	}
})
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	document.getElementsByTagName('video')[0].setAttribute('src', 'Molvidona.mp4')
} else {
	document.getElementsByTagName('video')[0].setAttribute('src', 'olvidona.mp4')
}

ScrollReveal().reveal('.SCsection:nth-child(1)', {
	origin: 'bottom',
	distance: '50px',
	delay: 0,
	easing: 'cubic-bezier(0.35, 0, 0, 1)',
	duration: 1200,
})
ScrollReveal().reveal('.SCsection:nth-child(2)', {
	origin: 'bottom',
	distance: '50px',
	delay: 150,
	easing: 'cubic-bezier(0.35, 0, 0, 1)',
	duration: 1200,
})
ScrollReveal().reveal('.SCsection:nth-child(3)', {
	origin: 'bottom',
	distance: '50px',
	delay: 300,
	easing: 'cubic-bezier(0.35, 0, 0, 1)',
	duration: 1200,
})
console.log('BUILT BY RODRIGO MAHAMUD GARCÍA 😉')
