
$(document).ready(function(){
	
	// === jQuery Peity === //

	// === jQeury Gritter, a growl-like notifications === //
	
	
	$('.btn-remove').click(function(){
		$.gritter.add({
			title:	'删除失败',
			text:	'数据删除失败信息',
			sticky: true
		});	
	    $(".gritter-item").addClass('msg-success');
	});
	$("#listDelete").click(function(){
	 var checkNum = $("input[name='chbox']:checked").length;
	 if(checkNum==0){
	 	alert("请选择你要删除的内容！");
	 	return;
	 }
	 if(confirm("确定要删除吗？")){
	 	var checkedList = new Array();
	 	$("input[name='chbox']:checked").each(function(){
	 		checkedList.push($(this).val());
	 	});
	 	$.ajax({
	 		type:"post",
	 		url:"deleteList",
	 		data:{'delitems':checkedList.toString()},
	 		success:function(result){
	 		$("[name='chbox']:checkbox").attr("checked",false);
	 		window.location.reload();
	 		}
	 	}); 
	 }
	});
	
     
});
function fileChange(target,id){   
	var fileSize = 0;   
	var filetypes =[".jpg","jpeg",".png",".gif",".bmp"];   //可接受的文件类型
	var filepath = target.value;   
	var filemaxsize = 1;//5M   
	if(filepath){   
	var isnext = false;   
	var fileend = filepath.substring(filepath.indexOf("."));   
	if(filetypes && filetypes.length>0){   
	for(var i =0; i<filetypes.length;i++){   
	if(filetypes[i]==fileend){   
	isnext = true;   
	break; 		
	}   
	}   
	}   
	if(!isnext){   
	alert("不接受此文件类型！");   
	target.value ="";   
	return false;   
	}   
	}else{   
	return false;   
	}   
	}   

