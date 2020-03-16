
function dot2x2(){	// 11 12
					// 21 22
	
	$("#atrix2x2_ans").fadeOut(0);
	var a11 = parseInt(document.getElementById("2x2_11").value);
	var a21 = parseInt(document.getElementById("2x2_21").value);
	var a12 = parseInt(document.getElementById("2x2_12").value);
	var a22 = parseInt(document.getElementById("2x2_22").value);
	var b11 = parseInt(document.getElementById("2x2_2_11").value);
	var b21 = parseInt(document.getElementById("2x2_2_21").value);
	var b12 = parseInt(document.getElementById("2x2_2_12").value);
	var b22 = parseInt(document.getElementById("2x2_2_22").value);
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a12) || window.isNaN(a22) || window.isNaN(b11) || window.isNaN(b21) || window.isNaN(b12) || window.isNaN(b22))
		alert("請正確輸入數字");
	else{
		var ans11=a11*b11+a12*b21;
		var ans21=a21*b11+a22*b21;
		var ans12=a11*b12+a12*b22;
		var ans22=a21*b12+a22*b22;
		
		document.getElementById("2x2_ans_11").value=ans11;
		document.getElementById("2x2_ans_21").value=ans21;
		document.getElementById("2x2_ans_12").value=ans12;
		document.getElementById("2x2_ans_22").value=ans22;
		$("#atrix2x2_ans").fadeIn("fast");
	}
	
	
}

function dot_2x2(){
	now_dot2x2=1;
	$("#matrix_self").fadeOut(0);
	$("#matrix_2x2_determinant_ans").fadeOut(0);
	$("#atrix2x2_ans").fadeOut(0);
	$("#martrix_clsdown").fadeIn(0);
	document.getElementById("matrixmark2x2_ans-1").style.top = "475px";
	document.getElementById("matrixmark2x2_ans-2").style.top = "475px";
	document.getElementById("matrix2x2_ans-1").style.top = "450px";
	document.getElementById("matrix2x2_ans-2").style.top = "450px";
	$("#matrix_dot").fadeOut(0);
	$("#matrix_dot").fadeIn("fast");
}

function matrixself(){
	now_dot2x2=0;
	$("#matrix_dot").fadeOut(0);
	$("#atrix2x2_ans").fadeOut(0);
	$("#martrix_clsdown").fadeOut(0);
	document.getElementById("matrixmark2x2_ans-1").style.top = "325px";
	document.getElementById("matrixmark2x2_ans-2").style.top = "325px";
	document.getElementById("matrix2x2_ans-1").style.top = "300px";
	document.getElementById("matrix2x2_ans-2").style.top = "300px";
	$("#matrix_self").fadeOut(0);
	$("#matrix_self").fadeIn("fast");
}


function determinant(){
	$("#atrix2x2_ans").fadeOut(0);
	$("#matrix_2x2_determinant_ans").fadeOut(0);
	var a11 = parseInt(document.getElementById("2x2_11").value);
	var a21 = parseInt(document.getElementById("2x2_21").value);
	var a12 = parseInt(document.getElementById("2x2_12").value);
	var a22 = parseInt(document.getElementById("2x2_22").value);
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a12) || window.isNaN(a22))
		alert("請正確輸入數字");
	else{
		document.getElementById("matrix_2x2_determinant_ans").innerHTML=a11*a22-a21*a12;
		$("#matrix_2x2_determinant_ans").fadeIn("fast");
	}
}

