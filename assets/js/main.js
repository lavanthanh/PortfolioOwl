jQuery(document).ready(function($) {


	var magnificPopup = function() {
        if ( $().magnificPopup ) {
            $('.wprt-project').each(function () {
                $(this).find('.zoom-popup').magnificPopup({
                    disableOn: 700,
                    type: 'image',
                    gallery:{
                        enabled: true
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            });
        }
    };
	
	var portfolioOwl = function() {
		if ( $().owlCarousel ) {
			 $('.wprt-project').each(function() {
			 	var $this = $(this),
			 	auto = $this.data('auto'),
			 	item = $this.data('column'),
			 	item2 = $this.data('column2'),
			 	item3 = $this.data('column3'),
			 	gap = Number($this.data("gap"));
			 	// console.log(gap)
			 	$this.find('.owl-carousel').owlCarousel({
				    loop: false,
                    margin: gap,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
				    }
				});

			 });
		}
	};

	

	$(function() {
		magnificPopup();
		portfolioOwl();
		
	});
});