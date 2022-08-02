(function () {
  'use strict'
  let queenACount = 4;
  let kingACount = 5;
  let bedroomSuiteACount = 6;
  let queenPrice = 150;
  let kingPrice = 175;
  let bedroomSuitePrice = 200;
  let tax = 12;


  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
			event.preventDefault();
			event.stopPropagation();
			form.classList.add('was-validated');
			var invalids = $(".form-control:invalid");
			if(invalids.length == 0){
				var adults = parseInt($('#adults').val(), 10);
				var children = parseInt($('#children').val(), 10);
				var totalmembers = adults  + children;
				var roomtype = $('input[name=roomtype]:checked', '#reservation').val();
				if((roomtype == "Queen" && totalmembers > queenACount ) || (roomtype == "King" && totalmembers > kingACount) ||(roomtype == "Suite" && totalmembers > bedroomSuiteACount)){
					$('#WrongRoom').html(roomtype+" room will not fit "+totalmembers);
					$('#WrongRoomModal').modal('show');
				}else{
					let roomTotal = 0;
					let taxTotal = 0;
					let afterDiscountTotal = 0;
					let stayTotal = 0;
					let nights = parseInt($('#nights').val(), 10);
					let discountkey = $('input[name=discount]:checked', '#reservation').val();
					let discount = 0;
					if(discountkey == "AAA"){
						discount = 15;
					}else if(discountkey == "Miltary"){
						discount = 20;						
					}
					if(roomtype == "Queen"){
						roomTotal = nights * queenPrice;
					}else if(roomtype == "King"){
						roomTotal = nights * kingPrice;;				
					}else if(roomtype == "Suite"){
						roomTotal = nights * bedroomSuitePrice;;				
					}
					afterDiscountTotal = roomTotal-discount;
					taxTotal = Math.round((afterDiscountTotal * tax)/100);
					stayTotal = afterDiscountTotal+taxTotal;
					let code=Math.random().toString(36).slice(2)+"-"+nights+"-"+adults+"-"+children;
					let output = "<p>The Room rent is $"+roomTotal+"<br>Discount applied is $"+discount+"<br>Price after discount is $"+afterDiscountTotal+"<br>Tax applied is $"+taxTotal+"<br>Total cost of the stay is $"+stayTotal+"<br>Your Confirmation code is "+code+"</p>";
					$('#ReserveCode').html(output);
					$('#ReserveCodeModal').modal('show');
				}

			}
		

      }, false)
	form.addEventListener('reset', function (event) {
       
		//$('#exampleModal').modal('show');
        form.classList.remove('was-validated');
      }, false)
    })
})()
