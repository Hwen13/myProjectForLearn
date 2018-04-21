/**
 * 
 */
package com.zqkc.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Navigation;
import com.zqkc.service.impl.NavigationService;

/**
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/navigation")
public class NavigationController {
	
	@Autowired
	private  NavigationService navigationService;
	
	
	public void setNavigationService(NavigationService navigationService) {
		this.navigationService = navigationService;
	}
	
	
	/*****************************页面跳转**********************************/
	
	/**
	 * 进入导航栏列表页面
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/toNavigation")
	public ModelAndView toNavigation(HttpSession session) throws Exception{
		ModelAndView md = new ModelAndView();
		md.addObject("navigation", navigationService.doFindNavigationAll());
		md.setViewName("navigation_list");
		return md;
	}
	
	/**
	 * 添加导航栏列表页面
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addNavigation")
	public String addNavigation(HttpSession session) throws Exception{
		return "navigation_add";
	}
	
	/**
	 * 更新导航栏页面
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updateNavigation")
	public ModelAndView  updateNavigation(HttpSession session,Navigation nav) throws Exception{
		ModelAndView md = new ModelAndView();
		md.addObject("nav", nav);
		md.setViewName("navigation_update");
		return md;
	}
	
	/***************************业务数据处理***************************************/
	
	
	/**
	 * 更新页面 数据处理
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping("/doUpdateNavigation")
	public ModelAndView doUpdateNavigation(HttpSession session,Navigation nav){
		ModelAndView md = new ModelAndView();	
		/*LinkedList<Navigation> list=navigationService.doFindNavigation(nav);//查询完整的导航信息
		for(Navigation n:list){
			if(navigationService.doUpdateNavigation(n)){
				System.out.println(n.toString());
				md.addObject("link", navigationService.doFindNavigationAll()); 
				md.setViewName("navigation_list"); //更新成功 页面跳转到导航栏列表也
			}else{
				md.setViewName("navigation_update");//更新失败 返回原页面
			}
		}*/
		System.out.println(nav.getId());
		System.out.println(nav.toString());
		if(navigationService.doUpdateNavigation(nav)){
		
			md.addObject("navigation", navigationService.doFindNavigationAll()); 
			md.setViewName("navigation_list"); //更新成功 页面跳转到导航栏列表也
		}else{
			md.setViewName("navigation_update");//更新失败 返回原页面
		}
		return md;
	}
	
	/**
	 * 添加导航  数据处理
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping("/doAddNavigation")
	public ModelAndView  doAddNavigation(HttpSession session,Navigation nav){	
		ModelAndView md = new ModelAndView();
		System.out.println(nav.toString());
		if(navigationService.doAddNavigation(nav)){
			md.addObject("navigation", navigationService.doFindNavigationAll());
			md.setViewName("navigation_list");
		}else{
			md.setViewName("navigation_add");
		}		
		return md;	
	}
	/**
	 * 查询特定数据相关的导航栏信息
	 * @param session
	 * @param nav
	 * @return
	 */
	@RequestMapping("/doFindNavigation")
	public ModelAndView doFindNavigation(HttpSession session,Navigation nav){
		ModelAndView md = new ModelAndView();
		
		return md;
	}
	
	/**
	 * 删除导航数据处理
	 * @param session
	 * @param request
	 * @return
	 */
	@RequestMapping("/doDeleteNavigation")
	public ModelAndView doDeleteNavigation(HttpSession session,Navigation nav){
		ModelAndView md = new ModelAndView();
		navigationService.doDeleteNavigation(nav);
		md.addObject("navigation", navigationService.doFindNavigationAll());
		md.setViewName("navigation_list");
		return md;
	}
	
	
	
	
	
	

	

	
}
