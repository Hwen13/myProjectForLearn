<%@ page language="java" import="java.util.*"  pageEncoding="utf-8"%>
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
  <link rel="stylesheet" href="<%=basePath%>/publics/css/fullcalendar.css" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-style.css" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-media.css" />
  <link href="<%=basePath%>/publics/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/jquery.gritter.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

</head>
<style>	
</style>

<body> 
<div id="header">
  <h1><a href="dashboard.html">Matrix Admin</a></h1>
</div>
<div id="user-nav" class="navbar navbar-inverse">
  <ul class="nav">
    <li  class="dropdown" id="profile-messages" ><a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" class="dropdown-toggle"><i class="icon icon-user"></i>  <span class="text">${user.account}</span><b class="caret"></b></a>
      <ul class="dropdown-menu">
        <li><a id="userInformation" href="<%=basePath%>user/findInformation"><i class="icon-user"></i> 我的资料</a></li>
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
    <li class="submenu  active"><a href="<%=basePath%>user/index"><i class="icon icon-home"></i> <span>首页</span></a> </li>
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
         <li><a href="<%=basePath%>project/addProspectus">添加计划书</a></li>
         <li><a href="<%=basePath%>project/findProspectusAll">计划书列表</a></li>
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
    <div id="breadcrumb"> <a href="#" title="首页" class="tip-bottom"><i class="icon-home"></i> 首页</a></div>
  </div>
  <div class="container-fluid">
    <div class="quick-actions_homepage">
        <ul class="quick-actions">
        	
          <li class="bg_lb"> <a href="<%=basePath%>navigation/addNavigation"> <i class="icon-dashboard"></i> 
          	<span class="label label-important">${navigations}</span> 导航管理</a> </li>
          <li class="bg_lg span3"> <a href="<%=basePath%>banner/addBanner"> <i class="icon-signal"></i><span class="label label-important">${banners}</span> 轮播管理</a> </li>
          <li class="bg_ly"> <a href="<%=basePath%>business/list"> <i class="icon-inbox"></i>
          	<span class="label label-success">${business}</span> 平台展示 </a> </li>
          <li class="bg_lo"> <a href="projectSelect.jsp"> <i class="icon-th"></i><span class="label label-important">${projects}</span> 项目案例</a> </li>
         <!-- <li class="bg_ls"> <a href="grid.html"> <i class="icon-fullscreen"></i> 业务客户</a> </li>-->
  <!--        <li class="bg_lo span3"> <a href="form-common.html"> <i class="icon-th-list"></i> Forms</a> </li>-->
          <li class="bg_ls"> <a href="<%=basePath%>recruit/addRecruit_Menu"> <i class="icon-tint"></i><span class="label label-important">${recruits}</span> 招聘管理</a> </li>
         	<li class="bg_lo span3"> <a href="<%=basePath%>customer/list"> <i class="icon-book"></i><span class="label label-important">${customers}</span>业务客户</a> </li>
         	<li class="bg_ls"> <a href="<%=basePath%>services/list"> <i class="icon-coffee"></i><span class="label label-important">${services}</span>服务管理</a> </li>
          <!-- <li class="bg_lg"> <a href="calendar.jsp"> <i class="icon-calendar"></i> Calendar</a> </li>
          <li class="bg_lr"> <a href="error404.html"> <i class="icon-info-sign"></i> Error</a> </li>-->

        </ul>
   	</div>
    <div class="row-fluid">
      <div class="widget-box">
        <div class="widget-title bg_lg"><span class="icon"><i class="icon-signal"></i></span>
          <h5>Site Analytics</h5>
        </div>
        <div class="widget-content" >
          <div class="row-fluid">
            <div class="span9">
              <div class="chart"></div>
            </div>
            <div class="span3">
              <ul class="site-stats">
                <li class="bg_lh"><i class="icon-user"></i> <strong>${numSessions}</strong> <small>在线人数</small></li>
                <li class="bg_lh" onclick="adduser(this)" data-url="<%=basePath%>${listUser}"><i class="icon-plus"></i> <strong>${sum}</strong> <small>用户列表 </small></li>
                <li class="bg_lh"><i class="icon-shopping-cart"></i> <strong>${sumnavigations}</strong> <small>导航数量</small></li>
                <li class="bg_lh"><i class="icon-tag"></i> <strong>${sumbanners}</strong> <small>轮播数量</small></li>
                <li class="bg_lh"><i class="icon-repeat"></i> <strong>${sumcustomers}</strong> <small>平台数量</small></li>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>${sumprojects}</strong> <small>项目案例数量</small></li>
                <%-- <li class="bg_lh"><i class="icon-globe"></i> <strong>${numPorject}</strong> <small>广告数量</small></li> --%>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>${sumcustomers}</strong> <small>业务客户数量</small></li>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>${sumrecruits}</strong> <small>招聘数量</small></li>
                <li class="bg_lh"><i class="icon-globe"></i> <strong>${numservices}</strong> <small>服务数量</small></li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
<div class="row-fluid">
  <div id="footer" class="span12"> 2016 &copy; 中企科创计算机技术服务有限公司 <a href="http://www.szzqkc.com">cbranch</a>
  </div>
</div>
<script src="<%=basePath%>/publics/js/excanvas.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.min.js"></script> 

<script src="<%=basePath%>/publics/js/bootstrap.min.js"></script> 

<script src="<%=basePath%>/publics/js/jquery.ui.custom.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.flot.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.flot.resize.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.peity.min.js"></script> 
<script src="<%=basePath%>/publics/js/fullcalendar.min.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.dashboard.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.gritter.min.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.interface.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.chat.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.validate.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.form_validation.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.wizard.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.uniform.js"></script> 
<script src="<%=basePath%>/publics/js/select2.min.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.popover.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.dataTables.min.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.tables.js"></script> 



<script type="text/javascript">
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
  function adduser(e){
	  //alert(e.getAttribute('data-url'));
	  var newURL = e.getAttribute('data-url');
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
  

</script>
</body>
</html>
