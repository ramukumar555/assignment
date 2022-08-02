$(document).ready(function () {
   $("#payasugo").click(function(){
		$('.allinclusive').hide();
		$('.payasugo').show();
   });

   $("#allinclusive").click(function(){
		$('.payasugo').hide();
		$('.allinclusive').show();
   });
});
(function () {
  'use strict'
  let basicA = 62.5 ;
  let basicC = 49.99;
  let premiumA = 80;
  let premiumC = 49.99;
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
			event.preventDefault();
			event.stopPropagation();
		
			var code = $('#code').val();
			const split = code.split("-");
			
			if(split.length == 4){
				var nights = parseInt(split[1], 10);
				var adults = parseInt(split[2], 10);
				var children = parseInt(split[3], 10);
				if(isNaN(nights) ||isNaN(adults) ||isNaN(children)  ){
					$('#WrongRoomModal').modal('show');
				}
				
				$('#BATP').html((basicA*adults*nights).toFixed(2));
				$('#BCTP').html((basicC*children*nights).toFixed(2));
				$('#BTP').html(((basicA*adults*nights) +(basicC*children*nights)).toFixed(2));
				
				$('#PATP').html((premiumA*adults*nights).toFixed(2));
				$('#PCTP').html((premiumC*children*nights).toFixed(2));
				$('#PTP').html(((premiumA*adults*nights)+(premiumC*children*nights)).toFixed(2));
				
				$('#DinningModal').modal('show');
				
			}else{
				$('#WrongRoomModal').modal('show');
			}


			console.log();
			
      }, false)
    })
})()
