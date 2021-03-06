<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"  %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html>  
<html lang="en"> 
<head>
<title>中企科创官网管理系统</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap.min.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap-responsive.min.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/jquery.gritter.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/uniform.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/select2.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-style.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-media.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/style.css" />
<link href="<%=basePath%>/publics/font-awesome/css/font-awesome.css" rel="stylesheet" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
</head>
<body>
<div id="header">
  <h1><a href="dashboard.html">Matrix Admin</a></h1>
</div>
<div id="user-nav" class="navbar navbar-inverse">
  <ul class="nav">
    <li  class="dropdown" id="profile-messages" ><a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" class="dropdown-toggle"><i class="icon icon-user"></i>  <span class="text">${user.account}</span><b class="caret"></b></a>
      <ul class="dropdown-menu">
        <li><a href="#"><i class="icon-user"></i> 我的资料</a></li>
        <li class="divider"></li>
        <li><a href="#"><i class="icon-check"></i> 我的工作</a></li>
        <li class="divider"></li>
        <li><a href="login.html"><i class="icon-key"></i> 注销</a></li>
      </ul>
    </li>
    <li class="dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle"><i class="icon icon-envelope"></i> <span class="text">信息</span> <span class="label label-important">5</span> <b class="caret"></b></a>
      <ul class="dropdown-menu">
        <li><a class="sAdd" title="" href="#"><i class="icon-plus"></i> 新的消息</a></li>
        <li class="divider"></li>
        <li><a class="sInbox" title="" href="#"><i class="icon-envelope"></i> 收件箱</a></li>
        <li class="divider"></li> 
        <li><a class="sOutbox" title="" href="#"><i class="icon-arrow-up"></i>  发件箱</a></li>
        <li class="divider"></li>
        <li><a class="sTrash" title="" href="#"><i class="icon-trash"></i> 垃圾箱</a></li>
      </ul>
    </li>
    <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">设置</span></a></li>
    <li class=""><a title="" href="login.html"><i class="icon icon-share-alt"></i> <span class="text">退出登录</span></a></li>
  </ul>
</div>
<div id="search">
  <input type="text" placeholder="Search here..."/>
  <button type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
</div>
<!--左边菜单栏 start-->
<div id="sidebar"><a href="#" class="visible-phone"><i class="icon icon-home"></i> Dashboard</a>
  <ul>
    <li><a href="<%=basePath%>user/index"><i class="icon icon-home"></i>首页</a> </li>
    <li class="submenu "> <a href="<%=basePath%>navigation/toNavigation"><i class="icon icon-signal"></i> <span>导航栏管理</span><span class="label label-important">2</span></a> 
      <ul>


        <li> <a href="<%=basePath%>navigation/addNavigation">添加导航</a></li>
        <li><a href="<%=basePath%>navigation/toNavigation">导航列表</a></li>
      </ul>
    </li>
    <li class="submenu"> <a href="<%=basePath%>banner/toBanner"><i class="icon icon-inbox"></i> <span>轮播管理</span><span class="label label-important">2</span></a> 
      <ul>
        <li><a href="<%=basePath%>banner/addBanner">添加轮播</a></li>
        <li>
        	<a href="<%=basePath%>banner/toBanner">轮播列表</a></li>
      </ul>
    </li>
    <li class="submenu "><a href="#"><i class="icon icon-th"></i> <span>平台展示</span><span class="label label-important">2</span></a>
      <ul>
         <li><a href="<%=basePath%>business/save">添加平台</a></li>
         <li><a href="<%=basePath%>business/list">平台列表</a></li>
      </ul>
    </li>
  <li class="submenu"> <a href="#"><i class="icon icon-th-list"></i> <span>项目案例</span> <span class="label label-important">2</span></a>
        <ul>
       <li><a href="<%=basePath%>project/addProjectTry">添加项目案例</a></li>
         <li><a href="<%=basePath%>project/findProjectAll">项目案例列表</a></li>
      </ul>
    </li>
    
    <li class="submenu"><a href="#"><i class="icon icon-tint"></i> <span>广告管理</span><span class="label label-important">2</span></a>
      <ul>
        <li><a href="#">添加广告</a></li>
        <li><a href="#">广告列表</a></li>
      </ul>
    </li>
    <li class="submenu active"><a href="#"><i class="icon icon-pencil"></i> <span>招聘管理</span><span class="label label-important">2</span></a>
      <ul>
        <li><a href="<%=basePath%>recruit/recruitAdd">添加招聘</a></li>
       <li><a href="<%=basePath %>recruit/findAllRecruit">招聘列表</a></li>
      </ul>
    </li>
    <li class="submenu"> <a href="#"><i class="icon icon-file"></i> <span>业务客户</span> <span class="label label-important">2</span></a>
      <ul>
        <li><a href="<%=basePath%>customer/save">添加客户</a></li>
        <li><a href="<%=basePath%>customer/list">客户列表</a></li>
      </ul>
    </li>
    <li class="submenu"> <a href="#"><i class="icon icon-coffee"></i> <span>服务管理</span> <span class="label label-important">2</span></a>
      <ul>
         <li><a href="<%=basePath%>services/save">添加服务</a></li>
        <li><a href="<%=basePath%>services/list">服务列表</a></li>
      </ul>
    </li>
  </ul>
