	function toBig(){
		var odiv = document.getElementById('box')
		odiv.style.width='300px';
		odiv.style.height='300px';
		odiv.style.background='blue';
	}
	function tonormal(){
		var odiv= document.getElementById('box')
		odiv.style.width='200px';
		odiv.style.height='200px';
		odiv.style.background='red';

	}
	var odiv = document.getElementById('box');
	odiv.onmouseover=toBig;
	odiv.onmouseout=tonormal;
	// var odiv= document.getElementById('box');
	// odiv.onmouseover = function(){
	// 	toBig();
	// }
	// odiv.onmouseout = function(){
	// 	tonormal();
	// }
