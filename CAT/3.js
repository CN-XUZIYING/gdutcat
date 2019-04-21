window.onload = function() {

			var banner = document.getElementById("banner");
			var left = document.getElementById('left');
			var right = document.getElementById("right");
			var content2 = document.getElementById("content2");
			var timer;
			var buttons = document.getElementById('buttons').getElementsByTagName('span');
			var index =1;


			function animate(offset) {
                var newLeft = parseInt(content2.style.left) + offset;
                content2.style.left = newLeft + 'px';
                if (newLeft > -900) {
                    content2.style.left = -3600 + 'px';
                }
                if (newLeft <= -4500) {
                    content2.style.left = -900 + 'px';
                }
            }


			left.onclick = function () {
				index -= 1;
				if(index < 1){
					index = 4;
				}
				buttonschange();
				animate(900);
				};


			right.onclick = function (){
				index += 1;
				if(index > 4){
					index = 1;
				}
				buttonschange();
				animate(-900);
			};


			function move() {
				timer = setInterval (function (){
					right.onclick()
				},1500)
			}
			move();



			function stop() {
				clearInterval(timer);
			}
 			banner.onmouseover = stop;
 			banner.onmouseout = move;



 			function buttonschange() {
 				for(var i = 0; i < buttons.length;i++){
 					if(buttons[i].className == "on")
 					{
 						buttons[i].className = "";
 					}
 				}
 				buttons[index - 1].className = "on";
 			}
 		

 			
 	// 	function newTime();
 				
 	// function p (n){
  //       return n < 10 ? '0'+ n : n;  
  //   }


  //   function newTime (){
  //       var startTime = new Date(); 
  //       var endTime = new Date("2019/5/1 00:00:00");
  //       var countDown = (endTime.getTime() - startTime.getTime())/1000;
  //       var oDay = parseInt(countDown/(24*60*60));
  //       var oHours = parseInt(countDown/(60*60)%24);
  //       var oMinutes = parseInt(countDown/60%60);
  //       var oSeconds = parseInt(countDown%60);
  //       var html =  "<span>" + p(oDay) + "天</span>"+ "<span>" + p(oHours) + "时</span>" + "<span>" + p(oMinutes) + "分</span>" +"<span>" + p(oSeconds) + "秒</span>";
  //       document.getElementById('time').innerHTML = html;
  //       if(countDown < 0){
  //           document.getElementById('time').innerHTML = '元旦到了';
  //       }
  //       setTimeout('newTime()',1000)
  //   }
    }
 function goTime()
				{
 				var startTime = new Date();
 				var endTime = new Date("2019/4/30 00: 00:00");
 				var countDown = (endTime.getTime() - startTime.getTime())/1000;
 				var hour = parseInt(countDown/(60*60));
 				var minute = parseInt(countDown/60%60);
 				var second = parseInt(countDown%60);
 				var html6 = "<p>"  + timeChange(hour) + "</p>" + ":" + "<p>" + timeChange(minute)+ "</p>" + ":" + "<p>"+ timeChange(second) + "</p>" ;
 				document.getElementById("time").innerHTML = html6;
 				if(countDown < 0 ){
 					document.getElementById("time").innerHTML = "开课啦";
 				}
 				setTimeout("goTime()",1000)
 				function timeChange(n){
 				if( n < 10){
 					return "0" + n ;
 				}
 				else return n;
				}
 

 			}

		



 	
 		







	