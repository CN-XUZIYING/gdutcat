		 function goTime()
				{
 				var startTime = new Date();
 				var endTime = new Date("2019/5/4 19: 00:00");
 				var countDown = (endTime.getTime() - startTime.getTime())/1000;
 				var hour = parseInt(countDown/(60*60));
 				var minute = parseInt(countDown/60%60);
 				var second = parseInt(countDown%60);
 				var html6 = "<p1>"+"距开课还有"+ "</p1>"+ "<p>" + timeChange(hour)+ "</p>" + ":" + "<p>" + timeChange(minute)+ "</p>" + ":" + "<p>"+ timeChange(second) + "</p>" ;
 				document.getElementById("time1").innerHTML = html6;
 				document.getElementById("time2").innerHTML = html6;
 				document.getElementById("time3").innerHTML = html6;
 				document.getElementById("time4").innerHTML = html6;
 				
 				if(countDown < 0 ){
 					document.getElementById("time1").innerHTML = "开课啦";
 					document.getElementById("time2").innerHTML = "开课啦";
 					document.getElementById("time3").innerHTML = "开课啦";
 					document.getElementById("time4").innerHTML = "开课啦";
 				}
 				setTimeout("goTime()",1000)
 				function timeChange(n){
 				if( n < 10){
 					return "0" + n ;
 				}
 				else return n;
				}
 

 			}
 			