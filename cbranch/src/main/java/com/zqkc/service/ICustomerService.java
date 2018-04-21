package com.zqkc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zqkc.model.Customer;

/**
 * 客户 Service层接口
 * 
 * @author 夏日炎炎
 *
 */
@Service
public interface ICustomerService {
	/**
	 * 添加客户信息
	 * 
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	public boolean doAdd(Customer customer) throws Exception;

	/**
	 * 删除客户信息
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public boolean doDelete(int id) throws Exception;

	/**
	 * 批量删除客户信息
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public boolean doDeleteList(List<Integer> list) throws Exception;

	/**
	 * 更新客户信息
	 * 
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	public boolean doUpdate(Customer customer) throws Exception;

	/**
	 * 查询所有客户信息
	 * 
	 * @return
	 * @throws Exception
	 */
	public List<Customer> doFind() throws Exception;

	/**
	 * 根据id查询客户信息
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public String doFindBy(Customer cus) throws Exception;

	/**
	 * 统计客户数量
	 * 
	 * @return
	 */
	public int countCustomers();
}
