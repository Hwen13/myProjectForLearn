package com.zqkc.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Business;
import com.zqkc.service.IBusinessService;

@Controller
@RequestMapping("/business")
public class BusinessController {

	@Autowired
	private IBusinessService businessService;

	public void setBusinessService(IBusinessService businessService) {
		this.businessService = businessService;
	}
	/**
	 * 平台展示列表
	 * @param business
	 * @param session
	 * @param req
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/list")
	public ModelAndView list(Business business,HttpSession session,HttpServletRequest req)throws Exception{
		
		ModelAndView md = new ModelAndView();
		List<Business> list = businessService.doFindBusinessAll();
		if(null != list){
			md.addObject("list", list);
			md.setViewName("platform_list");
		}
		return md;
	}
	/**
	 * 添加平台展示
	 * @param business
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/add")
	public ModelAndView addBusiness(Business business)throws Exception{
		
		ModelAndView md = new ModelAndView();
		Business bus = new Business();
		bus.setTitle(business.getTitle());
		bus.setPower(business.getPower());
		bus.setDescription(business.getDescription());
		bus.setRemark(null);
		bus.setIsdel(1);
		boolean n = businessService.doAddBusiness(business);
		if(n){
			List<Business> list = businessService.doFindBusinessAll();
			md.addObject("list", list);
			md.setViewName("platform_list");
		}else{
			md.setViewName("platform_add");
		}
		return md;
	}
	/**
	 * 更改平台展示
	 * @param business
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/update")
	public ModelAndView updateBusiness(Business business)throws Exception{
		
		ModelAndView md = new ModelAndView();
		Business bus = new Business();
		bus.setId(business.getId());
		bus.setTitle(business.getTitle());
		bus.setPower(business.getPower());
		bus.setDescription(business.getDescription());
		boolean n = businessService.doUpdateBusiness(bus);
		if(n){
			List<Business> list = businessService.doFindBusinessAll();
			md.addObject("list", list);
			md.setViewName("platform_list");
		}else{
			md.setViewName("platform_update");
		}
		return md;
	}
	/**
	 * 删除平台展示
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delete")
	public ModelAndView deleteBusiness(Business business)throws Exception{
		ModelAndView md = new ModelAndView();
		boolean n = businessService.doDeleteBusiness(business.getId());
		if(n){
			List<Business> list = businessService.doFindBusinessAll();
			md.addObject("list", list);
			md.setViewName("platform_list");
		}
		return md;
	}
	
	
	@RequestMapping("/save")
	public String save()throws Exception{
		
		return "platform_add";
	}
	/**
	 * 进入修改页面
	 * @param business
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/change")
	public ModelAndView change(Business business)throws Exception{
		ModelAndView md = new ModelAndView();
		md.addObject("bus", business.getId());
		md.setViewName("platform_update");
		return md;
	}
}
