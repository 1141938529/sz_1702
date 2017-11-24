

//document获取 节点对象的几种方法的封装
function $(NameStr){
	if(NameStr[0]=="."){ //class
		return document.getElementsByClassName(NameStr.substring(1));
	}else if(NameStr[0] == "#"){ // id
		return document.getElementById(NameStr.substring(1));
	}else{
		if(NameStr.substring(0,5)=="name="){
			return document.getElementsByName(NameStr.substring(5));
		}else{
			return document.getElementsByTagName(NameStr);
		}
	}
}


// 获取随机颜色
function RandomColor(){
	
	var color = "rgba("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)
	+","+Math.round(Math.random()*255)+",1"+")";
	return color;
}


// 兼容IE8 以下版本的  通过 ClassName的获取 元素节点对象 的函数
function elementByClassName(parent,ClassName){
	var nodes = parent.getElementsByTagName("*");
	var result =[];
	for (var i = 0; i < nodes.length; i++) {
		if(nodes[i].className == ClassName){
			result.push(nodes[i]);
		}	
	}
	return result;
}


// 兼容谷歌  ff ie 浏览器 获取元素 style 的函数

function getStyle(elem,attr){
	return elem.currentStyle ?elem.currentStyle[attr]:getComputedStyle(elem)[attr];
	
}






