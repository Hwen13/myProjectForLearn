<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html>
<html lang="en">
<head>
<title>中企科创官网管理系统</title>
<meta charset="UTF-8" />
<meta name="viewport" content="<%=basePath%>/publics/width=device-width, initial-scale=1.0" />
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
  <h1><a href="index.html">Matrix Admin</a></h1>
</div>
<div id="user-nav" class="navbar navbar-inverse">
  <ul class="nav">
    <li  class="dropdown" id="profile-messages" ><a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" class="dropdown-toggle"><i class="icon icon-user"></i>  <span class="text">欢迎登录</span><b class="caret"></b></a>
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
     <li class="submenu "><a href="index.html"><i class="icon icon-home"></i> <span>首页</span></a> </li>
    <li class="submenu active"> <a href="<%=basePath%>navigation/toNavigation"><i class="icon icon-signal"></i> <span>导航栏管理</span><span class="label label-important">2</span></a> 
      <ul>
        <li> <a href="<%=basePath%>navigation/addNavigation">
        添加导航</a></li>
        <li><a href="<%=basePath%>navigation/toNavigation">导航列表</a></li>
      </ul> 
    </li>
    <li class="submenu"> <a href="<%=basePath%>banner/toBannerfile"><i class="icon icon-inbox"></i> <span>轮播管理</span><span class="label label-important">2</span></a> 
      <ul>
        <li><a href="<%=basePath%>bannerfile/addBannerfile">添加轮播</a></li>
        <li>
        	<a href="<%=basePath%>bannerfile/toBannerfile">轮播列表</a></li>
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
       <li><a href="projectAdd.html">添加项目案例</a></li>
         <li><a href="projectSelect.html">项目案例列表</a></li>
      </ul>
    </li>
    
    <li class="submenu"><a href="#"><i class="icon icon-tint"></i> <span>广告管理</span><span class="label label-important">2</span></a>
      <ul>
        <li><a href="#">添加广告</a></li>
        <li><a href="#">广告列表</a></li>
      </ul>
    </li>
    <li class="submenu "><a href="#"><i class="icon icon-pencil"></i> <span>招聘管理</span><span class="label label-important">2</span></a>
      <ul>
         <li><a href="<%=basePath%>recruit/recruitAdd">添加招聘</a></li>
         <li><a href="<%=basePath%>recruit/recruitList">招聘列表</a></li>
      </ul>
    </li>
   <li class="submenu active"> <a href="#"><i class="icon icon-file"></i> <span>业务客户</span> <span class="label label-important">2</span></a>
      <ul>
        <li><a href="save">添加客户</a></li>
        <li><a href="list">客户列表</a></li>
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
    	<a href="#" class="tip-bottom" data-original-title="前往首页">
    		<i class="icon-home"></i> 首页</a> <a href="list">客户列表</a> 
    		<a href="#" class="current">客户列表</a>
    </div>
     <!--树形指示栏 end-->
  
  </div>
  <div class="container-fluid">

    <div class="row-fluid">
      <div class="span11"> 
      	
      	 <div class="widget-box">
          <div class="widget-title">            
           	 <h5>客户列表 </h5>           
        		<button  class="btn  btn-danger">批量删除</button>	
        		<a href="save"><button class="btn  btn-success">添加客户</button>	</a>
          </div>
          <div class="widget-content nopadding">
            <table class="table table-bordered data-table table-list">          	
              <thead>
                <tr>
                  <th><input type="checkbox" id="title-checkbox" name="title-checkbox" /></th>
                  <th>客户名称</th>
                  <th>地址</th>
                  <th>描述</th>                  
                  <th>权重</th>
                  <th class="th-width">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>中企科创</td>
                  <td></td>
                  <td></td>
                  <td class="center">1</td>
                  <td>
                     <button class="btn btn-danger btn-remove" id="btn-del">删除</button>&nbsp;&nbsp;
                     <a class="btn btn-success" href="change">修改</a>                  
                  </td>
                </tr>
                
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
  <div id="footer" class="span12">  2016 &copy; 中企科创计算机技术服务有限公司 <a href="http://www.szzqkc.com">cbranch</a> </div>
</div>
<!--end-Footer-part-->
<script src="<%=basePath%>/publics/js/jquery.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.ui.custom.js"></script> 
<script src="<%=basePath%>/publics/js/bootstrap.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.uniform.js"></script> 
<script src="<%=basePath%>/publics/js/select2.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.dataTables.min.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.tables.js"></script>
<script src="<%=basePath%>/publics/js/jquery.gritter.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.peity.min.js"></script> 
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
</script>
</body>
</html>


		
	
