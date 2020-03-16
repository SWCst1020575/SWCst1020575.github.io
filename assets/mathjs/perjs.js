function permutation(){
	var n = document.getElementById("pu").value;
	var k = document.getElementById("pd").value;
	n = parseInt(n);
	k = parseInt(k);
	if(n<k || n<0 || k<0 || window.isNaN(n) || window.isNaN(k)){
		document.getElementById("answerp").innerHTML="&nbsp = &nbsp error";
	}
	else{
		var u=1,d=1;
		for(var i=n;i>0;i--){
			u *= i;
		}
		
		for(var i=n-k;i>0;i--){
			d *= i;
		}
		document.getElementById("answerp").innerHTML="&nbsp = &nbsp "+Math.round(u/d);
	}
	
}

function combination(){
	var n = document.getElementById("cu").value;
	var k = document.getElementById("cd").value;
	n = parseInt(n);
	k = parseInt(k);
	if(n<k || n<0 || k<0 || window.isNaN(n) || window.isNaN(k)){
		document.getElementById("answerc").innerHTML="&nbsp = &nbsp error";
	}
	else{
		var u=1,d=1;
		for(var i=n;i>0;i--){
			u *= i;
		}
		for(var i=k;i>0;i--){
			d *= i;
		}
		for(var i=n-k;i>0;i--){
			d *= i;
		}
		document.getElementById("answerc").innerHTML="&nbsp = &nbsp "+Math.round(u/d);
	}
	
}

function combinationH(){
	var n = document.getElementById("hu").value;
	var k = document.getElementById("hd").value;
	n = parseInt(n);
	k = parseInt(k);
	if(n<0 || k<0 || window.isNaN(n) || window.isNaN(k)){
		document.getElementById("answerh").innerHTML="&nbsp = &nbsp error";
	}
	else{
		var u=1,d=1;
		n=n+k-1;
		for(var i=n;i>0;i--){
			u *= i;
		}
		for(var i=k;i>0;i--){
			d *= i;
		}
		for(var i=n-k;i>0;i--){
			d *= i;
		}
		document.getElementById("answerh").innerHTML="&nbsp = &nbsp "+Math.round(u/d);
	}
	
}