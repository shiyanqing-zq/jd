	var floor=$(".floor");
	var nav=$(".float_nav")[0];
	var top_hidden=$(".top")[0];
	var top_bn=$("#banner");
	var top_bnH=top_bn.offsetTop;
	var floorlis=$(".float_lis");
	var title=$(".title");
	var louzi=$(".louzi");
	for (var i = 0; i < louzi.length; i++) {
		louzi[i].val=louzi[i].innerHTML;
	};
	//获取浏览器的高度
	Cheight=document.documentElement.clientHeight;
	// console.log(top_bnH,top_bn);
	var now;
	for(var i=0; i<floor.length; i++){
		floor[i].index=floor[i].offsetTop;
		// console.log(floor[i].index);
	}
	//添加滚轮事件，当鼠标滚动屏幕的时间，滚动到一定程序就会出现
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		//判断浏览器的类型或者FF
		var top=obj.scrollTop;
		// var body_oh=$("body")[0].offsetHeight;
		// console.log(top);
		if(top>top_bnH){
			nav.style.display="block";
		}else{
			nav.style.display="none";
		}
		if(top>=floor[0].index-666){
			nav.style.display="block";
			var Nheight=nav.offsetHeight;
			nav.style.top=(Cheight-Nheight)/2+"px";

		}
		if(top<floor[0].index-666){
			nav.style.display="none";

		}
		for(var i=0; i<floor.length; i++){
			if(top>=floor[i].index-111){
				for(var j=0; j<floorlis.length; j++){
					floorlis[j].style.background="";
					louzi[j].innerHTML=louzi[j].val;
					louzi[j].style.color="#625351";
				}
				floorlis[i].style.background="#c81623";
				louzi[i].innerHTML=title[i].innerHTML;
				louzi[i].style.color="#fff";
				// now=i;
			}else if(top<floor[i].index-300){
				
			}
		}
	}
		// 添加点击事件
		for(var i=0; i<floorlis.length; i++){
			floorlis[i].index=i;
			floorlis[i].onclick=function(){
				animate(document.body,{scrollTop:floor[this.index].index},111);
				animate(document.documentElement,{scrollTop:floor[this.index].index},111);
				now=this.index;
			}
			hover(louzi[i],function(){
				// title[i].style.display="block";
				this.style.background="#c81623";
				// this.innerHTML=title[i].innerHTML;
				// this.innerHTML="";
				// this.innerHTML=title[i].innerHTML;
				// title[i].classList.add("title");
			},function(){
				if(this.index==now){
					return;
				}
				this.style.background="";
				// this.innerHTML=title[i].innerHTML;
			});
		}
	