function exponentiation(){
	$("#matrix_2x2_determinant_ans").fadeOut(0);
	$("#atrix2x2_ans").fadeOut(0);
	var n = parseInt(document.getElementById("matrix_2x2_exponentiation_input").value);
	var a11 = parseInt(document.getElementById("2x2_11").value);
	var a21 = parseInt(document.getElementById("2x2_21").value);
	var a12 = parseInt(document.getElementById("2x2_12").value);
	var a22 = parseInt(document.getElementById("2x2_22").value);
	
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a12) || window.isNaN(a22) || n<1)
		alert("請正確輸入數字");
	else{
		var ans11=a11;
		var ans21=a21;
		var ans12=a12;
		var ans22=a22;
		for(var i=1;i<n;i++){
			var s11=ans11*a11+ans12*a21;
			var s21=ans21*a11+ans22*a21;
			var s12=ans11*a12+ans12*a22;
			var s22=ans21*a12+ans22*a22;
			
			ans11=s11;
			ans21=s21;
			ans12=s12;
			ans22=s22;
		}
		
		document.getElementById("2x2_ans_11").value=ans11;
		document.getElementById("2x2_ans_21").value=ans21;
		document.getElementById("2x2_ans_12").value=ans12;
		document.getElementById("2x2_ans_22").value=ans22;
		$("#atrix2x2_ans").fadeIn("fast");
	}
	
	
}

function inverse(){
	$("#matrix_2x2_determinant_ans").fadeOut(0);
	$("#atrix2x2_ans").fadeOut(0);
	
	var a11 = parseInt(document.getElementById("2x2_11").value);
	var a21 = parseInt(document.getElementById("2x2_21").value);
	var a12 = parseInt(document.getElementById("2x2_12").value);
	var a22 = parseInt(document.getElementById("2x2_22").value);
	
	
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a12) || window.isNaN(a22))
		alert("請正確輸入數字");
	else{
		var det=a11*a22-a21*a12;
		
		document.getElementById("2x2_ans_11").value=roundX(a22/det,4);
		document.getElementById("2x2_ans_21").value=roundX((-a21)/det,4);
		document.getElementById("2x2_ans_12").value=roundX((-a12)/det,4);
		document.getElementById("2x2_ans_22").value=roundX(a11/det,4);
		$("#atrix2x2_ans").fadeIn("fast");
	}
	
	
}
var now_dot2x2=0;
var now_dot3x3=0;
var now=0;
function martrix2x2(){
	
	
	if(now_dot2x2==1)
		$("#martrix_clsdown").fadeIn(0);
	else
		$("#martrix_clsdown").fadeOut(0);
	
	
	now=1;
	$("#martrix_clsup").fadeIn(0);
	$("#matrix_3x3_content").fadeOut(0);
	$("#matrix_2x2_content").fadeOut(0);
	$("#matrix_2x2_content").fadeIn("fast");

	
}

function martrix3x3(){
	
	if(now_dot3x3==1)
		$("#martrix_clsdown").fadeIn(0);
	else
		$("#martrix_clsdown").fadeOut(0);
	
		
	now=2;
	$("#martrix_clsup").fadeIn(0);
	$("#matrix_3x3_content").fadeOut(0);
	$("#matrix_2x2_content").fadeOut(0);
	$("#matrix_3x3_content").fadeIn("fast");


	
}



