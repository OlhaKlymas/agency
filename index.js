// Owl Carousel
$(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    center:true,
  });
});

// button-top
$(document).ready(function () {

    $("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
      
    });

});

//anchors
$(document).ready(function(){
    $(".mini-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});
      
// cookie
document.cookie = "age=20; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"

// Приклад функції для встановлення Cookie
function setCookie(name, value, options = {}) {

	options = {
		path: '/'
	};

	if (options.expires instanceof Date) {
	options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];

		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
	console.log(updatedCookie)
}

// Приклад використання
setCookie('user', 'Olha', {secure: true, 'max-age': 7200});
setCookie('occupation', 'developer', {secure: true, 'max-age': 7200});



// Приклад функції для отримання Cookie
function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let user = getCookie('user');
console.log(user);
let occupation = getCookie('occupation');
console.log(occupation);


// Приклад функції для отримання Cookie
function deleteCookie(name) {
	setCookie(name, "", {
		'max-age': -1
	})
}
getCookie('occupation');

occupation = getCookie('occupation');
console.log(occupation);
