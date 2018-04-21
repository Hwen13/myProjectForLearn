<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html>
<html>
<head>
	<title>中企科创官网管理系统</title>
	<meta charset="utf-8">
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
	<link rel="stylesheet" href="<%=basePath%>/publics/css/zqkc-admin.css" />
</head>
<style>
	.table-photo{
		width: 100%;
		height: 100%;
	}
	
</style>
<body>
<div id="header">
  <h1><a href="index.html">Matrix Admin</a></h1>
</div>
<div id="user-nav" class="navbar navbar-inverse">
  <ul class="nav">
    <li  class="dropdown" id="profile-messages" ><a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" class="dropdown-toggle"><i class="icon icon-user"></i>  <span class="text">${user.account}</span><b class="caret"></b></a>
      <ul class="dropdown-menu">
        <li><a href="#"><i class="icon-user"></i> 我的资料</a></li>
        <li class="divider"></li>
        <li><a href="#"><i class="icon-check"></i> 我的工作</a></li>
        <li class="divider"></li>
        <li><a href="<%=basePath%>user/logout"><i class="icon-key"></i> 注销</a></li>
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
    <li class=""><a title="" href="<%=basePath%>user/logout"><i class="icon icon-share-alt"></i> <span class="text">退出登录</span></a></li>
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
        <li> <a href="<%=basePath%>navigation/addNavigation">
        添加导航</a></li>
        <li><a href="<%=basePath%>navigation/toNavigation">导航列表</a></li>
      </ul>
    </li>
    <li class="submenu active"> <a href="<%=basePath%>banner/toBanner"><i class="icon icon-inbox"></i> <span>轮播管理</span><span class="label label-important">2</span></a> 
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
  <li class="submenu "> <a href="#"><i class="icon icon-th-list"></i> <span>项目案例</span> <span class="label label-important">3</span></a>
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
    <li class="submenu"><a href="#"><i class="icon icon-pencil"></i> <span>招聘管理</span><span class="label label-important">2</span></a>
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
    <!--树形指示栏 start-->
    <div id="breadcrumb">
    	<a href="<%=basePath%>user/index" class="tip-bottom" data-original-title="前往首页">
    		<i class="icon-home"></i> 首页</a> <a href="<%=basePath%>banner/toBanner" >轮播图管理</a> 
    		<a href="#" class="current">轮播图管理</a>
    </div>
     <!--树形指示栏 end-->
  </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span11">      	
      	<div class="widget-box">
          <div class="widget-title">           
           	 <h5>轮播列表 </h5>           
        		<a id="listDelete"  class="btn btn-danger">批量删除</a>	
        		<a href="<%=basePath%>banner/addBanner"><button class="btn btn-success">添加轮播</button></a>  
            </div>
            <form>
          <div class="widget-content nopadding">
            <table class="table table-bordered data-table table-list">
              <thead>
                <tr>
                  <th><input type="checkbox" id="title-checkbox" name="title-checkbox" /></th>
                  <th>标题</th>
                  <th>描述</th>
                  <th>图片</th>
                  <th>权重</th>
                  <th >操作</th>
                </tr>
              </thead>           
           		 <tbody>
              			<c:forEach items="${banner}" var="banner">
              				<tr>
              					<td><input type="checkbox"  name="chbox" value="${banner.id}"/></td>
              					<td>${banner.title}</td>
              					<td>${banner.description}</td>
              					<td><a href="<%=basePath%>banner/showBanner?pid=${banner.id}"/>点击查看图片</td>
              					<td>${banner.power}</td>
              					<td><a href="<%=basePath%>banner/doDeleteBanner?id=${banner.id}" 
				                     class="btn btn-danger btn-remove" id="btn-del">删除</a>&nbsp;&nbsp;
				                     <a href="<%=basePath %>banner/updateBanner?id=${banner.id}&title=${banner.title}&description=${banner.description}&power=${banner.power}"
				                      class="btn btn-success">修改</a>  </td>
              				</tr>		
              			</c:forEach>
              		</tbody>   
            </table>
          </div>
          </form>
       </div> 
      		
      		
      	
      		
      
      </div>
        
      </div>
    </div>
  </div>

<div class="row-fluid">
  <div id="footer" class="span12">2016 &copy; 中企科创计算机技术服务有限公司 <a href="http://www.szzqkc.com">cbranch</a>
  </div>
</div>
<script src="<%=basePath%>/publics/js/jquery.min.js"></script> 
	<script src="<%=basePath%>/publics/js/jquery.ui.custom.js"></script> 
	<script src="<%=basePath%>/publics/js/bootstrap.min.js"></script> 
	<script src="<%=basePath%>/publics/js/jquery.uniform.js"></script> 
	<script src="<%=basePath%>/publics/js/select2.min.js"></script> 
	<script src="<%=basePath%>/publics/js/jquery.dataTables.min.js"></script> 
	<script src="<%=basePath%>/publics/js/matrix.js"></script> 
	<script src="<%=basePath%>/publics/js/matrix.tables.js"></script>
	<script src="<%=basePath%>/publics/js/jquery.gritter.min.js"></script> 
	<script src="<%=basePath%>/publics/js/list-btn.js"></script>
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
 $(function(){
 		$('#multiDelete').click(function(){
 			var checkNum = $('input[name="checkbox"]:checked').length;
 		if(checkNum==0){
 			alert("请至少选择一项！");
 		}
 		if(confirm="确定要删除吗？"){
 			var nav = new Array();
			$('input[name="checkbox"]:checked').each(function(){
				nav.push($(this).val());												
			});		
			$.ajax({
				type:"POST",
				url:"<%=basePath%>banner/doDeleteMultiBanner",
				data:{'delitems':nav.toString()},
				dataType:"json",
				success:function(result){
					alert("删除成功！"+result);
				}
								
			})			
			
 		}	
 		})
 	
 
 })
</script>
</body>
<html>