package com.zqkc.service.impl;

import java.sql.SQLException;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IBusinessDao;

import com.zqkc.model.Business;
import com.zqkc.service.IBusinessService;

@Service
public class BusinessService implements IBusinessService {
	
	private Logger log = Logger.getLogger(Logger.class);//写入日志
	@Autowired
	protected IBusinessDao businessDao; //set注入方式将接口注入到实现类
	
	public void setBusinessDao(IBusinessDao businessDao) {
		this.businessDao = businessDao;
	}

	public IBusinessDao getBusinessDao() {
		return businessDao;
	}

	/**
	 * 添加平台
	 */
	@Override
	public boolean doAddBusiness(Business business) throws SQLException {
		
		if(business!=null){
			try {
				int n =businessDao.addBusiness(business);
				return n>0?true:false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}		
		}
		return false;
	}
	/**
	 * 删除平台
	 */
	@Override
	public boolean doDeleteBusiness(int id) throws SQLException {
		if(id>0){
			try {
				int n=businessDao.deleteBusiness(id);
				return n>0?true:false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}
	
	/**
	 * 修改平台
	 */
	@Override
	public boolean doUpdateBusiness(Business business) throws SQLException {
		
		if(null!=business){
			try {
				int n=businessDao.updateBusiness(business);
				return n>0?true:false;
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}
	
	/**
	 * 根据id查询平台
	 */
	@Override
	public Business doFindBusinessById(int id) throws SQLException {
		if(id>0){
			try {
				Business business=businessDao.findBusinessById(id);
				if(business!=null){
					return business;
				}else{
					return null;
				}
			} catch (Exception e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return null;
	}
	/**
	 * 查询所有平台
	 */
	@Override
	public List<Business> doFindBusinessAll() throws SQLException {
		List<Business> list = null;
		try{
			list = businessDao.findBusinessAll();
			if(null != list){
				return list;
			}
		}catch(Exception e){
			log.debug(e.toString());
			e.printStackTrace();
		}
		return null;
	}
	/**
	 * 批量删除平台
	 */
	@Override
	public boolean doDaleteBusinessList(List<Integer> list) throws Exception {
		if(null != list){
			try{
				int n = businessDao.daleteBusinessList(list);
				return n > 0 ? true : false;
			}catch(Exception e){
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}
	/**
	 * 统计数量
	 */
	@Override
	public Object countBusiness() {
		// TODO Auto-generated method stub
		return null;
	}
}
