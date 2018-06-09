package com.zqkc.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Customer;

/**
 * 客户持久层接口
 * 
 * @author 夏日炎炎
 *
 */
@Repository
public interface ICustomerDao {

	/**
	 * 添加客户信息
	 * 
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	public int addCustomer(Customer customer) throws Exception;

	/**
	 * 查询所有客户信息
	 * 
	 * @return
	 * @throws Exception
	 */
	public List<Customer> findCustomer() throws Exception;

	/**
	 * 根据id查询客户信息
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public String findByCustomer(Customer cus) throws Exception;

	/**
	 * 修改客户信息
	 * 
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	public int updateCustomer(Customer customer) throws Exception;

	/**
	 * 删除客户信息
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public int deleteCustomer(int id) throws Exception;

	/**
	 * 批量删除客户信息
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public int deleteCustomerList(List<Integer> list) throws Exception;

	/**
	 * 批量修改客户信息
	 * 
	 * @return
	 * @throws Exception
	 */
	public int updateCustomerList(Map<String, List<Integer>> map) throws Exception;

	/**
	 * 批量查询客户信息
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public List<Customer> findCustomerList(Map<String, List<Integer>> map) throws Exception;

	/**
	 * 批量添加客户信息
	 * 
	 * @return
	 * @throws Exception
	 */
	public int addCustomerList(List<Customer> list) throws Exception;

	/**
	 * 统计客户数量
	 * 
	 * @return
	 */
	public int getCustomers();
}
