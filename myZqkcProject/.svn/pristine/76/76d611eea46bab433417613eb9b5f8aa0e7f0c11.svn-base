package com.zqkc.controller;



import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Services;
import com.zqkc.service.IServicesService;

@Controller
@RequestMapping("/services")
public class ServicesController {
	
	@Autowired
	private IServicesService servicesService;
	
	public void setServicesService(IServicesService servicesService) {
		this.servicesService = servicesService;
	}
	/**
	 * 服务列表
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/list")
	public ModelAndView list()throws Exception{
		
		ModelAndView md = new ModelAndView(); 
		List<Services> list = servicesService.doFind();
		if(null != list){
			md.addObject("list", list);
			md.setViewName("services_list");
		}
		return md;
	}
	/**
	 * 添加服务
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/add")
	public ModelAndView addServices(HttpSession session,HttpServletRequest req)throws Exception{
		String title = req.getParameter("title");
		String description = req.getParameter("description");
		String url = req.getParameter("url");
		String power = req.getParameter("power");
		Services ser = new Services();
		ser.setTitle(title);
		ser.setDescription(description);
		ser.setUrl(url);
		ser.setPower(Integer.parseInt(power));
		ser.setRemark(null);
		ser.setIsdel(1);
		ModelAndView md = new ModelAndView();
		boolean n = servicesService.doAdd(ser);
		if(n){
			List<Services> list = servicesService.doFind();
			md.addObject("list", list);
			md.setViewName("services_list");
		}else{
		md.setViewName("services_add");
		}
		return md;
	}
	/**
	 * 更改服务
	 * @param services
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/update")
	public ModelAndView updateServices(Services services,HttpSession session,HttpServletRequest req)throws Exception{
		
		ModelAndView md = new ModelAndView();
//		String title = req.getParameter("title");
//		String description = req.getParameter("description");
//		String url = req.getParameter("url");
//		String power = req.getParameter("power");
		Services ser = new Services();
		ser.setTitle(services.getTitle());
		ser.setDescription(services.getDescription());
		ser.setUrl(services.getUrl());
		ser.setPower(services.getPower());
		ser.setId(services.getId());
		boolean n = servicesService.doUpdate(ser);
		System.out.println(ser.getId());
		if(n){
			List<Services> list = servicesService.doFind();
			md.addObject("list", list);
			md.setViewName("services_list");
		}else{
			md.setViewName("services_update");
		}
		return md;
	}
	/**
	 * 删除服务
	 * @param services
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delete")
	public ModelAndView deleteServices(Services services)throws Exception{
		ModelAndView md = new ModelAndView();
		boolean n = servicesService.doDelete(services.getId());
		if(n){
			List<Services> list = servicesService.doFind();
			md.addObject("list", list);
			md.setViewName("services_list");
		}
		return md;
	}
	
	@RequestMapping("/save")
	public String save()throws Exception{
		return "services_add";
	}
	@RequestMapping("/change")
	public ModelAndView change(Services services)throws Exception{
		ModelAndView md = new ModelAndView();
		md.addObject("ser", services.getId());
		md.setViewName("services_update");
		return md;
	}
}
