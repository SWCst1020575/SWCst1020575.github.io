function eq_cal(){
	$("#eq_ans").fadeOut(0);
	var a = parseInt(document.getElementById("eq_1").value);
	var b = parseInt(document.getElementById("eq_2").value);
	var c = parseInt(document.getElementById("eq_3").value);
	if(window.isNaN(a) || window.isNaN(b) || window.isNaN(c)){
		alert("請輸入正確值");
	}
	else{
		if(((b*b)-(4*a*c))<0){
			document.getElementById("eq_ans").innerHTML="無解";
			$("#eq_ans").fadeIn("fast");
		}
		else if(((b*b)-(4*a*c))==0){
			document.getElementById("eq_ans").innerHTML="重根 x = "+(-b/(2*a));
			$("#eq_ans").fadeIn("fast");
		}
		else{
			document.getElementById("eq_ans").innerHTML="x1 = "+roundX(((-b+Math.sqrt((b*b)-(4*a*c)))/(2*a)),4)+"/x2 = "+roundX(((-b-Math.sqrt((b*b)-(4*a*c)))/(2*a)),4);
			$("#eq_ans").fadeIn("fast");
		}
	}
}

function roundX(x,n){
	x*= Math.pow(10,n);
	x= Math.round(x);
	return x/Math.pow(10,n);
}