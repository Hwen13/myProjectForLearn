/**
 * 
 */
package com.zqkc.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import sun.rmi.transport.proxy.HttpReceiveSocket;

import com.zqkc.model.Navigation;
import com.zqkc.service.INavigationService;

/**
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/navigation")
public class NavigationController {

	@Autowired
	private INavigationService navigationService;

	public void setNavigationService(INavigationService navigationService) {
		this.navigationService = navigationService;
	}

	/***************************** 页面跳转 **********************************/

	/**
	 * 进入导航栏列表页面
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/toNavigation")
	public ModelAndView toNavigation(HttpSession session) throws Exception {
		HttpServletRequest req=(HttpServletRequest)session.getServletContext();
		HttpServletResponse rep=(HttpServletResponse)session.getServletContext();
		req.setCharacterEncoding("utf-8");
		rep.setCharacterEncoding("utf-8");
		ModelAndView md = new ModelAndView();
		md.addObject("navigation", navigationService.doFindNavigationAll());
		System.out.println("navigationService.doFindNavigationAll()=="+navigationService.doFindNavigationAll());
		md.setViewName("navigation_list");
		return md;
	}

	/**
	 * 添加导航栏列表页面
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addNavigation")
	public String addNavigation(HttpSession session) throws Exception {
		return "navigation_add";
	}

	/**
	 * 更新导航栏页面
	 * 
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateNavigation")
	public ModelAndView updateNavigation(HttpSession session, Navigation nav) throws Exception {
		System.out.println("updateNavigation**************starts");
		HttpServletRequest req=(HttpServletRequest)session.getServletContext();
		HttpServletResponse rep=(HttpServletResponse)session.getServletContext();
		req.setCharacterEncoding("utf-8");
		rep.setCharacterEncoding("utf-8");
		ModelAndView md = new ModelAndView();
		md.addObject("nav", nav);
		md.setViewName("navigation_update");
		System.out.println("updateNavigation**************starts");
		return md;
	}

	/*************************** 业务数据处理 ***************************************/

	/**
	 * 更新页面 数据处理
	 * 
	 * @param session
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(value="/doUpdateNavigation",produces="text/html;charset=UTF-8")
	public String doUpdateNavigation(HttpServletRequest request,HttpServletResponse response,Navigation nav) throws UnsupportedEncodingException {
		System.out.println("doUpdateNavigation**************starts");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		System.out.println("doUpdateNavigation----------starts");
		System.out.println("===="+nav.getName());
		System.out.println("===="+nav.getRemark());
		System.out.println("===="+nav.getUrl());
		if (navigationService.doUpdateNavigation(nav)) {
			return "redirect:toNavigation";
		}
		request.setAttribute("nav", nav);
		System.out.println("doUpdateNavigation----------end");
		System.out.println("doUpdateNavigation**************end");
		return "navigation_update";// 更新失败 返回原页面
	}

	/**
	 * 添加导航 数据处理
	 * 
	 * @param session
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping("/doAddNavigation")
	public String doAddNavigation(HttpServletRequest request,HttpServletResponse response,Navigation nav) throws UnsupportedEncodingException {
		System.out.println("doAddNavigation**************starts");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		if (navigationService.doAddNavigation(nav)) {
			return "redirect:toNavigation";
		}
		System.out.println("doAddNavigation**************end");
		return "navigation_add";
	}

	/**
	 * 查询特定数据相关的导航栏信息
	 * 
	 * @param session
	 * @param nav
	 * @return
	 */
	@RequestMapping("/doFindNavigation")
	public ModelAndView doFindNavigation(HttpSession session, Navigation nav) {
		ModelAndView md = new ModelAndView();

		return md;
	}

	/**
	 * 删除导航数据处理
	 * 
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping("/doDeleteNavigation")
	public ModelAndView doDeleteNavigation(HttpSession session, Navigation nav) {
		System.out.println("doDeleteNavigation**************starts");
		ModelAndView md = new ModelAndView();
		navigationService.doDeleteNavigation(nav);
		md.addObject("navigation", navigationService.doFindNavigationAll());
		md.setViewName("navigation_list");
		System.out.println("doDeleteNavigation**************end");
		return md;
	}

	/**
	 * 批量删除导航
	 * 
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping("/deleteList")
	public String doDeleteNavigationMulti(HttpServletRequest request) {
		System.out.println("deleteList**************starts");
		String[] del = request.getParameter("delitems").split(",");
		navigationService.doDeleteMultiNavigation(del);
		System.out.println("deleteList**************end");
		return "redirect:toNavigation";
	}

}
