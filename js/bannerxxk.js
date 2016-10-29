	// 顶部选项卡
	var visible=$(".left-visible");
	var a_visible=$(".visible")[0];
	var v_hidden=$(".hidden");
	var ci_right=$(".ci_right");
		// visible.onmouseover=function(){
		// 	visible.style.background="#fff";
		// 	v_hidden.style.display="block";
		// }
		// visible.onmouseout=function(){
		// 	visible.style.background="";
		// 	v_hidden.style.display="none";
		// }
		for(var i=0; i<visible.length; i++){
			visible[i].index=i;
			hover(visible[i],function(){
				// visible[this.index].style.border="1px solid #ddd";
				visible[this.index].style.background="#fff";
				v_hidden[this.index].style.display="block";
			},function(){
				// visible[this.index].style.border="";
				visible[this.index].style.background="";
				v_hidden[this.index].style.display="none";
			});
		}
	var fix=$(".fix");
	var tab_inner=$(".tab-inner");
	var tab_ico=$(".tab-ico");
	var tab_tip=$(".tab-tip")[0];
	// var em=$("em")[0];
	// console.log(fix,tab_inner,em);
	// fix.onmouseover=function(){
	// 	// tab_inner.style.display="block";
	// 	animate(tab_inner,{left:-60},111,function(){
	// 		tab_ico.style.backgroundColor="#c81623";
	// 		tab_inner.style.background="#c81623";
	// 		tab_tip.style.display="none";
	// 	});
	// }
	// fix.onmouseout=function(){
	// 	// var that=this.index;
	// 	// console.log(that);
	// 	// tab_inner.style.display="none";
	// 	animate(tab_inner,{left:0},111,function(){
	// 		tab_ico.style.backgroundColor="#7a6e6e";
	// 		tab_tip.style.display="block";
	// 	});
	// }

	// hover(fix,function(){
	// 	animate(tab_inner,{left:-60},111,function(){
	// 		tab_ico.style.backgroundColor="#c81623";
	// 		tab_inner.style.background="#c81623";
	// 		tab_tip.style.display="none";
	// 	});
	// },function(){
	// 	animate(tab_inner,{left:0},111,function(){
	// 		tab_ico.style.backgroundColor="#7a6e6e";
	// 		tab_tip.style.display="block";
	// 	});
	// });
	for(var i=0; i<fix.length; i++){
		fix[i].index=i;
		hover(fix[i],function(){
			animate(tab_inner[this.index],{left:-60},111,function(){
			});
			tab_ico[this.index].style.backgroundColor="#c81623";
			tab_inner[this.index].style.background="#c81623";
			// tab_tip[this.index].style.display="none";
		
			},function(){
				animate(tab_inner[this.index],{left:0},111,function(){	
			});
				tab_ico[this.index].style.backgroundColor="#7a6e6e";
				// tab_tip[this.index].style.display="block";
		});
	}
	
	// 顶部banner
	var banner=$("#banner");
	var topbanner=$("#top-banner");
	var top_banner=$(".top-banner")[0];
	var topbanner_close=$(".topbanner-close")[0];
	topbanner_close.onclick=function(){
		topbanner.style.display="none";
		banner.style.top="175px";
	}
	// 左侧导航
	var dd_item=$(".item");
	var fore_list=$(".fore_list");

	for(var i=0; i<dd_item.length; i++){
		dd_item[i].index=i;
		// dd_item[i].onmouseover=function(){
		// 	fore_list[this.index].style.display="block";
		// }
		// dd_item[i].onmouseout=function(){
		// 	fore_list[this.index].style.display="none";
		// }
		hover(dd_item[i],function(){
			fore_list[this.index].style.display="block";
		},function(){
			fore_list[this.index].style.display="none";
		});
	}

    var cntop=$(".cntop")[0];
    var cnxh=$(".cnxh")[0];
    // var cnbt=$("#cnbt");
    var onclick=$(".cnbt")[0];
    var like_inner=$(".like_inner");
    var cnbt_ow=parseInt(getStyle(like_inner[0],"width"));
    var cntop_ow=parseInt(getStyle(cntop,"width"));
    var now=0;
    var next=0;
    like_inner[0].style.display="block";
    hover(cnxh,function(){
    	cntop.style.left=0;
    	animate(cntop,{left:cnbt_ow-cntop_ow},333);
    },function(){
    	cntop.style.left=cnbt_ow-cntop_ow+"px";
    });
	onclick.onclick=function(){
		next=now+1;
		if(next==like_inner.length){
			next=0;
		}
		for(var i=0; i<like_inner.length; i++){
			like_inner[i].style.display="none";
		}
		like_inner[next].style.display="block";
		now=next;
	}
    