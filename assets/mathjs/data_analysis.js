function data_analysis(){
	var dataall = document.getElementById("data").value;
	var datastr = dataall.split(" ");	
	var n = datastr.length;
	var data = new Array();
	var sum=0;
	var mid=0;
	var most=0;var time=1;var timesave=1;var most_exist=1;
	var variance=0;
	var standard=0;
	var cor=1;
	for(var i=0;i<n;i++){
		if(window.isNaN(parseInt(datastr[i]))){
			alert("error value");
			cor=0;
			break;
		}
		data[i] = parseInt(datastr[i]);
	}
	if(cor===1){
		/*平均數*/
		for(var i=0;i<n;i++){
			sum += data[i];
		}	
		data.sort(function (a, b) {
			return a - b
		});
		
		/*中位數*/
		if(n % 2==1){
			mid=data[(n-1)/2];
		}
		else{
			mid=(data[n/2-1]+data[n/2])/2;
		}
		
		/*眾數*/
		for(var i=1;i<n;i++){
			if(data[i]==data[i-1]){
				timesave += 1;
			}
			else{
				if(timesave>time){
					time=timesave;
					most=data[i-1];
					timesave=1;
					most_exist=1;
				}
				if(timesave==time){
					timesave=1;
					most_exist=0;
				}
				if(timesave<=time){
					timesave=1;
				}
			}
			if(i==(n-1)){
				if(timesave>time){
					time=timesave;
					most=data[i-1];
					timesave=1;
					most_exist=1;
				}
				if(timesave==time){
					most_exist=0
				}
			}
		}
		
		/*變異數*/
		for(var i=0;i<n;i++){
			variance += (data[i]-(sum/n))*(data[i]-(sum/n));
		}
		
		standard=Math.sqrt(variance/n);
		
		document.getElementById("mu").innerHTML="平均數 = "+roundX(sum/n,4);
		document.getElementById("mid").innerHTML="中位數 = "+mid;
		if(most_exist==1 && time!=1)
			document.getElementById("most").innerHTML="眾數 = "+most;
		else
			document.getElementById("most").innerHTML="眾數數量大於1";
		document.getElementById("variance").innerHTML="變異數 = "+roundX(variance/n,4);
		document.getElementById("standard").innerHTML="標準差 = "+roundX(standard,4);
	}
	
	
	/*
	k = parseInt(k);
	if(n<k || n<0 || k<0 || window.isNaN(n) || window.isNaN(k)){
		document.getElementById("answerc").innerHTML="&nbsp = &nbsp error";
	} */
	
	
}

function roundX(x,n){
	x*= Math.pow(10,n);
	x= Math.round(x);
	return x/Math.pow(10,n);
}