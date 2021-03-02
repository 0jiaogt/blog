/*参数，目标对象，时间，目的地，延迟*/
		function dHMove(o, time, destinationLeft, destinationTop, delay){
			var isArrival = false;
			var time_t = 30;
			time = parseFloat(time);
			destinationLeft = parseFloat(destinationLeft);
			destinationTop = parseFloat(destinationTop);
			delay = parseFloat(delay);
			/*左边和上边的的位移距离*/
			var leftL = destinationLeft - o.offsetLeft;
			var topL = destinationTop-o.offsetTop;
			/*位移的步长*/
			var stepLeft = leftL/(time*1000/time_t);
			var stepTop = topL/(time*1000/time_t);
			// console.log(stepLeft, stepTop);
			if(stepTop>=0){
				stepTop = Math.ceil(stepTop);
			}
			else{
				stepTop = Math.floor(stepTop);
			}
			if(stepLeft>=0){
				stepLeft = Math.ceil(stepLeft);
			}
			else{
				stepLeft = Math.floor(stepLeft);
			}
			// console.log(stepLeft, stepTop);
			if(startTimer){
				/*清楚定时器的话下面还要启动，而且点击次数非常多的话会不会导致频繁的开销呢，
				如果多个属性同时变化，会不会在改变了一个的时候刚好被点击了，然后定时器清除了，下面的没改变而导致没有同步，利用return的话可以保证只有那个定时器在运行而不会出现线程中途停止导致数据不一致的问题*/
				// clearTimeout(startTimer);
				return;
			}
			var startTimer = setTimeout(function(){
				var timer = setInterval(function(){
					var x = 0;
					if(stepTop >= 0 && stepLeft >= 0){
						x = 1;
					}
					else if(stepTop >= 0 && stepLeft <= 0){
						x = 2;
					}
					else if(stepTop <= 0 && stepLeft >= 0){
						x = 3;
					}
					else if(stepTop <= 0 && stepLeft <= 0){
						x = 4;
					}
					switch(x){
						case 1:
							if(o.offsetLeft >= destinationLeft && o.offsetTop >= destinationTop){
								isArrival = true;
							}
							break;
						case 2:
							if(o.offsetLeft <= destinationLeft && o.offsetTop >= destinationTop){
								isArrival = true;
							}		
							break;
						case 3:
							if(o.offsetLeft >= destinationLeft && o.offsetTop <= destinationTop){
								isArrival = true;
							}
							break;
						case 4:
							if(o.offsetLeft <= destinationLeft && o.offsetTop <= destinationTop){
								isArrival = true;
							}
							break;
					}
					if(isArrival){
						o.style.left = destinationLeft + "px";
							o.style.top = destinationTop + "px";
							isArrival = false;
							clearInterval(timer);
							return;
					}
					o.style.left = o.offsetLeft + stepLeft +"px";
					o.style.top = o.offsetTop + stepTop +  "px";
					// console.log(o.offsetLeft, o.offsetTop);
				}, time_t);
			}, delay*1000);
		}/*参数，目标对象，时间，目的地，延迟*/
		function dHMove(o, time, destinationLeft, destinationTop, delay){
			var isArrival = false;
			var time_t = 30;
			time = parseFloat(time);
			destinationLeft = parseFloat(destinationLeft);
			destinationTop = parseFloat(destinationTop);
			delay = parseFloat(delay);
			/*左边和上边的的位移距离*/
			var leftL = destinationLeft - o.offsetLeft;
			var topL = destinationTop-o.offsetTop;
			/*位移的步长*/
			var stepLeft = leftL/(time*1000/time_t);
			var stepTop = topL/(time*1000/time_t);
			// console.log(stepLeft, stepTop);
			if(stepTop>=0){
				stepTop = Math.ceil(stepTop);
			}
			else{
				stepTop = Math.floor(stepTop);
			}
			if(stepLeft>=0){
				stepLeft = Math.ceil(stepLeft);
			}
			else{
				stepLeft = Math.floor(stepLeft);
			}
			// console.log(stepLeft, stepTop);
			if(startTimer){
				/*清楚定时器的话下面还要启动，而且点击次数非常多的话会不会导致频繁的开销呢，
				如果多个属性同时变化，会不会在改变了一个的时候刚好被点击了，然后定时器清除了，下面的没改变而导致没有同步，利用return的话可以保证只有那个定时器在运行而不会出现线程中途停止导致数据不一致的问题*/
				// clearTimeout(startTimer);
				return;
			}
			var startTimer = setTimeout(function(){
				var timer = setInterval(function(){
					var x = 0;
					if(stepTop >= 0 && stepLeft >= 0){
						x = 1;
					}
					else if(stepTop >= 0 && stepLeft <= 0){
						x = 2;
					}
					else if(stepTop <= 0 && stepLeft >= 0){
						x = 3;
					}
					else if(stepTop <= 0 && stepLeft <= 0){
						x = 4;
					}
					switch(x){
						case 1:
							if(o.offsetLeft >= destinationLeft && o.offsetTop >= destinationTop){
								isArrival = true;
							}
							break;
						case 2:
							if(o.offsetLeft <= destinationLeft && o.offsetTop >= destinationTop){
								isArrival = true;
							}		
							break;
						case 3:
							if(o.offsetLeft >= destinationLeft && o.offsetTop <= destinationTop){
								isArrival = true;
							}
							break;
						case 4:
							if(o.offsetLeft <= destinationLeft && o.offsetTop <= destinationTop){
								isArrival = true;
							}
							break;
					}
					if(isArrival){
						o.style.left = destinationLeft + "px";
							o.style.top = destinationTop + "px";
							isArrival = false;
							clearInterval(timer);
							return;
					}
					o.style.left = o.offsetLeft + stepLeft +"px";
					o.style.top = o.offsetTop + stepTop +  "px";
					// console.log(o.offsetLeft, o.offsetTop);
				}, time_t);
			}, delay*1000);
		}