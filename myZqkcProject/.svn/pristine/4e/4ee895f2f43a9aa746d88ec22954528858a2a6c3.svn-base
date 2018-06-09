package com.zqkc.service.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.ICustomerDao;
import com.zqkc.model.Customer;
import com.zqkc.service.ICustomerService;
/**
 * 客户   Service层 实现
 * @author 夏日炎炎
 *
 */
@Service
public class CustomerService implements ICustomerService{
	
	private Logger log = Logger.getLogger(Logger.class);
	
	@Autowired
	private ICustomerDao customerDao;
	
	
	public void setCustomerDao(ICustomerDao customerDao) {
		this.customerDao = customerDao;
	}

	@Override
	public boolean doAdd(Customer customer) throws Exception {
		if(null!=customer){
			try{
				int n = customerDao.addCustomer(customer);
				return n > 0 ? true : false;
			}catch(Exception e){
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean doDelete(int id) throws Exception {
		if(0 != id){
			try{
				int n = customerDao.deleteCustomer(id);
				return n > 0 ? true : false;
			}catch(Exception e){
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean doDeleteList(List<Integer> list) throws Exception {
		if(null != list){
			try{
				int n = customerDao.deleteCustomerList(list);
				return n > 0 ? true : false;
			}catch(Exception e){
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean doUpdate(Customer customer) throws Exception {
		if(null != customer){
			try{
				int n = customerDao.updateCustomer(customer);
				return n > 0 ? true : false;
			}catch(Exception e){
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public List<Customer> doFind() throws Exception {
		List<Customer> list = null;
		try{
			list = customerDao.findCustomer();
			if(null != list){
				return list;
			}
		}catch(Exception e){
			log.debug(e.toString());
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Customer doFindBy(int id) throws Exception {
		Customer cus = new Customer();
		if(0 != id){
			try{
				cus = customerDao.findByCustomer(id);
				if(null != cus){
					return cus;
				}
			}catch(Exception e){
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return null;
	}

	@Override
	public int countCustomers() {
		return customerDao.getCustomers();
	}

}
