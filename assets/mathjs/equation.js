var now=0;
function equation2(){
	$("#equation2_content").fadeOut(0);
	$("#equation3_content").fadeOut(0);
	$("#equation2_content").fadeIn("fast");
	$("#equation_cal").fadeOut(0);
	$("#equation_ans").fadeOut(0);
	document.getElementById("equation_cal").style.top = "175px";
	document.getElementById("equation_ans").style.top = "235px";
	if(now!=1){
		document.getElementById("equation_ans").innerHTML="";
	}
	$("#equation_cal").fadeIn("fast");
	$("#equation_ans").fadeIn("fast");
	now=1;
}
function equation3(){
	$("#equation2_content").fadeOut(0);
	$("#equation3_content").fadeOut(0);
	$("#equation3_content").fadeIn("fast");
	$("#equation_cal").fadeOut(0);
	$("#equation_ans").fadeOut(0);
	
	document.getElementById("equation_cal").style.top = "260px";
	document.getElementById("equation_ans").style.top = "325px";
	if(now!=2){
		document.getElementById("equation_ans").innerHTML="";
	}
	$("#equation_cal").fadeIn("fast");
	$("#equation_ans").fadeIn("fast");
	
	now=2;
}
function equation_cal(){
	$("#equation_ans").fadeOut(0);
	if(now==1){
		var a1 = parseInt(document.getElementById("equation2_1-1").value);
		var a2 = parseInt(document.getElementById("equation2_1-2").value);
		var a3 = parseInt(document.getElementById("equation2_1-3").value);
		var b1 = parseInt(document.getElementById("equation2_2-1").value);
		var b2 = parseInt(document.getElementById("equation2_2-2").value);
		var b3 = parseInt(document.getElementById("equation2_2-3").value);
		
		if(window.isNaN(a1) || window.isNaN(a2) || window.isNaN(a3) || window.isNaN(b1) || window.isNaN(b2) ||window.isNaN(b3)){
			alert("請輸入正確值");
		}
		else{
			var d  = a1*b2-a2*b1;
			var dx = a3*b2-a2*b3;
			var dy = a1*b3-a3*b1;
			
			if(d==0){
				if(dx==0 && dy==0){
					document.getElementById("equation_ans").innerHTML="無限多組解";
					$("#equation_ans").fadeIn("fast");
				}
				else{
					document.getElementById("equation_ans").innerHTML="無解";
					$("#equation_ans").fadeIn("fast");
				}
			}
			else{
				var x = roundX(dx/d,4);
				var y = roundX(dy/d,4);
				document.getElementById("equation_ans").innerHTML="x = "+x+"/y = "+y;
				$("#equation_ans").fadeIn("fast");
			}
		}
		
	}
	else if(now==2){
		var a1 = parseInt(document.getElementById("equation3_1-1").value);
		var a2 = parseInt(document.getElementById("equation3_1-2").value);
		var a3 = parseInt(document.getElementById("equation3_1-3").value);
		var a4 = parseInt(document.getElementById("equation3_1-4").value);
		var b1 = parseInt(document.getElementById("equation3_2-1").value);
		var b2 = parseInt(document.getElementById("equation3_2-2").value);
		var b3 = parseInt(document.getElementById("equation3_2-3").value);
		var b4 = parseInt(document.getElementById("equation3_2-4").value);
		var c1 = parseInt(document.getElementById("equation3_3-1").value);
		var c2 = parseInt(document.getElementById("equation3_3-2").value);
		var c3 = parseInt(document.getElementById("equation3_3-3").value);
		var c4 = parseInt(document.getElementById("equation3_3-4").value);
		
		if(window.isNaN(a1) || window.isNaN(a2) || window.isNaN(a3) || window.isNaN(a4) ||
		   window.isNaN(b1) || window.isNaN(b2) || window.isNaN(b3) || window.isNaN(b4) ||
		   window.isNaN(c1) || window.isNaN(c2) || window.isNaN(c3) || window.isNaN(c4)){
			alert("請輸入正確值");
		}
		else{
			var d  = a1*(b2*c3-b3*c2)-a2*(b1*c3-b3*c1)+a3*(b1*c2-b2*c1);
			var dx = a4*(b2*c3-b3*c2)-a2*(b4*c3-b3*c4)+a3*(b4*c2-b2*c4);
			var dy = a1*(b4*c3-b3*c4)-a4*(b1*c3-b3*c1)+a3*(b1*c4-b4*c1);
			var dz = a1*(b2*c4-b4*c2)-a2*(b1*c4-b4*c1)+a4*(b1*c2-b2*c1);
			
			if(d==0){
				if(dx==0 && dy==0 && dz==0){
					document.getElementById("equation_ans").innerHTML="無限多組解或無解";
					$("#equation_ans").fadeIn("fast");
				}
				else{
					document.getElementById("equation_ans").innerHTML="無解";
					$("#equation_ans").fadeIn("fast");
				}
			}
			else{
				var x = roundX(dx/d,4);
				var y = roundX(dy/d,4);
				var z = roundX(dz/d,4);
				
				document.getElementById("equation_ans").innerHTML="x = "+x+"/y = "+y+"/z = "+z;
				$("#equation_ans").fadeIn("fast");
			}
		}
		
	}
	
	else{
		alert("error");
	}
}

function roundX(x,n){
	x*= Math.pow(10,n);
	x= Math.round(x);
	return x/Math.pow(10,n);
}