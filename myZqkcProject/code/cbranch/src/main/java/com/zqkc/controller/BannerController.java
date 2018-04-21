/**
 * 
 */
package com.zqkc.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Banner;
import com.zqkc.service.impl.BannerService;


/**
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/banner")
public class BannerController {
	
	@Autowired
	private BannerService bannerService;	
	
	public void setBannerService(BannerService bannerService) {
		this.bannerService = bannerService;
	}
	
	/************************轮播相关页面跳转****************************************/
	
	/**
	 * 进入轮播图列表页面
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/toBanner")
	public ModelAndView toBannerfile(HttpSession session) throws Exception{
		ModelAndView md = new ModelAndView();		 
		md.addObject("banner", bannerService.doFindBannerAll());
		//md.addObject("file", bannerfileService.);
		md.setViewName("carousel_list");		
		return md;
	}
	
	/**
	 * 进入添加轮播图页面
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/addBanner")
	public String addBannerfile(HttpSession session)throws Exception{
		return "carousel_add";
	}
	
	@RequestMapping("/updateBanner")
	public ModelAndView updateBanner(HttpSession session,Banner banner)throws Exception{
		ModelAndView md = new ModelAndView();
		
		
		md.setViewName("carousel_update");
		return md;
	} 
	
	
	/************************轮播相关页面业务处理****************************************/
	
	/**
	 * 更新轮播图页面
	 * @param session
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/doUpdateBanner")
	public ModelAndView updateBannerfile(HttpSession session)throws Exception{
		ModelAndView md = new ModelAndView();
		md.setViewName("carousel_update");
		return md;
	}
	
}
