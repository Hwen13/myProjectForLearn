package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;
import org.springframework.stereotype.Repository;

import com.zqkc.model.Business;

/**
 * 
 * @author hw 业务Dao层接口
 *
 */
@Repository
public interface IBusinessDao {

	/**
	 * 添加业务
	 * 
	 * @param business
	 * @return
	 * @throws SQLException
	 */

	public int addBusiness(Business business) throws SQLException;

	/**
	 * 删除业务
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public int deleteBusiness(int id) throws Exception;

	/**
	 * 根据ID更新业务
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public int updateBusiness(Business business) throws SQLException;

	/**
	 * ID查询业务
	 * 
	 * @param id
	 * @return
	 * @throws SQLException
	 */
	public int findBusinessById(Business bus) throws SQLException;

	/**
	 * 查询所有业务
	 * 
	 * @return
	 * @throws SQLException
	 */
	public List<Business> findBusinessAll() throws SQLException;

	/**
	 * 统计业务数量
	 * 
	 * @return
	 */
	public int getBusiness();

	/**
	 * 批量删除平台
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public int deleteBusinessList(List<Integer> list) throws Exception;

}
