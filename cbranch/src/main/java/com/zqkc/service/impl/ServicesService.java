package com.zqkc.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IServicesDao;
import com.zqkc.model.Services;
import com.zqkc.service.IServicesService;

/**
 * 服务 Service层 实现
 * 
 * @author 夏日炎炎
 *
 */
@Service
public class ServicesService implements IServicesService {

	private static Logger log = Logger.getLogger(Logger.class);
	@Autowired
	private IServicesDao servicesDao;

	public void setServicesDao(IServicesDao servicesDao) {
		this.servicesDao = servicesDao;
	}

	/**
	 * 添加
	 */
	@Override
	public boolean doAdd(Services services) throws Exception {
		if (null != services) {
			try {
				int n = servicesDao.addServices(services);
				return n > 0 ? true : false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	/**
	 * 删除
	 */
	@Override
	public boolean doDelete(int id) throws Exception {
		if (0 != id) {
			try {
				int n = servicesDao.deleteServices(id);
				return n > 0 ? true : false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	/**
	 * 批量删除
	 */
	@Override
	public boolean doDeleteList(List<Integer> list) throws Exception {
		if (null != list) {
			try {
				int n = servicesDao.daleteServicesList(list);
				return n > 0 ? true : false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	/**
	 * 修改
	 */
	@Override
	public boolean doUpdate(Services services) throws Exception {
		if (null != services) {
			try {
				int n = servicesDao.updateServices(services);
				return n > 0 ? true : false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	/**
	 * 根据id查询
	 */
	@Override
	public Services doFindBy(int id) throws Exception {
		Services ser = new Services();
		if (0 != id) {
			try {
				ser = servicesDao.findByServices(id);
				if (null != ser) {
					return ser;
				}
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * 查询所有
	 */
	@Override
	public List<Services> doFind() throws Exception {
		List<Services> list = null;
		try {
			list = servicesDao.findServices();
			if (null != list) {
				return list;
			}
		} catch (Exception e) {
			log.debug(e.toString());
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 模糊查询
	 */
	@Override
	public List<Services> doFindServicesList(Map<String, List<Object>> map) throws Exception {
		List<Services> all = null;
		try {
			all = servicesDao.findServicesList(map);
			if (null != all) {
				return all;
			}
		} catch (Exception e) {
			log.debug(e.toString());
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int CountServices() throws Exception {

		return servicesDao.getServices();
	}

}
