package com.zqkc.dao;

import java.util.List;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Services;

/**
 * 服务持久层接口
 * 
 * @author 夏日炎炎
 *
 */
@Repository
public interface IServicesDao {

	/**
	 * 添加服务信息
	 * 
	 * @param services
	 * @return
	 * @throws Exception
	 */
	public int addServices(Services services) throws Exception;

	/**
	 * 查询所有服务信息
	 * 
	 * @return
	 * @throws Exception
	 */
	public List<Services> findServices() throws Exception;

	/**
	 * 根据id查询服务信息
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public Services findByServices(int id) throws Exception;

	/**
	 * 更新服务信息
	 * 
	 * @param services
	 * @return
	 * @throws Exception
	 */
	public int updateServices(Services services) throws Exception;

	/**
	 * 删除服务信息
	 * 
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public int deleteServices(int id) throws Exception;

	/**
	 * 批量删除服务信息
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public int daleteServicesList(List<Integer> list) throws Exception;

	/**
	 * 批量修改服务信息
	 * 
	 * @return
	 * @throws Exception
	 */
	public int updateServicesList(Map<String, List<Integer>> map) throws Exception;

	/**
	 * 批量添加服务信息
	 * 
	 * @return
	 * @throws Exception
	 */
	public int addServicesList(List<Services> list) throws Exception;

	/**
	 * 模糊查询服务信息
	 * 
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public List<Services> findServicesList(Map<String, List<Object>> map) throws Exception;

	/**
	 * 统计服务数量
	 * 
	 * @return
	 */
	public int getServices() throws Exception;

}
