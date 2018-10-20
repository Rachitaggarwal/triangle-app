
function findTriangleType(){
	let side1 = document.getElementById('side1').value;
	let side2 = document.getElementById('side2').value;
	let side3 = document.getElementById('side3').value;

	if(side1 && side2 && side3){
		let type = getType(side1, side2, side3);
		showAlert( 'Triangle is an '+ type + ' triangle' );
	}
	else{
		showAlert( 'Please check the input values' );
	}
}

function getType(side1, side2, side3){
	return (side1 === side2 && side2 === side3) && 'equilteral' ||
	(side1 === side2 || side1 === side3 || side2 === side3) &&
	'isosceles' ||'scalene';
}

function showAlert( message ){
	document.querySelector('.note').style.display = 'inline-block';
	document.querySelector('.note p').innerHTML = message;
}