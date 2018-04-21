<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html>
<html>
<head>
	<title>添加</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap.min.css" />
	<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap-responsive.min.css" />
	<link rel="stylesheet" href="<%=basePath%>/publics/css/uniform.css" /> 
	<link rel="stylesheet" href="<%=basePath%>/publics/css/select2.css" /> 
	<link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-style.css" />
	<link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-media.css" />
	<link href="<%=basePath%>/publics/font-awesome/css/font-awesome.css" rel="stylesheet" />
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<%=basePath%>/publics/css/zqkc-admin.css" />
</head>
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
        <li><a href="login.html"><i class="icon-key"></i> 注销</a></li>
      </ul>
    </li>
    <li class="dropdown" id="menu-messages">
    	
    	<a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle">
    		<i class="icon icon-envelope"></i> <span class="text">信息</span> <span class="label label-important">5</span> <b class="caret"></b></a>
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
    	<a href="index.html" class="tip-bottom" data-original-title="前往首页">
    		<i class="icon-home"></i> 首页</a> <a href="carousel_list.html" >轮播图管理</a> 
    		<a href="#" class="current">轮播图管理</a>
    </div>
     <!--树形指示栏 end-->
    
  </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span11">
      		
      		<!--
          	轮播图管理 
              -->
      		<div class="widget-box">
          <div class="widget-title"><span class="icon">
        		<a href="<%=basePath%>banner/toBanner">
        		<button type="submit" class="btn btn-mini btn-success">返回轮播管理</button></a></span>
            <h5>修改图片信息</h5>
          </div>
          <div class="widget-content nopadding">
            <form class="form-horizontal" method="POST" action="<%=basePath%>banner/doUpdateBanner" enctype="multipart/form-data" >
              <div  class="control-group clearboth">            	
                <label class="control-label">标题：</label>
                <div class="controls">
                	<input type="hidden" name="id" value="${banner.id }">
                  <input class="span6" type="text" name="title" id="required" value="${banner.title}">
                </div>
              </div>          
               <div class="control-group">
                <label class="control-label">描述：</label>
                <div class="controls">
                  <textarea class="span6" rows="5" name="description" id="description" >${banner.description}</textarea>
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">权重：</label>
                <div class="controls">
                  <input  class="span6" type="number" name="power" value="${banner.power}" min="1" max="999" step="1"/>
                </div>
              </div>            
                <div class="control-group" id="file-field">
                <label class="control-label">选择文件：</label>
                <div class="controls">
                  	<input type="file" name="file" />
                    <a href="javascript:void(0);"  id="add-file" ><i class="icon-plus-sign" style="font-size: 20px;vertical-align: middle;color:#51a351"></i></a>
                </div>                 
            	</div>
              <div class="form-actions form-horizontal">                           
              	 <button type="submit" class="btn btn-success">提交</button>
              	 <button type="reset" class="btn btn-success">重置</button>      
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
<div class="row-fluid">
  <div id="footer" class="span12"> 2016 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in/">Themedesigner.in</a>
  </div>
</div>
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
</body>
</html>