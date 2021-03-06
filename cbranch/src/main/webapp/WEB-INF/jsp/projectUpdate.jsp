<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html>
<html lang="en">
<head>
<title>Matrix Admin</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap.min.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap-responsive.min.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/colorpicker.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/datepicker.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/uniform.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/select2.css" />
<!-- --><link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-style.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-media.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap-wysihtml5.css" />
<link href="<%=basePath%>/publics/font-awesome/css/font-awesome.css" rel="stylesheet" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="<%=basePath%>/publics/css/zqkc-admin.css" />
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
        <li><a href="logout"><i class="icon-key"></i> 注销</a></li>
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
    <li class=""><a title="" href="javascript:void(0);" id="goout"><i class="icon icon-cog"></i> <span class="text">设置</span></a></li>
    <li class=""><a title="" href="logout"><i class="icon icon-share-alt"></i> <span class="text">退出登录</span></a></li>
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
    <li class="submenu"> <a href="<%=basePath%>navigation/toNavigation"><i class="icon icon-signal"></i> <span>导航栏管理</span><span class="label label-important">2</span></a> 
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
  <li class="submenu "> <a href="#"><i class="icon icon-th-list"></i> <span>项目案例</span> <span class="label label-important">2</span></a>
  
       <ul>
       <li><a href="<%=basePath%>project/addProjectTry">添加项目案例</a></li>
         <li><a href="<%=basePath%>project/findProjectAll">项目案例列表</a></li>
      </ul>
    </li>
  
    <li class="submenu"><a href="#"><i class="icon icon-tint"></i> <span>广告管理</span><span class="label label-important">2</span></a>
      <ul>
        <li><a href=" ">添加广告</a></li>
        <li><a href="#">广告列表</a></li>
      </ul>
    </li>
    <li class="submenu"><a href="#"><i class="icon icon-pencil"></i> <span>招聘管理</span><span class="label label-important">2</span></a>
      <ul>
        <li><a href="<%=basePath %>recruit/recruitAdd">添加招聘</a></li>
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
    	<i class="icon-home"></i> 首页</a> <a href="platform_list.html">项目案例</a> 
    	<a href="#" class="current">添加功能菜单</a> </div>
   
  </div>
  
  <div class="container-fluid">
	
		<div class="row-fluid">
		<div class="span6">
		<div class="widget-box">
        <div class="widget-title"> 
        	<span class="icon"><a href="<%=basePath%>project/findProjectAll""><button type="submit" class="btn btn-mini btn-success">返回项目案例列表</button></a></span>    
           <h5>修改展示模块表单</h5>
        </div>
        <div class="widget-content nopadding">
          <form action="<%=basePath%>project/updateProject" method="POST" class="form-horizontal">  
          <c:forEach var="project" items="${projectList}" varStatus="staturs">
          	<input type="hidden" name="id" value="${project.id}" />       
            <div  class="control-group clearboth">
              <label class="control-label">项目名称 :</label>
              <div class="controls">
                <input type="text" class="span11" placeholder="${project.name}" name="name" />
              </div>
            </div>
            <div  class="control-group clearboth">
              <label class="control-label">标题 :</label>
              <div class="controls">
                <input type="text" class="span11" placeholder="${project.title}" name="title"/>
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">链接:</label>
              <div class="controls">
                <input type="text" class="span11" placeholder="${project.url}" name="url"/>
                </div>
            </div>
             <div class="control-group">
                <label class="control-label">已选项目类型：</label>
                <div class="controls">
                  <p style="color:red"><c:out value="${project.type}"></c:out></p>
                </div>
              </div>
             <div class="control-group clearboth">
              <label  class="control-label">项目类型：111111111111111</label>
              <div class="controls">
              <select name="type"> 
              	<option selected="selected" >请选择</option>
              	<c:forEach var="name" items="${list}" varStatus="staturs">
              	<option  value="${name}"><c:out value="${name}"></c:out></option>
              	</c:forEach>
              </select>            
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">上传图片</label>
              <div class="controls">
               <input type="file" name="path" placeholder="${project.path}" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">图片:</label>
              <div class="controls">
                 <img class="img-show" src="<%=basePath%>/publics/img/gallery/imgbox2.jpg" alt="" > 
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">简介</label>
              <div class="controls">
                <textarea class="span11" placeholder="${project.remark}" name="remark"></textarea>
              </div>
            </div>
             <div class="control-group">
                <label class="control-label">已选权重：</label>
                <div class="controls">
                  <p style="color:red"><c:out value="${project.power}"></c:out></p>
                </div>
              </div>
            <div class="control-group">
                <label class="control-label">权重</label>
                <div class="controls">
                  <input  class="span2" type="number" name="power" value="1" min="1" max="999" step="1" placeholder="${project.power}" />
                </div>
              </div>
            <div class="form-actions form-horizontal">
      			<button type="submit" class="btn btn-success">提交</button>
                <button type="reset" class="btn btn-success">重置</button>
            </div>
             </c:forEach> 
          </form>
        </div>    
      </div>
     </div>
   </div>
</div>	
</div>		
<script src="<%=basePath%>/publics/js/jquery.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.ui.custom.js"></script> 
<script src="<%=basePath%>/publics/js/bootstrap.min.js"></script> 
<script src="<%=basePath%>/publics/js/bootstrap-colorpicker.js"></script> 
<script src="<%=basePath%>/publics/js/bootstrap-datepicker.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.toggle.buttons.html"></script> 
<script src="<%=basePath%>/publics/js/masked.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.uniform.js"></script> 
<script src="<%=basePath%>/publics/js/select2.min.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.form_common.js"></script> 
<script src="<%=basePath%>/publics/js/wysihtml5-0.3.0.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.peity.min.js"></script> 
<script src="<%=basePath%>/publics/js/bootstrap-wysihtml5.js"></script> 
<script>
	$('.textarea_editor').wysihtml5();
</script>
<script>
</script>	
	</body>
</html>
