package com.zqkc.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Component;

import com.zqkc.model.Business;

/**
 * 
 * @author hw 业务Service层接口
 *
 */
@Component
public interface IBusinessService {

	/**
	 * 添加平台
	 * 
	 * @param business
	 * @return
	 * @throws SQLException
	 */
	public boolean doAddBusiness(Business business) throws SQLException;

	/**
	 * 删除平台
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public boolean doDeleteBusiness(int id) throws SQLException;

	/**
	 * 修改平台
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public boolean doUpdateBusiness(Business business) throws SQLException;

	/**
	 * 查找id
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public int doFindBusinessById(Business bus) throws SQLException;

	/**
	 * 查询所有平台
	 * 
	 * @return
	 * @throws SQLException
	 */
	public List<Business> doFindBusinessAll() throws SQLException;

	/**
	 * 批量删除平台
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public boolean doDeleteBusinessList(List<Integer> list) throws Exception;

	/**
	 * 统计数量
	 * 
	 * @return
	 */
	public Object countBusiness();

}
