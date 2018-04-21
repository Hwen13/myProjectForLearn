package com.zqkc.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/list")
	public ModelAndView list() throws Exception {

		ModelAndView md = new ModelAndView();
		List<Services> list = servicesService.doFind();
		if (null != list) {
			md.addObject("list", list);
			md.setViewName("services_list");
		} else {
			md.addObject("manage", "没有查询到任何数据！");
		}
		return md;
	}

	/**
	 * 根据id查找数据
	 * 
	 * @param services
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findById")
	public ModelAndView findById(Services services) throws Exception {

		ModelAndView md = new ModelAndView();
		Services ser = servicesService.doFindBy(services.getId());
		if (null != ser) {
			md.addObject("ser", ser);
			md.setViewName("services_list");
		} else {
			md.addObject("manage", "没有相关数据");
		}
		return md;
	}

	/**
	 * 添加服务
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/add")
	public ModelAndView addServices(HttpSession session, HttpServletRequest req) throws Exception {
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
		if (n) {
			md.setViewName("redirect:list");
		} else {
			md.setViewName("services_add");
		}
		return md;
	}

	/**
	 * 更改服务
	 * 
	 * @param services
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/update")
	public ModelAndView updateServices(Services services, HttpSession session, HttpServletRequest req)
			throws Exception {

		ModelAndView md = new ModelAndView();
		// String title = req.getParameter("title");
		// String description = req.getParameter("description");
		// String url = req.getParameter("url");
		// String power = req.getParameter("power");
		Services ser = new Services();
		ser.setTitle(services.getTitle());
		ser.setDescription(services.getDescription());
		ser.setUrl(services.getUrl());
		ser.setPower(services.getPower());
		ser.setId(services.getId());
		boolean n = servicesService.doUpdate(ser);
		System.out.println(ser.getId());
		if (n) {
			md.setViewName("redirect:list");
		} else {
			md.setViewName("services_update");
		}
		return md;
	}

	/**
	 * 删除服务
	 * 
	 * @param services
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delete")
	public ModelAndView deleteServices(Services services) throws Exception {

		ModelAndView md = new ModelAndView();
		boolean n = servicesService.doDelete(services.getId());
		if (n) {
			md.setViewName("redirect:list");
		}
		return md;
	}

	/**
	 * 批量删除
	 * 
	 * @param services
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteList", method = RequestMethod.POST)
	public ModelAndView deleteList(String delitems) throws Exception {

		ModelAndView md = new ModelAndView();
		String[] ids = delitems.split(",");
		List<Integer> li = new ArrayList<Integer>();
		for (int i = 0; i < ids.length; i++) {
			li.add(Integer.parseInt(ids[i]));
		}
		try {
			boolean m = servicesService.doDeleteList(li);
			if (m) {
				md.setViewName("redirect:list");
			} else {
				md.setViewName("index");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return md;
	}

	/**
	 * 模糊查询
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/findServicesList")
	public ModelAndView findServicesList(Services services) throws Exception {

		ModelAndView md = new ModelAndView();
		List<Object> list = new ArrayList<Object>();
		Map<String, List<Object>> map = new HashMap<String, List<Object>>();
		if (null != services.getTitle()) {
			list.add(services.getTitle());
			map.put("title", list);
		}
		if (null != services.getUrl()) {
			list.add(services.getUrl());
			map.put("url", list);
		}
		if (services.getPower() != 0) {
			list.add(services.getPower());
			map.put("power", list);
		}
		if (null != services.getDescription()) {
			list.add(services.getDescription());
			map.put("description", list);
		}
		return md;
	}

	/**
	 * 进入添加页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/save")
	public String save() throws Exception {
		return "services_add";
	}

	/**
	 * 进入修改页面
	 * 
	 * @param services
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/change")
	public ModelAndView change(Services services) throws Exception {
		ModelAndView md = new ModelAndView();
		md.addObject("ser", services.getId());
		md.setViewName("services_update");
		return md;
	}

}
