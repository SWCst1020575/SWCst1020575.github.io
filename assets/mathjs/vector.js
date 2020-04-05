var dot2x2=0;
var dot3x3=0;
var vector_now=0
function vector2x2(){
	if(vector_now!=1){
		$("#vector_3_content").fadeOut(0);
		
	}
	$("#vector_2_content").fadeOut(0);
	$("#vector_2_content").fadeIn("fast");
}
function vector3x3(){
	if(vector_now!=2){
		$("#vector_2_content").fadeOut(0);
		
	}
	$("#vector_3_content").fadeOut(0);
	$("#vector_3_content").fadeIn("fast");
}



function dot3(){
	document.getElementById("vector3_ans").style.top = "270px";
	$("#vector3_crossans").fadeOut(0);
	$("#vector3_ans").fadeOut(0);
	if(dot3x3==0){
		
		$("#vector3_dot").fadeIn("fast");
		dot3x3=1;
	}
	else{
		var a1 = parseInt(document.getElementById("vector3_1-1").value);
		var a2 = parseInt(document.getElementById("vector3_1-2").value);
		var a3 = parseInt(document.getElementById("vector3_1-3").value);
		var b1 = parseInt(document.getElementById("vector3_2-1").value);
		var b2 = parseInt(document.getElementById("vector3_2-2").value);
		var b3 = parseInt(document.getElementById("vector3_2-3").value);
		if(window.isNaN(a1) || window.isNaN(a2) || window.isNaN(a3) || window.isNaN(b1) || window.isNaN(b2) ||window.isNaN(b3)){
			alert("請輸入正確值");
		}
		else{
			
			
			document.getElementById("vector3_ans").innerHTML=a1*b1+a2*b2+a3*b3;
			$("#vector3_ans").fadeIn("fast");
		}
	}
	
	
	
}

function cross3(){
	$("#vector3_ans").fadeOut(0);
	$("#vector3_crossans").fadeOut(0);
	
	if(dot3x3==0){
		$("#vector3_dot").fadeIn("fast");
		dot3x3=1;
	}
	else{
		
		var a1 = parseInt(document.getElementById("vector3_1-1").value);
		var a2 = parseInt(document.getElementById("vector3_1-2").value);
		var a3 = parseInt(document.getElementById("vector3_1-3").value);
		var b1 = parseInt(document.getElementById("vector3_2-1").value);
		var b2 = parseInt(document.getElementById("vector3_2-2").value);
		var b3 = parseInt(document.getElementById("vector3_2-3").value);
		
		if(window.isNaN(a1) || window.isNaN(a2) || window.isNaN(a3) || window.isNaN(b1) || window.isNaN(b2) ||window.isNaN(b3)){
			alert("請輸入正確值");
		}
		else{
			document.getElementById("vector3_ans-1").value=a2*b3-a3*b2;
			document.getElementById("vector3_ans-2").value=a3*b1-a1*b3;
			document.getElementById("vector3_ans-3").value=a1*b2-a2*b1;
			$("#vector3_crossans").fadeIn("fast");
		}
	}

	
}


function abs3(){
	document.getElementById("vector3_ans").style.top = "200px";
	if(dot3x3==1){
		$("#vector3_dot").fadeOut(0);
		$("#vector3_crossans").fadeOut(0);
		
		dot3x3=0;
	}
	var a1 = parseInt(document.getElementById("vector3_1-1").value);
	var a2 = parseInt(document.getElementById("vector3_1-2").value);
	var a3 = parseInt(document.getElementById("vector3_1-3").value);
	
	if(window.isNaN(a1) || window.isNaN(a2) || window.isNaN(a3)){
		alert("請輸入正確值")
	}
	else{
		
		
		$("#vector3_ans").fadeOut(0);
		document.getElementById("vector3_ans").innerHTML=roundX(Math.sqrt(a1*a1+a2*a2+a3*a3),4);
		$("#vector3_ans").fadeIn("fast");
	}
	

	
}



function dot2(){
	document.getElementById("vector2_ans").style.top = "270px";
	if(dot2x2==0){
		$("#vector_dot").fadeIn("fast");
		
		dot2x2=1;
	}
	else{
		var a1 = parseInt(document.getElementById("vector2_1-1").value);
		var a2 = parseInt(document.getElementById("vector2_1-2").value);
		var b1 = parseInt(document.getElementById("vector2_2-1").value);
		var b2 = parseInt(document.getElementById("vector2_2-2").value);
		if(window.isNaN(a1) || window.isNaN(a2) || window.isNaN(b1) || window.isNaN(b2)){
			alert("請輸入正確值");
		}
		else{
			$("#vector2_ans").fadeOut(0);
			
			document.getElementById("vector2_ans").innerHTML=a1*b1+a2*b2;
			$("#vector2_ans").fadeIn("fast");
		}
		
	}
}


function abs2(){
	document.getElementById("vector2_ans").style.top = "200px";
	if(dot2x2==1){
		$("#vector_dot").fadeOut(0);
		
		dot2x2=0;
	}
	$("#vector2_ans").fadeOut(0);
	var a1 = parseInt(document.getElementById("vector2_1-1").value);
	var a2 = parseInt(document.getElementById("vector2_1-2").value);
	
	if(window.isNaN(a1) || window.isNaN(a2)){
		alert("請輸入正確值")
	}
	else{
		
		
		
		document.getElementById("vector2_ans").innerHTML=roundX(Math.sqrt(a1*a1+a2*a2),4);
		$("#vector2_ans").fadeIn("fast");
	}
	

	
}

function roundX(x,n){
	x*= Math.pow(10,n);
	x= Math.round(x);
	return x/Math.pow(10,n);
}