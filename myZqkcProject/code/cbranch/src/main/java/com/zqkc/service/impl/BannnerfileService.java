/**
 * 
 */
package com.zqkc.service.impl;

import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zqkc.dao.IBannerfileDao;
import com.zqkc.model.Bannerfile;
import com.zqkc.service.IBannerfileService;

/**
 * @author zch Service层  轮播图 实现类
 *
 */
@Service
public class BannnerfileService implements IBannerfileService{
	
	
	private Logger log = Logger.getLogger(Logger.class);
	
	@Autowired
	private IBannerfileDao bannerfileDao;	
	
	
	public void setBannerfileDao(IBannerfileDao bannerfileDao) {
		this.bannerfileDao = bannerfileDao;
	}
	
	@Override
	public boolean doAddBannerfile(Bannerfile bf) {
		if(null!=bf){
			
			try {
				return bannerfileDao.addBannerfile(bf)>0?true:false;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public boolean doDeleteBannerfile(Bannerfile bf) {
		if(null!=bf){
			try {
				return bannerfileDao.deleteBannerfile(bf)>0?true:false;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public LinkedList<Bannerfile> doFindBannerfile(Bannerfile bf) {
	 
		
			try {
				
				List<Bannerfile> list = bannerfileDao.findBannerfile(bf);
			
				LinkedList<Bannerfile> linked = new LinkedList<Bannerfile>();
				for(Bannerfile b:list){
					linked.add(b);
				}
				return linked;
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		return null;
	}

	
	@Override
	public boolean doUpdateBannerfile(Bannerfile bf) {
		if(null!=bf){
			try {
				return bannerfileDao.updateBannerfile(bf)>0?true:false;
			} catch (SQLException e) {
				log.debug(e.toString());
				e.printStackTrace();
			}
		}
		return false;
	}

	@Override
	public LinkedList<Bannerfile> doFindBannerfileAll() {

		try {
			
			List<Bannerfile> list = bannerfileDao.findBannerfileAll();
		
			LinkedList<Bannerfile> linked = new LinkedList<Bannerfile>();
			for(Bannerfile b:list){
				linked.add(b);
			}
			return linked;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return null;
	}

}
