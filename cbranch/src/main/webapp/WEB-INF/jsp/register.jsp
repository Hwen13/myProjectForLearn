<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html>
<html lang="en">
    
<head>
        <title>中企科创官网后台管理系统</title><meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap.min.css" />
		<link rel="stylesheet" href="<%=basePath%>/publics/css/bootstrap-responsive.min.css" />
        <link rel="stylesheet" href="<%=basePath%>/publics/css/matrix-login.css" />
        <link href="<%=basePath%>/publics/font-awesome/css/font-awesome.css" rel="stylesheet" />
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

    </head>
    <body>
        <div id="loginbox">                        
            <form id="loginform" class="form-vertical" action="<%=basePath%>user/register" method="post">
				 <div class="control-group normal_text"> <h3>
				 <img src="<%=basePath%>/publics/img/logo.png" alt="中企科创" />
					中企科创信息数据管理系统
				 </h3></div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
                            <span class="add-on bg_lg"><i class="icon-user"></i></span><input type="text" name="account" placeholder="新建帐号" />
                        </div>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
                            <span class="add-on bg_ly"><i class="icon-lock"></i></span><input type="password" name="password" placeholder="密码" />
                        </div>
                    </div>
                </div>
                 <div class="control-group">
                    <div class="controls">
                        <div class="main_input_box">
                            <span class="add-on bg_ly"><i class="icon-lock"></i></span><input type="spassword" name="spassword" placeholder="确认密码" />
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                   
                    <span class="pull-center"><input type="submit" class="btn btn-success" value="注册" /></input></span>
                </div>
            </form>          
        </div>
        
        <script src="<%=basePath%>/publics/js/jquery.min.js"></script>  
        <script src="<%=basePath%>/publics/js/matrix.login.js"></script> 
      </body>

</html>

