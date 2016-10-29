$(function(){
	var banner=$("#banner");
	//console.log(banner);
	var banner=$(".banner");
	
	var middle=$(".p_ban")[0];
	// console.log(middle);
	var banimgs=$(".p_img",$(".p_ban")[0]);
	//console.log(banimgs);
	var circle=$(".x_circle");
	//console.log(circle);
	var btnL=$(".banner-left")[0];
	var btnR=$(".banner-right")[0];
	//console.log(btnL,btnR);
	/*页面初始化*/ 
	banimgs[0].style.zIndex=10;
	circle[0].classList.add("hot");
	var now=0;
	var flag=true;
	/*now保存当前窗口中显示图片的下标*/ 
	/*用层级来写：自动轮播功*/ 
	var t=setInterval(move,2000);
	function move(){
		if(flag==false){
			return;
		}
		flag=false;
		now++;
		if(now==banimgs.length){	//当大于图片或等于图片的长度时，让它从第一张开始重新开始播放，这里给now重新负值为0;
			now=0;
		}
		/*先让所有图片的层级降低，当前图片（now）这张图片的层级调高*/ 
		for(var i=0; i<banimgs.length; i++){
			banimgs[i].style.zIndex=5;
			circle[i].classList.remove("hot");
			flag=true;
		}
		banimgs[now].style.zIndex=10;
		circle[now].classList.add("hot");
		
	}
		/*当鼠标移入时让它停止，离开时播放。这时我们要获取图片元素或者是父元素都可以的。*/
		 /*移入离开停止与播放，要添加移入移出事件onmouseover, onmouseout事件*/
	middle.onmouseover=function(){
		clearInterval(t);  //鼠标移入时清除进程，但是不能清除它的变量
		btnL.style.display="block";
		btnR.style.display="block";
	} 
	middle.onmouseout=function(){
		t=setInterval(move,2000);  //鼠标移出，接着停止的时刻开始播放
		btnL.style.display="none";
		btnR.style.display="none";
	}
	/*选项卡*/
	/*让每一张图片都能找到它的下标，与之对应*/
	/*
	1.先循环找到每一个元素;
	2.找到元素之后，将其先保存下来index;
	3.当用户点击操作时，点击的哪个，this就会指向哪个进一步找到所对应的图片;
	4.添加点击事件：当用户点击时，所有图片层级降低，点击的图片层级调高，并且先项卡找与之对应的图片清除hot;再给点击的选项添加hot;
	5.负值：now=this.index;
	*/ 
	for(var i=0; i<circle.length; i++){
		circle[i].index=i;
		circle[i].onclick=function(){
			if(flag==false){
				return;
			}
			flag=false;
			for(var i=0; i<banimgs.length; i++){
				banimgs[i].style.zIndex=5;
				circle[i].classList.remove("hot");
				flag=true;
			}
			banimgs[this.index].style.zIndex=10;
			circle[this.index].classList.add("hot");
			now=this.index;

		}
	} 
	/*同样：btn左右按钮，当用户点击左面按钮时，出现上一张图片，当用户点击右面按钮时，出现下一张图片，给按钮上面添加鼠标点击事件*/
	btnR.onclick=function(){
		move();
	} 
	btnL.onclick=function(){
		moveL();
	}
	function moveL(){
		if(flag==false){
			return;
		}
		flag=false;
		now--;
		if(now<0){		//	当当前图片小于0时，需要给now重新负值：所有图片减1;
			now=banimgs.length-1;
		}
		for(var i=0; i<banimgs.length; i++){
			banimgs[i].style.zIndex=5;
			circle[i].classList.remove("hot");
			flag=true;
		}
		banimgs[now].style.zIndex=10;
		circle[now].classList.add("hot");
		
	}
})