function dot3x3(){
							// 11 12 13
							// 21 22 23
							// 31 32 33 
	$("#atrix3x3_ans").fadeOut(0);
	
	var a11 = parseInt(document.getElementById("3x3_11").value);
	var a21 = parseInt(document.getElementById("3x3_21").value);
	var a31 = parseInt(document.getElementById("3x3_31").value);
	var a12 = parseInt(document.getElementById("3x3_12").value);
	var a22 = parseInt(document.getElementById("3x3_22").value);
	var a32 = parseInt(document.getElementById("3x3_32").value);
	var a13 = parseInt(document.getElementById("3x3_13").value);
	var a23 = parseInt(document.getElementById("3x3_23").value);
	var a33 = parseInt(document.getElementById("3x3_33").value);
	
	
	var b11 = parseInt(document.getElementById("3x3_2_11").value);
	var b21 = parseInt(document.getElementById("3x3_2_21").value);
	var b31 = parseInt(document.getElementById("3x3_2_31").value);
	var b12 = parseInt(document.getElementById("3x3_2_12").value);
	var b22 = parseInt(document.getElementById("3x3_2_22").value);
	var b32 = parseInt(document.getElementById("3x3_2_32").value);
	var b13 = parseInt(document.getElementById("3x3_2_13").value);
	var b23 = parseInt(document.getElementById("3x3_2_23").value);
	var b33 = parseInt(document.getElementById("3x3_2_33").value);
	
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a31) || 
	   window.isNaN(a12) || window.isNaN(a22) || window.isNaN(a32) ||
	   window.isNaN(a13) || window.isNaN(a23) || window.isNaN(a33) ||
	   window.isNaN(b11) || window.isNaN(b21) || window.isNaN(b31) || 
	   window.isNaN(b12) || window.isNaN(b22) || window.isNaN(b32) ||
	   window.isNaN(b13) || window.isNaN(b23) || window.isNaN(b33)){
		   alert("請正確輸入數字");
	   }
	else{
		var ans11=a11*b11+a12*b21+a13*b31;
		var ans21=a21*b11+a22*b21+a23*b31;
		var ans31=a31*b11+a32*b21+a33*b31;
		var ans12=a11*b12+a12*b22+a13*b32;
		var ans22=a21*b12+a22*b22+a23*b32;
		var ans32=a31*b12+a32*b22+a33*b32;
		var ans13=a11*b13+a12*b23+a13*b33;
		var ans23=a21*b13+a22*b23+a23*b33;
		var ans33=a31*b13+a32*b23+a33*b33;
		
		
		document.getElementById("3x3_ans_11").value=ans11;
		document.getElementById("3x3_ans_21").value=ans21;
		document.getElementById("3x3_ans_31").value=ans31;
		document.getElementById("3x3_ans_12").value=ans12;
		document.getElementById("3x3_ans_22").value=ans22;
		document.getElementById("3x3_ans_32").value=ans32;
		document.getElementById("3x3_ans_13").value=ans13;
		document.getElementById("3x3_ans_23").value=ans23;
		document.getElementById("3x3_ans_33").value=ans33;
		
		$("#atrix3x3_ans").fadeIn("fast");
	}
	
}

function dot_3x3(){
	now_dot3x3=1;
	$("#matrix_self_3x3").fadeOut(0);
	$("#matrix_3x3_determinant_ans").fadeOut(0);
	$("#atrix3x3_ans").fadeOut(0);
	$("#martrix_clsdown").fadeIn(0);
	if(isMobile()==true){
		document.getElementById("matrixmark3x3_ans-1").style.top = "575px";
		document.getElementById("matrixmark3x3_ans-2").style.top = "575px";
		document.getElementById("matrix3x3_ans-1").style.top = "535px";
		document.getElementById("matrix3x3_ans-2").style.top = "535px";
		document.getElementById("matrix3x3_ans-3").style.top = "535px";
	}
	else{
		document.getElementById("matrixmark3x3_ans-1").style.top = "530px";
		document.getElementById("matrixmark3x3_ans-2").style.top = "530px";
		document.getElementById("matrix3x3_ans-1").style.top = "490px";
		document.getElementById("matrix3x3_ans-2").style.top = "490px";
		document.getElementById("matrix3x3_ans-3").style.top = "490px";
	}
	
	$("#matrix_dot_3x3").fadeOut(0);
	$("#matrix_dot_3x3").fadeIn("fast");
}

function matrixself3x3(){
	now_dot3x3=0;
	$("#martrix_clsdown").fadeOut(0);
	$("#matrix_dot_3x3").fadeOut(0);
	$("#atrix3x3_ans").fadeOut(0);
	if(isMobile()==true){
		document.getElementById("matrixmark3x3_ans-1").style.top = "370px";
		document.getElementById("matrixmark3x3_ans-2").style.top = "370px";
		document.getElementById("matrix3x3_ans-1").style.top = "330px";
		document.getElementById("matrix3x3_ans-2").style.top = "330px";
		document.getElementById("matrix3x3_ans-3").style.top = "330px";
	}
	else{
		document.getElementById("matrixmark3x3_ans-1").style.top = "350px";
		document.getElementById("matrixmark3x3_ans-2").style.top = "350px";
		document.getElementById("matrix3x3_ans-1").style.top = "310px";
		document.getElementById("matrix3x3_ans-2").style.top = "310px";
		document.getElementById("matrix3x3_ans-3").style.top = "310px";
	}
	
	
	$("#matrix_self_3x3").fadeOut(0);
	$("#matrix_self_3x3").fadeIn("fast");
}


