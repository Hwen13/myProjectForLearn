package com.zqkc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zqkc.model.Services;
/**
 * 服务 Service接口
 * @author 夏日炎炎
 *
 */
@Service
public interface IServicesService {
	/**
	 * 添加服务信息
	 * @param services
	 * @return
	 * @throws Exception
	 */
	public boolean doAdd(Services services) throws Exception;
	/**
	 * 删除服务信息
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public boolean doDelete(int id) throws Exception;
	/**
	 * 批量删除服务信息
	 * @param list
	 * @return
	 * @throws Exception
	 */
	public boolean doDeleteList(List<Integer> list) throws Exception;
	/**
	 * 修改服务信息
	 * @param services
	 * @return
	 * @throws Exception
	 */
	public boolean doUpdate(Services services) throws Exception;
	/**
	 * 根据id查询服务信息
	 * @param id
	 * @return
	 * @throws Exception
	 */
	public Services doFindBy(int id) throws Exception;
	/**
	 * 查询所有服务信息
	 * @return
	 * @throws Exception
	 */
	public List<Services> doFind() throws Exception;
}
