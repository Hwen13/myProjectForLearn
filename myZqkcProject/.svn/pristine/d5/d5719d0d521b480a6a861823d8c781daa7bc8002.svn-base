package com.zqkc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.zqkc.model.Customer;
import com.zqkc.service.ICustomerService;

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
	 * @param customer
	 * @param session
	 * @param req
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/list")
	public ModelAndView list(Customer customer,HttpSession session,HttpServletRequest req)throws Exception{
		
		ModelAndView md = new ModelAndView();
		md.setViewName("customer_list");
		return md;
	}
	/**
	 * 添加客户
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/add")
	public ModelAndView addCustomer(Customer customer)throws Exception{
		
		ModelAndView md = new ModelAndView();
		if(customerService.doAdd(customer)){
			md.setViewName("customer_list");
		}else{
			md.setViewName("customer_add");
		}
		return md;
	}
	/**
	 * 更改客户
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/update")
	public ModelAndView updateCustomer(Customer customer)throws Exception{
		
		ModelAndView md = new ModelAndView();
		if(customerService.doUpdate(customer)){
			md.setViewName("customer_list");
		}else{
			md.setViewName("customer_update");
		}
		return md;
	}
	
	@RequestMapping("/save")
	public String save()throws Exception{
		return "customer_add";
	}
	@RequestMapping("/change")
	public String change()throws Exception{
		return "customer_update";
	}
}
