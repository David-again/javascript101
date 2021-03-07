<div class="grid-container">
	<h3>Grid title goes here</h3>
	<script>
	$(document).ready(function() {
		$('.partner-carousel').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			dots: false,
			arrows: false,
			responsive: [
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}				
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});
	});
	</script>
</div>
	