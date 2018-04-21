package com.zqkc.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Customer;
import com.zqkc.service.ICustomerService;
import com.zqkc.util.FileUploadUtils;

@Controller
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private ICustomerService customerService;

	public void setCustomerService(ICustomerService customerService) {
		this.customerService = customerService;
	}

	/**
	 * 客户列表
	 * 
	 * @param customer
	 * @param session
	 * @param req
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unused")
	@RequestMapping("/list")
	public ModelAndView list(Customer customer, HttpSession session, HttpServletRequest req) throws Exception {

		ModelAndView md = new ModelAndView();
		List<Customer> list = customerService.doFind();
		for (Customer cus : list) {
			String path = customerService.doFindBy(cus);
			String test = path.substring(path.indexOf("publics"));
			md.addObject("filepath", test);
		}
		if (null != list) {
			md.addObject("list", list);
			md.setViewName("customer_list");
		} else {
			md.addObject("manage", "没有数据");
		}
		return md;
	}

	/**
	 * 添加客户
	 * 
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/add")
	public ModelAndView addCustomer(HttpServletRequest request, Customer customer,
			@RequestParam(value = "filename", required = false) MultipartFile[] files) throws Exception {

		ModelAndView md = new ModelAndView();
		Customer cus = new Customer();
		cus.setDescription(customer.getDescription());
		cus.setName(customer.getName());
		cus.setPower(customer.getPower());
		cus.setTitle(customer.getTitle());
		cus.setUrl(customer.getUrl());
		for (int i = 0; i < files.length; i++) {
			if (!files[i].isEmpty()) {
				System.out.println("保存图片到服务器和数据库中" + files[i].getOriginalFilename());
				String str = FileUploadUtils.upload2(request, files[i]);// 保存图片到服务器
				String path = str.substring(str.indexOf("publics"));
				cus.setPath(path);
			}
		}
		boolean flag = customerService.doAdd(cus);
		if (flag) {
			md.setViewName("redirect:list");
		} else {
			md.setViewName("customer_add");
		}

		return md;
	}

	/**
	 * 更改客户
	 * 
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/update")
	public ModelAndView updateCustomer(Customer customer) throws Exception {

		ModelAndView md = new ModelAndView();
		boolean flag = customerService.doUpdate(customer);

		if (flag) {
			md.setViewName("redirect:list");
		} else {
			md.setViewName("customer_update");
		}
		return md;
	}

	/**
	 * 删除客户
	 * 
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delete")
	public ModelAndView deleteCustomer(Customer customer) throws Exception {

		ModelAndView md = new ModelAndView();
		boolean flag = customerService.doDelete(customer.getId());
		if (flag) {
			md.setViewName("redirect:list");
		}
		return md;
	}

	/**
	 * 批量删除客户
	 * 
	 * @param req
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
			boolean flag = customerService.doDeleteList(li);
			if (flag) {
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
	 * 进入添加页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/save")
	public String save() throws Exception {
		return "customer_add";
	}

	/**
	 * 进入修改页面
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/change")
	public ModelAndView change(Customer customer) throws Exception {
		ModelAndView md = new ModelAndView();
		md.addObject("cus", customer.getId());
		md.setViewName("customer_update");
		return md;
	}
}
