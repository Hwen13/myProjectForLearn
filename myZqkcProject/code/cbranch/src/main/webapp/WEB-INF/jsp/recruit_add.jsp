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
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap.min.css" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap-responsive.min.css" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/fullcalendar.css" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-style.css" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-media.css" />
  <link href="<%=basePath%>/publics/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" href="<%=basePath%>/publics/css/jquery.gritter.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="<%=basePath%>/publics/css/uniform.css" />
<link rel="stylesheet" href="<%=basePath%>/publics/css/zqkc-admin.css" />
</head>
<body>
<div id="header">
  <h1><a href="dashboard.html">Matrix Admin</a></h1>
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

      

        <li> <a href="<%=basePath%>navigation/addNavigation">添加导航</a></li>
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
  <li class="submenu "> <a href="#"><i class="icon icon-th-list"></i> <span>项目案例</span> <span class="label label-important">2</span></a>
       <ul>
         <li><a href="<%=basePath%>project/addProjectTry">添加项目案例</a></li>
         <li><a href="<%=basePath%>project/projectSelec">项目案例列表</a></li>
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
        <li><a href="<%=basePath%>recruit/recruitList">招聘列表</a></li>
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
    <div id="breadcrumb"> <a href="index.html" class="tip-bottom" data-original-title="前往首页">
    	<i class="icon-home"></i> 首页</a> <a href="recruit_list.html">招聘管理</a> 
    	<a href="#" class="current">添加招聘信息</a> </div>
 	
  </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        				<div class="widget-box">
        <div class="widget-title"> 
        	<span class="icon"><a href="recruit_list.html">
        		<button type="submit" class="btn btn-mini btn-success">返回招聘列表</button></a></span>
          <h5>添加招聘信息</h5>         		     
        </div>
        <div class="widget-content nopadding">
          <form action="addRecruit" method="get" class="form-horizontal">
            <div class="control-group clearboth">
              <label class="control-label">招聘岗位：</label>
              <div class="controls">
                <input type="text" class="span6" name="job" value="" placeholder="岗位名称" />
              </div>
            </div>
            <div class="control-group clearboth">
              <label class="control-label">招聘人数：</label>
              <div class="controls">
                <input type="text" class="span6" name="sum" value="" placeholder="该职位人数" />
              </div>
            </div>
            <div class="control-group clearboth">
              <label class="control-label">招聘标题：</label>
              <div class="controls">
                <input type="text" class="span6" name="title1" value="" placeholder="我们真诚招募WEB前端开发工程师，关于这一职位要求如下：" />
              </div>
            </div>
             <div class="control-group">             	
                <label class="control-label data-no-1">招聘要求：1.</label>
                <div class="controls">
                  <input type="text" name="requirement" value="" class="span6" placeholder="招聘要求"/>
                  <a href="javascript:void(0);" id="add-req" title="添加要求" >
                   <i class="icon-plus-sign" style="font-size: 20px;vertical-align: middle;color:#51a351"></i>
                   </a>
                </div>  
             </div>
             <div class="control-group">
              <label class="control-label">职责标题：</label>
              <div class="controls">
                <input type="text" name="title2" class="span6" placeholder="如：岗位职责" />
              </div>              
            </div>
             <div class="control-group">
              <label class="control-label">职责要求：1.</label>
              <div class="controls">
                <input type="text" name="qualification" class="span6" placeholder="职责要求" /> <a href="javascript:void(0);" id="add-qual" title="添加职责要求" >
                 <i class="icon-plus-sign" style="font-size: 20px;vertical-align: middle;color:#51a351"></i>
                </a>          
              </div>              
            </div>   
             <div class="control-group">
              <label class="control-label">相关信息：</label>
              <div class="controls">                
                <textarea class="span6" rows="4" placeholder="该职位面向所有人"></textarea>
              </div>
            </div>
            <div class="form-actions form-horizontal">          
             	 <button type="submit" class="btn btn-success">提交</button>
               <button type="reset" class="btn btn-danger">重置</button>           
            </div>
          </form>
        </div>       
      </div>
     			
        </div>
      </div>
    </div>
  

<!--end-Footer-part--> 

<script src="<%=basePath%>/publics/js/jquery.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.ui.custom.js"></script> 
<script src="<%=basePath%>/publics/js/bootstrap.min.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.validate.js"></script> 
<script src="<%=basePath%>/publics/js/jquery.wizard.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.js"></script> 
<script src="<%=basePath%>/publics/js/matrix.wizard.js"></script>

<script type="text/javascript">
	$(function(){
     var no = 2; //记录招聘要求数
     var qno = 2; //记录职责要求数
     //添加招聘要求 
	   $("#add-req").click(function(){        
        $htm = "<div class='data-field'><label class='control-label'>"+no+". </label>"+
                "<div class='controls'>"+
                "<input type='text' name='requirement' class='span6' "+
                "placeholder='职责要求' />"+
                "<a href='javascript:void(0);' class='rm-req' title='删除职责要求'>"+
                "<i class='icon-minus-sign'"+
                "style='padding-left: 3px;font-size: 20px;vertical-align:middle;color:#bd362f'></i></a></div></div>";         
          $(this).parent().parent().append($htm);
          no++;    
     });
    //删除招聘要求
    $(".rm-req").live("click",function(){ 
      $(this).parent().parent().remove();
      var size = $(".data-field").size();
      var $list = $(".data-field>label");
      for(i=0;i<=size;i++){
        var lb = $list[i];
        lb.innerHTML = (i+2)+".";
      } 
      no--;
    });
    //添加职责要求
     $("#add-qual").click(function(){        
        $htmq = "<div class='data-qual'><label class='control-label'>"+qno+". </label>"+
                "<div class='controls'>"+
                "<input type='text' name='qualification' class='span6' "+
                "placeholder='招聘要求' />"+
                "<a href='javascript:void(0);' class='rm-qual' title='删除要求'>"+
                "<i class='icon-minus-sign'"+
                "style='padding-left: 3px;font-size: 20px;vertical-align:middle;color:#bd362f'></i></a></div></div>";         
          $(this).parent().parent().append($htmq);
          qno++;    
     });
    $(".rm-qual").live("click",function(){ 
      $(this).parent().parent().remove();
      var qsize = $(".data-qual").size();
      var $qlist = $(".data-qual>label");
      for(i=0;i<qsize;i++){
        var qlb = $qlist[i];
        qlb.innerHTML = (i+2)+".";
      } 
      qno--;
    });
	});


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
</script>
</body>
</html>
