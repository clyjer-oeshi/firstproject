$(document).ready(function(){
	// console.log('hi');

	// Start Nav Bar
	$(window).scroll(function(){

		let position = $(this).scrollTop();

		// console.log(position);

		if(position >= 200){
			$('.navbar').addClass('navmenus');
		}else{
			$('.navbar').removeClass('navmenus');
		}


	});

	$('.navbuttons').click(function(){
		$('.navbuttons').toggleClass('crossxs');
	});

	//End Nav Bar



	// Start Property Section
	$('.propertylists').click(function(){
		// console.log($(this));

		// $(this).addClass('activeitems');
		$(this).addClass('activeitems').siblings().removeClass('activeitems');

		let ftvalue = $(this).attr('data-filter');

		// console.log(ftvalue);

		if(ftvalue === 'all'){
			$('.filters').show();
		}else{
			$('.filters').hide();

			$('.filters').not('.'+ftvalue).hide();
			$('.filters').filter('.'+ftvalue).show();

		}
	});

	lightbox.option({
		showImgaeNumberLabel: false
	});
	
	// End Property Section





});