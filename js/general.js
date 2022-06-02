
 $(document).ready(function(){

	let tab = function () {
		let tabNav = document.querySelectorAll('.tabs_nav__items');
		let tabContent = document.querySelectorAll('.tabs');
		let tabName;
	
		tabNav.forEach(item => {
			item.addEventListener('click', selectTabNav);
		});
	
		function selectTabNav() {
			tabNav.forEach(item => {
				item.classList.remove('is_active');
			});
			this.classList.add('is_active');
			tabName = this.getAttribute('data-tab-name');
			selectTabContent(tabName);
		}
	
		function selectTabContent(tabName) {
			tabContent.forEach(item => {
				item.classList.contains(tabName)? item.classList.add('is_active') : item.classList.remove('is_active');
			});
		}
	}
	
	tab();


	$('.slider1').slick({
		slidesToShow: 5,
		speed: 700,
		slidesToScroll: 3,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
			},  
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
			},
			{
			breakpoint: 430,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
			}
		]
	});


	$('.burger').click(function(event){
		$('.burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.burger .burger_item').toggleClass('burgerColor');
	});

	let header = document.querySelector('.header').offsetHeight;

	$(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - header}, 1500);
    });


	$('.menu_link').click(function(event){
		$('.burger, .menu').removeClass('active');
		$('body').removeClass('lock');
		$('.burger .burger_item').removeClass('burgerColor');
	});

 });

 
