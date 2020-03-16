function summation(){
	 $("#sigma_awnser").fadeOut(0);
	var sum=0;
	var x4 = parseInt(document.getElementById("sigma_x4").value);
	var x3 = parseInt(document.getElementById("sigma_x3").value);
	var x2 = parseInt(document.getElementById("sigma_x2").value);
	var x1 = parseInt(document.getElementById("sigma_x1").value);
	var x0 = parseInt(document.getElementById("sigma_x0").value);
	var n = parseInt(document.getElementById("sigma_n").value);
	var k = parseInt(document.getElementById("sigma_k").value);
	if(window.isNaN(n) || window.isNaN(k)){
		alert("請輸入sigma的起始值和結束值");
	}
	else{
		
		if(!(window.isNaN(x4)) || x4>0){
			var u = (6*Math.pow(n,5) + 15*Math.pow(n,4) + 10*Math.pow(n,3)-n)/30;
			var d = (6*Math.pow(k-1,5) + 15*Math.pow(k-1,4) + 10*Math.pow(k-1,3)-k+1)/30;
			sum = sum + x4*(u - d);
		}
		
		if(!(window.isNaN(x3)) || x3>0){
			var u = (Math.pow(n,4) + 2*Math.pow(n,3) + Math.pow(n,2))/4;
			var d = (Math.pow(k-1,4) + 2*Math.pow(k-1,3) + Math.pow(k-1,2))/4;
			sum = sum + x3*(u - d);
		}
		
		if(!(window.isNaN(x2)) || x2>0){
			var u = (2*Math.pow(n,3) + 3*Math.pow(n,2) + n)/6;
			var d = (2*Math.pow(k-1,3) + 3*Math.pow(k-1,2) + k-1)/6;//n(n+1)(2n+1)/6=n(2n^2+3n+1)/6
			sum = sum + x2*(u - d);
		}
		
		if(!(window.isNaN(x1)) || x1>0){
			var u = (Math.pow(n,2) +n)/2;
			var d = (Math.pow(k-1,2) +k-1)/2;//n(n+1)/2
			sum = sum + x1*(u - d);
		}
		
		if(!(window.isNaN(x0)) || x0>0){
			var u = n;
			var d = k-1;
			sum = sum + x0*(u - d);
		}
		
		document.getElementById("sigma_awnser").innerHTML=sum;
		$("#sigma_awnser").fadeIn("slow");
	}
	
}