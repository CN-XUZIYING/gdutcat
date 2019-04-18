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
			right.onclick = function () {
				index += 1;
				if(index > 4){
					index = 1;
				}
				buttonschange();
				animate(-900);
			};
			function move() {
				timer = setInterval (function() {
					right.onclick()
				},1200)
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

		}