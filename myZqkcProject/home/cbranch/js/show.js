	//显示和隐藏div
	function show(idShow,idNo){
		document.getElementById(idShow).style.display="inline";
		document.getElementById(idNo).style.display="none";
	}
	
/*
 * 遮盖层功能代码：
 */

//获得遮盖层宽度和高度
function getBodySize(){
	var bodySize=new Array();
	with(document.documentElement){
		bodySize[0]=(scrollWidth>clientWidth)?scrollWidth:clientWidth;
		bodySize[1]=(scrollHeight>clientHeight)?scrollHeight:clientHeight;
	}
	return bodySize;
}
//获取element的id对象
function M(id){
	return document.getElementById(id);
}
//获取div元素
function MC(){
	return document.createElement('div');
}

// 判断是否为IE浏览器
// 判断浏览器的原理：是否存在某个对象 或 是否识别某个对象
function isIE(){
	return (document.all && window.ActiveXObject && (!window.opera))? true : false;
}


//创建遮盖div层
function popCoverDiv(){
	
	// 判断遮罩层是否存在
	if(M('id_cover')){
		M('id_cover').style.display='block';	// 如果遮罩层存在,则显示遮罩层
	}else{
		
		// 前半部分是JavaScript操作HTML部分
		var cover_div = MC();						// 如果遮罩层不存在,则创建遮罩层
		document.body.appendChild(cover_div);
		cover_div.id = 'id_cover';

		// 后半部分是JavaScript操作CSS部分
		
		with(cover_div.style){
			position='absolute';
			backgroundColor='#000';
			top='0px';
			left='0px';
			var bodySize=getBodySize();
			width=bodySize[0]+'px';
			height=bodySize[1]+'px';
			zIndex=0;	// 最小值，保证遮罩层在表单的下方
			if(isIE()){
				filter="Alpha(Opacity=50)";	// 设置DIV的透明度，值越大，颜色越深
			}else{
				opacity=0.9;
			}
		}
	}
}

//显示div
function showDiv(id){
	var div_id = M(id);
	div_id.style.display = 'block';
}

//打开遮盖层
function openDiv(id){
	showDiv(id);	// 显示表单层
	popCoverDiv();	// 显示遮罩层
	void(0);
}

//关闭遮盖层
function closeDiv(id){
	M(id).style.display='none';			// 关闭表单层
	M('id_cover').style.display='none'; // 关闭遮罩层
}


