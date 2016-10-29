
	function nodelunbo(obj,left,right,box_img,img){
		var lunbo=obj;
		//console.log(lunbo);
		var left=left;
		var right=right;
		//console.log(left,right);
		var box_img=box_img;
		var img=img;
		//console.log(img);
		var ow=parseInt(getStyle(img[0],"width"));
		//console.log(ow);
		// var t=setInterval(move,2500);
		var n=1;
		var flag=true;
		function move(){
			animate(box_img,{left:-ow*n},600,function(){
				for(var i=1; i<=n; i++){
					var first=getFirst(box_img);
					//console.log(first);
					box_img.appendChild(first);
				}
				box_img.style.left="0px";
				flag=true;
			});
		}
		lunbo.onmouseover=function(){
			left.style.display="block";
			right.style.display="block";
			// clearInterval(t);
		}
		lunbo.onmouseout=function(){
			left.style.display="none";
			right.style.display="none";
			// t=setInterval(move,2500);
		}
		right.onclick=function(){
			if(flag){
				flag=false;
				move();
			}
		}
		left.onclick=function(){
			if(flag){
				flag=false;
				moveL();
			}
		}
		function moveL(){
			// animate(box_img,{left:ow},600);
			for(var i=1; i<=1; i++){
				var first=getFirst(box_img);
				var last=getLast(box_img);
				box_img.insertBefore(last,first);
			}
			box_img.style.left=-ow*n+"px";
			animate(box_img,{left:0},600);
			flag=true;
		}
	}
	p_lunbo=$(".gdc");
	// console.log(p_lunbo);
	for(var i=0; i<p_lunbo.length; i++){
		var left=$(".btn_left",p_lunbo[i])[0];
		var right=$(".btn_right",p_lunbo[i])[0];
		var box_img=$(".gd",p_lunbo[i])[0];
		// console.log(box_img);
		var img=$(".wf");
		nodelunbo(p_lunbo[i],left,right,box_img,img);
	 }	