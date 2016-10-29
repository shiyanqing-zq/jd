	//选项卡之间的切换效果
	// var tab=$(".tab");
	// var tab_item=$(".tab-item");
	// var p_fz=$(".p_fz");
	// tab_item[0].classList.add("tab-select");
	// p_fz[0].style.display="block";
	// for(var i=0; i<tab_item.length; i++){
	// 	tab_item[i].index=i;
	// 	tab_item[i].onmouseover=function(){
	// 		for(var j=0; j<tab_item.length; j++){
	// 			p_fz[j].style.display="none";
	// 			tab_item[j].classList.remove("tab-select");
	// 		}
	// 		tab_item[this.index].classList.add("tab-select");
	// 		p_fz[this.index].style.display="block";
	// 	}
	// }

	//选项卡之间的切换效果封装
	function p_qh(obj){
		var tab=obj;
		var tab_item=$(".tab-item",obj);
		var p_fz=$(".tab-list",obj);
		// console.log(tab_item,p_fz);
		tab_item[0].classList.add("tab-select");
		p_fz[0].style.display="block";
			for(var i=0; i<tab_item.length; i++){
				tab_item[i].index=i;
				tab_item[i].onmouseover=function(){
					for(var j=0; j<tab_item.length; j++){
						p_fz[j].style.display="none";
						tab_item[j].classList.remove("tab-select");
					}
					tab_item[this.index].classList.add("tab-select");
					p_fz[this.index].style.display="block";
				}
			}
		}
	//1F参数传递
	var tab=$(".floor");//获取最外层的大盒子，让它找下面对应的元素
	// console.log(tab);
	// var p_fz=$(".p_fz");
	// console.log(tab_item,p_fz);
	// p_qh(tab_item,p_fz);
	for(var i=0; i<tab.length; i++){
		p_qh(tab[i]);
	}

	
	//2F参数传递
	// var tab_item2=$(".tab-item");
	// var p_fz2=$(".ghy1");
	// console.log(tab_item,p_fz2);
	// p_qh(tab_item2,p_fz2);
	// qh=$(".tab-item");
	// console.log(qh);
	// for(var i=0; i<qh.length; i++){
	// 	var p_fz=$(".p_fz",qh[i]);
	// 	console.log(p_fz);
	// 	p_qh(qh[i],p_fz);
	// }
	//3F参数传递
	//4F参数传递
	//5F参数传递
	//6F参数传递
	//7F参数传递
	//8F参数传递
	//9F参数传递
	//10F参数传递
	//11F参数传递