function determinant_3x3(){
	$("#atrix3x3_ans").fadeOut(0);
	$("#matrix_3x3_determinant_ans").fadeOut(0);
	
	var a11 = parseInt(document.getElementById("3x3_11").value);
	var a21 = parseInt(document.getElementById("3x3_21").value);
	var a31 = parseInt(document.getElementById("3x3_31").value);
	var a12 = parseInt(document.getElementById("3x3_12").value);
	var a22 = parseInt(document.getElementById("3x3_22").value);
	var a32 = parseInt(document.getElementById("3x3_32").value);
	var a13 = parseInt(document.getElementById("3x3_13").value);
	var a23 = parseInt(document.getElementById("3x3_23").value);
	var a33 = parseInt(document.getElementById("3x3_33").value);
	
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a31) ||
	   window.isNaN(a12) || window.isNaN(a22) || window.isNaN(a32) ||
       window.isNaN(a13) || window.isNaN(a23) || window.isNaN(a33)){
		   
		alert("請正確輸入數字");
	}
		
	else{
		document.getElementById("matrix_3x3_determinant_ans").innerHTML=a11*a22*a33+a21*a32*a13+a12*a23*a31-a13*a22*a31-a23*a32*a11-a12*a21*a33;
		$("#matrix_3x3_determinant_ans").fadeIn("fast");
	}
}

function exponentiation_3x3(){
	$("#matrix_3x3_determinant_ans").fadeOut(0);
	$("#atrix3x3_ans").fadeOut(0);
	var n = parseInt(document.getElementById("matrix_3x3_exponentiation_input").value);
	var a11 = parseInt(document.getElementById("3x3_11").value);
	var a21 = parseInt(document.getElementById("3x3_21").value);
	var a31 = parseInt(document.getElementById("3x3_31").value);
	var a12 = parseInt(document.getElementById("3x3_12").value);
	var a22 = parseInt(document.getElementById("3x3_22").value);
	var a32 = parseInt(document.getElementById("3x3_32").value);
	var a13 = parseInt(document.getElementById("3x3_13").value);
	var a23 = parseInt(document.getElementById("3x3_23").value);
	var a33 = parseInt(document.getElementById("3x3_33").value);
	
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a31) ||
	   window.isNaN(a12) || window.isNaN(a22) || window.isNaN(a32) ||
       window.isNaN(a13) || window.isNaN(a23) || window.isNaN(a33)){
		alert("請正確輸入數字");
	}
	else{
		var ans11=a11;
		var ans21=a21;
		var ans31=a31;
		var ans12=a12;
		var ans22=a22;
		var ans32=a32;
		var ans13=a13;
		var ans23=a23;
		var ans33=a33;
		
		
		
		for(var i=1;i<n;i++){
			var s11=ans11*a11+ans12*a21+ans13*a31;
			var s21=ans21*a11+ans22*a21+ans23*a31;
			var s31=ans31*a11+ans32*a21+ans33*a31;
			var s12=ans11*a12+ans12*a22+ans13*a32;
			var s22=ans21*a12+ans22*a22+ans23*a32;
			var s32=ans31*a12+ans32*a22+ans33*a32;
			var s13=ans11*a13+ans12*a23+ans13*a33;
			var s23=ans21*a13+ans22*a23+ans23*a33;
			var s33=ans31*a13+ans32*a23+ans33*a33;
			
			ans11=s11;
			ans21=s21;
			ans31=s31;
			ans12=s12;
			ans22=s22;
			ans32=s32;
			ans13=s13;
			ans23=s23;
			ans33=s33;
		}
		
		document.getElementById("3x3_ans_11").value=ans11;
		document.getElementById("3x3_ans_21").value=ans21;
		document.getElementById("3x3_ans_31").value=ans31;
		document.getElementById("3x3_ans_12").value=ans12;
		document.getElementById("3x3_ans_22").value=ans22;
		document.getElementById("3x3_ans_32").value=ans32;
		document.getElementById("3x3_ans_13").value=ans13;
		document.getElementById("3x3_ans_23").value=ans23;
		document.getElementById("3x3_ans_33").value=ans33;
		
		$("#atrix3x3_ans").fadeIn("fast");
	}
	
	
}


