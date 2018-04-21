package com.zqkc.interceptor.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.zqkc.model.User;

/**
 * 登陆拦截器.
 *
 * @author 折翼天蝎
 */
public class LoginInterceptor extends HandlerInterceptorAdapter {
    private static final String[] IGNORE_URI = {"/business/","/customer/","/project/","/recruit/","/services/","/navigation/","/bannerfile/","/banner/","/resume/"};
 
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        boolean flag = false;
        String url = request.getRequestURL().toString();
        for (String s : IGNORE_URI) {
            if (url.contains(s)) {
                flag = true;
                break;
            }
        }
        if (flag) {
            User user = (User) request.getSession().getAttribute("user");
            if (user != null){ 
            	flag = true;
            }
            else {
            	flag = false;
            	response.sendRedirect("../index"); 
            }
        }
        return flag;
    }
 

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }
}