</div>
<!--左边菜单栏 end-->

<div id="content">
  <div id="content-header">
    <div id="breadcrumb"> <a href="<%=basePath%>user/index" class="tip-bottom" data-original-title="前往首页">
    	<i class="icon-home"></i> 首页</a> <a href="platformlist.html">招聘管理</a> 
    	<a href="#" class="current">招募信息表</a> </div>
   
  </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
    <div class="widget-box">
      <div class="widget-title">        
       	 <h5>招聘信息表 </h5>           
    			<button  class="btn btn-danger" style="margin-top: 3px;" id="deleteAll">批量删除</button>	
    			<a  href="<%=basePath %>recruit/recruitAdd" class="btn btn-success" style="margin-top: 3px;">添加招聘信息</a>
      </div>
      <div class="widget-content nopadding">
      	
        <table class="table table-bordered data-table table-list">
          <thead>
            <tr>
            	<th><input type="checkbox" id="title-checkbox" name="title-checkbox" /></th>
              <th>招聘岗位</th>
              <th>招聘人数</th>
              <th>招聘标题</th>
              <th>招聘要求</th>
              <th>职责标题</th>
              <th>职责要求</th>
              <th>相关信息</th>
              <th>权重</th>
              <th class="th-width">操作</th>
            </tr>
          </thead>
          <tbody>
             <c:forEach var="recruit" items="${list}" varStatus="statrus"> 
              <tr class="gradeX">
              <td><input type="checkbox" name="subChk" value="${recruit.id}" /></td>
               <td><c:out value="${recruit.job }"></c:out></td>
               <td><c:out value="${recruit.sum } "></c:out></td>
               <td><c:out value="${recruit.title1 }"></c:out></td>
               <td><c:out value="${recruit.requirement }"></c:out></td>
               <td><c:out value="${recruit.title2 } "></c:out></td>
               <td><c:out value="${recruit.qualification }"></c:out></td>
              <td>服务人民</td>
              <td>1</td>
             <td><a href="<%=basePath %>recruit/deleteRecruit?id=${recruit.id}" class="btn btn-danger" id="btn-del">删除</a>&nbsp;&nbsp;
                 <a href="<%=basePath %>recruit/findByIdRecruit?id=${recruit.id}" class="btn btn-success">修改</a></td>             
           
            </tr> 
            </c:forEach>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  </div>
</div>
<!--Footer-part-->
<div class="row-fluid">
  <div id="footer" class="span12"> 2016 &copy; 中企科创计算机技术服务有限公司 <a href="http://www.szzqkc.com">cbranch</a>
  </div>
</div>
<!--end-Footer-part--> 
<script src="<%=basePath%>/publics/js/jquery.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.ui.custom.js"></script> 
<script src="<%=basePath%>/publics/js/bootstrap.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.uniform.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.validate.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.wizard.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.wizard.js"></script>
<script src="<%=basePath%>/publics/js/jquery.dataTables.min.js"></script> 
<script src="<%=basePath%>/publics/js/select2.min.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.tables.js"></script>
<script src="<%=basePath%>/publics/js/jquery.gritter.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.peity.min.js"></script> 

<script type="text/javascript">

function del(){
	if(confirm("确认删除？")){
		alert("删除成功！");
	}
}

  // This function is called from the pop-up menus to transfer to
  // a different page. Ignore if the value returned is a null string:
  function goPage (newURL) {

      // if url is empty, skip the menu dividers and reset the menu selection to default
      if (newURL != "") {
      
          // if url is "-", it is this page -- reset the menu:
          if (newURL == "-" ) {
              resetMenu();            
          } 
          // else, send page to designated URL            
          else {  
            document.location.href = newURL;
          }
      }
  }

// resets the menu selection upon entry to this page:
function resetMenu() {
   document.gomenu.selector.selectedIndex = 2;
}
</script>
<script>
 $(window).bind('beforeunload',function(){
       $.ajax({
	         url:"<%=basePath%>user/goout",
	         type:"post",	         
	         success:function(data){
             	alert(data.msg);
             }
     		});
 });
  $(document).ready(function() {   
  $("#deleteAll").click(function() {   
          // 判断是否至少选择一项   
          var checkedNum = $("input[name='subChk']:checked").length;   
          if(checkedNum == 0) {   
              alert("请选择至少一项！");   
              return;   
          }   
             
          // 批量选择    
          if(confirm("确定要删除所选项目？")) {   
              var checkedList = new Array();   
              $("input[name='subChk']:checked").each(function() {   
                  checkedList.push($(this).val());   
              });   
     
              $.ajax({   
                  type: "POST",   
                  url: "deleteAllRecruit",   
                  data: {'delitems':checkedList.toString()}, 
                  success: function(result) {   
                      $("[name ='subChk']:checkbox").attr("checked", false); 
                      window.location.reload();   
                  }   
              });   
          }              
      });  
       });   
    
</script>
</body>
</html>
             