function inverse_3x3(){
	$("#matrix_3x3_determinant_ans").fadeOut(0);
	$("#atrix3x3_ans").fadeOut(0);
	
	var a11 = parseInt(document.getElementById("3x3_11").value);
	var a21 = parseInt(document.getElementById("3x3_21").value);
	var a31 = parseInt(document.getElementById("3x3_31").value);
	var a12 = parseInt(document.getElementById("3x3_12").value);
	var a22 = parseInt(document.getElementById("3x3_22").value);
	var a32 = parseInt(document.getElementById("3x3_32").value);
	var a13 = parseInt(document.getElementById("3x3_13").value);
	var a23 = parseInt(document.getElementById("3x3_23").value);
	var a33 = parseInt(document.getElementById("3x3_33").value);
	
	
	if(window.isNaN(a11) || window.isNaN(a21) || window.isNaN(a31) ||
	   window.isNaN(a12) || window.isNaN(a22) || window.isNaN(a32) ||
       window.isNaN(a13) || window.isNaN(a23) || window.isNaN(a33)){
		alert("請正確輸入數字");
	}
	else{
		var det=a11*a22*a33+a21*a32*a13+a12*a23*a31-a13*a22*a31-a23*a32*a11-a12*a21*a33;
		
							// 11 12 13
							// 21 22 23
							// 31 32 33 
							
		document.getElementById("3x3_ans_11").value=roundX((a22*a33-a23*a32)/det,4);
		document.getElementById("3x3_ans_21").value=roundX(-(a21*a33-a23*a31)/det,4);
		document.getElementById("3x3_ans_31").value=roundX((a21*a32-a22*a31)/det,4);
		document.getElementById("3x3_ans_12").value=roundX(-(a12*a33-a13*a32)/det,4);
		document.getElementById("3x3_ans_22").value=roundX((a11*a33-a13*a31)/det,4);
		document.getElementById("3x3_ans_32").value=roundX(-(a11*a32-a12*a31)/det,4);
		document.getElementById("3x3_ans_13").value=roundX((a12*a23-a13*a22)/det,4);
		document.getElementById("3x3_ans_23").value=roundX(-(a11*a23-a13*a21)/det,4);
		document.getElementById("3x3_ans_33").value=roundX(a11*a22-a12*a21/det,4);
		$("#atrix3x3_ans").fadeIn("fast");
	}
	
	
}

function martrix_clsup(){
	if(now==1){
		document.getElementById("2x2_11").value="";
		document.getElementById("2x2_21").value="";
		document.getElementById("2x2_12").value="";
		document.getElementById("2x2_22").value="";
	}
	if(now==2){
		document.getElementById("3x3_11").value="";
		document.getElementById("3x3_21").value="";
		document.getElementById("3x3_31").value="";
		document.getElementById("3x3_12").value="";
		document.getElementById("3x3_22").value="";
		document.getElementById("3x3_32").value="";
		document.getElementById("3x3_13").value="";
		document.getElementById("3x3_23").value="";
		document.getElementById("3x3_33").value="";
	}
	
}
function martrix_clsdown(){
	if(now==1){
		document.getElementById("2x2_2_11").value="";
		document.getElementById("2x2_2_21").value="";
		document.getElementById("2x2_2_12").value="";
		document.getElementById("2x2_2_22").value="";
	}
	if(now==2){
		document.getElementById("3x3_2_11").value="";
		document.getElementById("3x3_2_21").value="";
		document.getElementById("3x3_2_31").value="";
		document.getElementById("3x3_2_12").value="";
		document.getElementById("3x3_2_22").value="";
		document.getElementById("3x3_2_32").value="";
		document.getElementById("3x3_2_13").value="";
		document.getElementById("3x3_2_23").value="";
		document.getElementById("3x3_2_33").value="";
	}
	
}





function isMobile() {

  try{ document.createEvent("TouchEvent"); return true; }

  catch(e){ return false;}

}








function roundX(x,n){
	x*= Math.pow(10,n);
	x= Math.round(x);
	return x/Math.pow(10,n);
}







