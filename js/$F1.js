
	// var f_ban=$(".fzban")[0];
	// var f_imgs=$(".f_ban");
	// //console.log(imgs);
	// var f_circle=$(".xyq");
	// var f_left=$(".fz-left")[0];
	// var f_right=$(".fz-right")[0];
	// // console.log(f_left,f_right);
	// var f_ow=parseInt(getStyle(f_imgs[0],"width"));
	// var n=0;
	// var next=0;
	// var flag=true;			//开关作用：解决用户快速点击出现的一些空白区域，当点击运行完一张动画，才让出现下一出现。
	// var t=setInterval(move,2000);
	// function move(){
	// 	if(flag==false){
	// 		return;
	// 	}
	// 	flag=false;
	// 	next=n+1;
	// 	if(next>=f_imgs.length){
	// 		next=0;
	// 	}
	// 	f_imgs[next].style.left=f_ow+"px";
	// 	animate(f_imgs[n],{left:-f_ow},600,Tween.Quad.easeInOut);
	// 	animate(f_imgs[next],{left:0},600,Tween.Quad.easeInOut,function(){
	// 		flag=true;
	// 	});
	// 	for(var i=0; i<f_circle.length; i++){
	// 		f_circle[i].style.background="#3e3e3e";
	// 	}
	// 	f_circle[next].style.background="#b61b1f";
	// 	n=next;
	// }
	// f_ban.onmouseover=function(){
	// 	f_right.style.display="block";
	// 	f_left.style.display="block";
	// 	clearInterval(t);
	// }
	// f_ban.onmouseout=function(){
	// 	f_right.style.display="none";
	// 	f_left.style.display="none";
	// 	t=setInterval(move,2000);
	// }
	// f_right.onclick=function(){
	// 	move();
	// }
	// f_left.onclick=function(){
	// 	moveL();
	// }
	// function moveL(){
	// 	if(flag==false){
	// 		return;
	// 	}
	// 	flag=false;
	// 	next=n-1;
	// 	if(next<0){
	// 		next=f_imgs.length-1;
	// 	}
	// 	f_imgs[next].style.left=-f_ow+"px";
	// 	animate(f_imgs[n],{left:f_ow},600,Tween.Quad.easeInOut);
	// 	animate(f_imgs[next],{left:0},600,Tween.Quad.easeInOut,function(){
	// 		flag=true;
	// 	});
	// 	for(var i=0; i<f_circle.length; i++){
	// 		f_circle[i].style.background="#3e3e3e";
	// 	}
	// 	f_circle[next].style.background="#b61b1f";
	// 	n=next;
	// }

	// // 选项卡
	// for(var i=0; i<f_circle.length; i++){
	// 	f_circle[i].index=i;
	// 	f_circle[i].onclick=function(){
	// 		if(this.index>n){
	// 			if(flag==false){
	// 				return;
	// 			}
	// 			flag=false;
	// 			f_imgs[this.index].style.left=f_ow+"px";
	// 			animate(f_imgs[n],{left:-f_ow},600,Tween.Quad.easeInOut);
	// 			animate(f_imgs[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
	// 				flag=true;
	// 			});
	// 		}else if(this.index<n){
	// 			if(flag==false){
	// 				return;
	// 			}
	// 			flag=false;
	// 			f_imgs[this.index].style.left=-f_ow+"px";
	// 			animate(f_imgs[n],{left:f_ow},600,Tween.Quad.easeInOut);
	// 			animate(f_imgs[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
	// 				flag=true;
	// 			});
	// 		}else{
	// 			return;
	// 		}
	// 		f_circle[n].style.background="#3e3e3e";
	// 		f_circle[this.index].style.background="#b61b1f";
	// 		n=this.index;
	// 		next=this.index;
	// 	}
	// }

	//封装楼层轮播函数
	function F_lunbo(obj,f_imgs,f_circle,f_left,f_right){
		var f_ban=obj;
		var f_imgs=f_imgs;
		//console.log(imgs);
		var f_circle=f_circle;
		var f_left=f_left;
		var f_right=f_right;
		// console.log(f_ban,f_imgs,f_circle,f_left,f_right);
		var f_ow=parseInt(getStyle(f_imgs[0],"width"));
		var n=0;
		var next=0;
		var flag=true;			//开关作用：解决用户快速点击出现的一些空白区域，当点击运行完一张动画，才让出现下一出现。
		var f_time=setInterval(f_move,2000);
		function f_move(){
			if(flag==false){
				return;
			}
			flag=false;
			next=n+1;
			if(next>=f_imgs.length){
				next=0;
			}
			f_imgs[next].style.left=f_ow+"px";
			animate(f_imgs[n],{left:-f_ow},600,Tween.Quad.easeInOut);
			animate(f_imgs[next],{left:0},600,Tween.Quad.easeInOut,function(){
				flag=true;
			});
			for(var i=0; i<f_circle.length; i++){
				f_circle[i].style.background="#3e3e3e";
			}
			f_circle[next].style.background="#b61b1f";
			n=next;
		}
		f_ban.onmouseover=function(){
			f_right.style.display="block";
			f_left.style.display="block";
			clearInterval(f_time);
		}
		f_ban.onmouseout=function(){
			f_right.style.display="none";
			f_left.style.display="none";
			f_time=setInterval(f_move,2000);
		}
		f_right.onclick=function(){
			f_move();
		}
		f_left.onclick=function(){
			f_moveL();
		}
		function f_moveL(){
			if(flag==false){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
				next=f_imgs.length-1;
			}
			f_imgs[next].style.left=-f_ow+"px";
			animate(f_imgs[n],{left:f_ow},600,Tween.Quad.easeInOut);
			animate(f_imgs[next],{left:0},600,Tween.Quad.easeInOut,function(){
				flag=true;
			});
			for(var i=0; i<f_circle.length; i++){
				f_circle[i].style.background="#3e3e3e";
			}
			f_circle[next].style.background="#b61b1f";
			n=next;
		}

		// 选项卡
		for(var i=0; i<f_circle.length; i++){
			f_circle[i].index=i;
			f_circle[i].onclick=function(){
				if(this.index>n){
					if(flag==false){
						return;
					}
					flag=false;
					f_imgs[this.index].style.left=f_ow+"px";
					animate(f_imgs[n],{left:-f_ow},600,Tween.Quad.easeInOut);
					animate(f_imgs[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
						flag=true;
					});
				}else if(this.index<n){
					if(flag==false){
						return;
					}
					flag=false;
					f_imgs[this.index].style.left=-f_ow+"px";
					animate(f_imgs[n],{left:f_ow},600,Tween.Quad.easeInOut);
					animate(f_imgs[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
						flag=true;
					});
				}else{
					return;
				}
				f_circle[n].style.background="#3e3e3e";
				f_circle[this.index].style.background="#b61b1f";
				n=this.index;
				next=this.index;
			}
		}
	}
	//F1楼轮播 ~ F12楼层整合之后的函数 
	F1=$(".fzban");
	for(var i=0; i<F1.length; i++){
		var f_imgs=$(".f_ban",F1[i]);
		var f_circle=$(".xyq",F1[i]);
		var f_left=$(".fz-left",F1[i])[0];
		var f_right=$(".fz-right",F1[i])[0];
		F_lunbo(F1[i],f_imgs,f_circle,f_left,f_right);
	}

	//节点轮播
	// function f_nodelunbo(obj,f_left,f_right,f_box_img,f_img){
	// 	var f_lunbo=obj;
	// 	//console.log(lunbo);
	// 	var f_left=f_left;
	// 	var f_right=f_right;
	// 	//console.log(left,right);
	// 	var f_box_img=f_box_img;
	// 	var f_img=f_img;
	// 	//console.log(img);
	// 	var f_ow=parseInt(getStyle(f_img[0],"width"));
	// 	//console.log(ow);
	// 	var t=setInterval(move,2500);
	// 	var n=1;
	// 	var flag=true;
	// 	function move(){
	// 		animate(f_box_img,{left:-f_ow*n},600,function(){
	// 			for(var i=1; i<=n; i++){
	// 				var first=getFirst(f_box_img);
	// 				//console.log(first);
	// 				f_box_img.appendChild(first);
	// 			}
	// 			f_box_img.style.left="0px";
	// 			flag=true;
	// 		});
	// 	}
	// 	f_lunbo.onmouseover=function(){
	// 		f_left.style.display="block";
	// 		f_right.style.display="block";
	// 		clearInterval(t);
	// 	}
	// 	f_lunbo.onmouseout=function(){
	// 		f_left.style.display="none";
	// 		f_right.style.display="none";
	// 		t=setInterval(move,2500);
	// 	}
	// 	f_right.onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			move();
	// 		}
	// 	}
	// 	f_left.onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			moveL();
	// 		}
	// 	}
	// 	function moveL(){
	// 		// animate(box_img,{left:ow},600);
	// 		for(var i=1; i<=1; i++){
	// 			var first=getFirst(f_box_img);
	// 			var last=getLast(f_box_img);
	// 			f_box_img.insertBefore(last,first);
	// 		}
	// 		f_box_img.style.left=-f_ow*n+"px";
	// 		animate(f_box_img,{left:0},600);
	// 		flag=true;
	// 	}
	// 	//选项卡
	// 	for(var i=0; i<f_circle.length; i++){
	// 	f_circle[i].index=i;
	// 	f_circle[i].onclick=function(){
	// 		if(this.index>n){
	// 			if(flag==false){
	// 				return;
	// 			}
	// 			flag=false;
	// 			f_imgs[this.index].style.left=f_ow+"px";
	// 			animate(f_imgs[n],{left:-f_ow},600,Tween.Quad.easeInOut);
	// 			animate(f_imgs[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
	// 				flag=true;
	// 			});
	// 		}else if(this.index<n){
	// 			if(flag==false){
	// 				return;
	// 			}
	// 			flag=false;
	// 			f_imgs[this.index].style.left=-ow+"px";
	// 			animate(f_imgs[n],{left:ow},600,Tween.Quad.easeInOut);
	// 			animate(f_imgs[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
	// 				flag=true;
	// 			});
	// 		}else{
	// 			return;
	// 		}
	// 		f_circle[n].style.background="#3e3e3e";
	// 		f_circle[this.index].style.background="#b61b1f";
	// 		n=this.index;
	// 		next=this.index;
	// 	}
	// }
	// }
	// f_lunbo=$(".fzban")[0];
	// // console.log(f_lunbo);
	// for(var i=0; i<p_lunbo.length; i++){
	// 	var f_left=$(".fz-left",f_lunbo[i])[0];
	// 	var f_right=$(".fz-right",f_lunbo[i])[0];
	// 	var f_box_img=$(".fz_ban",f_lunbo[i])[0];
	// 	// console.log(box_img);
	// 	var f_img=$(".f_ban",f_lunbo[i]);
	// 	var f_circle=$(".xyq",f_lunbo[i]);
	// 	f_nodelunbo(f_lunbo[i],f_left,f_right,f_box_img,f_img);
	//  }	
	//F2楼轮播
	// F2=$(".g_ban")[0];
	// var gh_ban=$(".gh_ban",F2);
	// var g_circle=$(".g_circle",F2);
	// var g_left=$(".gh-left",F2)[0];
	// var g_right=$(".gh-right",F2)[0];
	// F_lunbo(F2,gh_ban,g_circle,g_left,g_right);
	//F3楼轮播
	// F3=$(".tx-lunbo")[0];
	// console.log(F3);
	// var tx_img=$(".tx_imgs",F3);
	// var tx_circle=$(".p_circle1",F3);
	// var tx_left=$(".btn-left",F3)[0];
	// var tx_right=$(".btn-right",F3)[0];
	// F_lunbo(F3,tx_img,tx_circle,tx_left,tx_right);
	//F4楼轮播
	//F5楼轮播
	//F6楼轮播
	//F7楼轮播
	//F8楼轮播
	//F9楼轮播
	//F10楼轮播
	//F11楼轮播
	//F12楼轮播